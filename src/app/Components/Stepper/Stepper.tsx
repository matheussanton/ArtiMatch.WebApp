import { useContext } from "react";
import { ChoiceContext } from "@/Contexts/Choice/ChoiceContext";

import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "1° Passo", description: "Serviço" },
  { title: "2° Passo", description: "Descreva" },
  { title: "3° Passo", description: "Inspirações" },
  { title: "4° Passo", description: "Freelancer" },
];

function StepperComponent() {
  const { choice } = useContext(ChoiceContext)!;

  return (
    <div className="">
      <Stepper index={choice.actualStep} colorScheme='green'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator className="transition-all duration-300">
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default StepperComponent;
