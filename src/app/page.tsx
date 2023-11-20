"use client";

import CategoryCard from "../app/Components/CategoryCard/CategoryCard";
import StepperComponent from "../app/Components/Stepper/Stepper";

import { useContext, useState } from "react";
import { ChoiceContext } from "@/Contexts/Choice/ChoiceContext";
import { Button, useToast, Grid, GridItem, Skeleton } from "@chakra-ui/react";

import {
  BsFillHouseGearFill,
  BsBrushFill,
  BsLayoutTextWindow,
} from "react-icons/bs";
import { EServiceType } from "@/Contexts/Choice/ChoiceTypes";
import InspirationGrid from "./Components/InspirationGrid/InspirationGrid";

const services = [
  {
    icon: <BsBrushFill size="50px" />,
    description: "Comming Soon",
    disabled: true,
    serviceType: EServiceType.DIGITAL_ART,
  },
  {
    icon: <BsFillHouseGearFill size="50px" />,
    description: "Home Interior",
    disabled: false,
    serviceType: EServiceType.HOME_INTERIOR,
  },
  {
    icon: <BsLayoutTextWindow size="50px" />,
    description: "Comming Soon",
    disabled: true,
    serviceType: EServiceType.WEB_DESIGN,
  },
];

export default function Home() {
  const { choice, SetChoice } = useContext(ChoiceContext)!;
  const toast = useToast();

  const [description, setDescription] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <main className="flex min-h-screen flex-col px-20 sm:px-40 py-24">
      <div className="pb-12 overflow-x-auto">
        <StepperComponent />
      </div>

      <div
        className={`
        ${choice.actualStep === 0 ? "flex" : "hidden"}
        flex flex-wrap justify-evenly z-10 w-full font-mono text-2
        transition-all duration-300`}
      >
        {services.map((service, index) => (
          <CategoryCard
            key={index}
            icon={service.icon}
            description={service.description}
            disabled={service.disabled}
            serviceType={service.serviceType}
          />
        ))}
      </div>

      <div
        className={`
        ${choice.actualStep === 1 ? "flex" : "hidden"}
        flex flex-wrap justify-evenly z-10 w-full font-mono text-2
        transition-all duration-300`}
      >
        <div className="flex flex-col justify-center items-center w-full mb-5">
          <label htmlFor="description" className="mb-2">
            Descreva com detalhes o ambiente que procura
          </label>
          <textarea
            className="w-full  border-2 border-gray-300 rounded-md p-2"
            name="description"
            id="description"
            cols={30}
            rows={2}
            maxLength={200}
            onChange={onTextAreaChange}
          ></textarea>
          <div className="flex justify-end w-full">
            <span className="text-gray-400 text-sm" id="description">
              {description ? description.length : 0}/200
            </span>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <Button
            colorScheme="blue"
            variant="solid"
            size="md"
            onClick={goToStepTwo}
          >
            Next
          </Button>
        </div>
      </div>

      {/* <div
        className={`
      ${choice.actualStep === 2 ? "flex" : "hidden"}
      flex flex-col justify-evenly z-10 w-full font-mono text-2
      transition-all duration-300`}
      >
        <InspirationGrid />

        <Button
          className="mt-5"
          onClick={() => setIsImageLoading(!isImageLoading)}
        >
          toggle
        </Button>
      </div> */}

      {choice.actualStep === 2 &&
        <div
          className={`
          ${choice.actualStep === 2 ? "flex" : "hidden"}
          flex flex-col justify-evenly z-10 w-full font-mono text-2
          transition-all duration-300`}
        >
          <InspirationGrid />

        </div>}

    </main>
  );

  function onTextAreaChange() {
    const textArea = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;

    setDescription(textArea.value);
  }

  function goToStepTwo() {
    if (!description) {
      toast({
        title: "Descrição é obrigatória.",
        description: "Por favor, descreva como deseja o serviço.",
        status: "error",
        duration: 4500,
        isClosable: true,
      });

      return;
    }

    SetChoice({ ...choice, serviceDescription: description, actualStep: 2 });
  }
}
