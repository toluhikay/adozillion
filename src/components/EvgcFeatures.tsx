import React from "react";
import { GiWaterfall, GiSoccerField, GiSpikedFence, GiRoad, GiDoubleStreetLights, GiWaterTank, GiGreenPower, GiGrass, GiParkBench } from "react-icons/gi";

const EvgcFeatures = () => {
  const FeaturesArray = [
    { id: 1, label: "Recreational Facilities", icon: <GiSoccerField /> },
    { id: 2, label: "Perimeter fencing ", icon: <GiSpikedFence /> },
    { id: 3, label: "Drainage Systems", icon: <GiWaterfall /> },
    { id: 4, label: "Interlocked roads ", icon: <GiRoad /> },
    { id: 5, label: "Street Lights ", icon: <GiDoubleStreetLights /> },
    { id: 6, label: "Central Water System", icon: <GiWaterTank /> },
    { id: 7, label: "Electricity", icon: <GiGreenPower /> },
    { id: 8, label: "Green Areas ", icon: <GiGrass /> },
    { id: 9, label: "Parks and Gardens ", icon: <GiParkBench /> },
  ];

  return (
    <div className="my-12 w-full">
      <h2 className="text-center lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium mb-12">Features</h2>
      <div className="w-full flex flex-wrap justify-between">
        {FeaturesArray.map((item) => {
          return (
            <div className="md:w-[30%] sm:w-[47%] w-full flex flex-col items-center text-center mb-12" key={item.id}>
              <span className="text-green-600 text-6xl mb-2">{item.icon}</span>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EvgcFeatures;
