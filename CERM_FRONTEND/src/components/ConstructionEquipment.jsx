import React from "react";
import Card from "./Card";
import CardContent from "./CardContent";
const equipmentData = [
  {
    category: "Cranes",
    items: [
      { name: "Escort F15 (15 ton)", price: "₹110,000 per unit per month" },
      { name: "ACE Hydra (14 ton)", price: "₹85,000 per month" },
      { name: "Crawler-mounted cranes" },
      { name: "Wheel-mounted cranes" },
      { name: "Fixed cranes" },
      { name: "Mobile cranes" }
    ],
  },
  {
    category: "Road Machinery",
    items: [
      { name: "Soil Compactor Escort S 250", price: "₹90,000 per month" },
      { name: "Road Milling Machine", price: "₹750,000 per month" },
      { name: "Road Roller", price: "₹150,000 per month" },
      { name: "Tandem Vibratory Roller", price: "₹132,000 per month" },
      { name: "Sensor Paver Vogele (7 Mtr)", price: "₹240,000 per month" },
      { name: "13 Meter Sensor Paver", price: "₹950,000 per month" },
      { name: "Apollo Sensor Paver AP550", price: "₹260,000 per month" }
    ],
  },
  {
    category: "Earth Moving Machinery",
    items: [
      { name: "Excavators", price: "₹180,000 - ₹450,000 per month" },
      { name: "Compact Excavators" },
      { name: "Long Reach Excavators" },
      { name: "Hitachi Excavators (EX-350, EX-200, EX-210)" },
      { name: "Bulldozers" },
      { name: "Cat Bulldozer D-80", price: "₹182,000 per month" },
      { name: "BEML D80 A12", price: "₹210,000 per month" }
    ],
  },
  {
    category: "Loaders",
    items: [{ name: "JCB Backhoe Loader (3DX)", price: "₹85,000 per month" }],
  },
  {
    category: "Concrete Machinery",
    items: [],
  }
];

const ConstructionEquipment = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Construction Equipment Rental Costs</h1>

      {equipmentData.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{category.category}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {category.items.length > 0 ? (
              category.items.map((item, idx) => (
                <Card key={idx} className="p-4 shadow-lg">
                  <CardContent>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    {item.price && <p className="text-sm text-gray-600">{item.price}</p>}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No equipment listed in this category.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConstructionEquipment;
