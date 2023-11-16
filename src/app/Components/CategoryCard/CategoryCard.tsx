import React, { useContext } from "react";
import { ChoiceContext } from "@/Contexts/Choice/ChoiceContext";

export default function CategoryCard({
  icon,
  description,
  disabled,
  serviceType,
}: any) {
  const { choice, SetChoice } = useContext(ChoiceContext)!;

  return (
    <div
      onClick={() =>
        SetChoice({ ...choice, service: serviceType, actualStep: 1 })
      }
      className={`w-[250px] h-[350px] max-w-[250px] max-h-[350px] bg-gray-100
                rounded-md shadow-md drop-s hadow-md m-2 p-4 mb-4
                ${
                  disabled
                    ? "opacity-50 "
                    : "hover:shadow-lg hover:drop-shadow-lg hover:cursor-pointer hover:scale-105"
                }
                transition-all duration-300`}
    >
      <div className="flex flex-col items-center justify-evenly h-full container">
        <div className="flex items-center justify-center">
          <p className="text-4xl font-bold text-center text-black">{icon}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold text-center text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
