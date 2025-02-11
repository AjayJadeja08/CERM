const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app = express();

dotenv.config({ path: './.env' });

const jwtKey = process.env.jwtKey; 

app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',    
    user: 'root',        
    password: '', 
    database: 'cerm'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Register Route
app.post('/register', async (req, res) => {
    const { first_name, last_name, email, username, password, user_contact, user_role } = req.body;
    console.log(req.body)

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const query = 'INSERT INTO user_registration (first_name, last_name, email,username, password, user_contact, user_role) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [first_name, last_name, email, username, hashedPassword, user_contact, user_role], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password, user_role } = req.body;

    if (![1, 2, 3].includes(Number(user_role))) {
        return res.status(400).json({ error: 'Invalid user role' });
    }

    db.query('SELECT * FROM user_registration WHERE username = ? AND user_role = ?', [username, user_role], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid username, role, or password' });

        const user = results[0];

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid username, role, or password' });

        // Generate JWT Token
        const token = jwt.sign({ id: user.userid, role: user.user_role }, jwtKey, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token, role: user.user_role });
    });
});

// Authentication Middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    
    jwt.verify(token, jwtKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Protected Route Example
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'You have accessed a protected route', user: req.user });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
