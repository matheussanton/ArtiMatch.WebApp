"use client";

import { useState, createContext } from "react";
import { Choice, ChoiceContextType, EServiceType } from "./ChoiceTypes";

const initialChoice: Choice = {
  id: "",
  name: "",
  actualStep: 0,
  service: EServiceType.NONE,
  serviceDescription: "",
};

export const ChoiceContext = createContext<ChoiceContextType>({
  choice: initialChoice,
  SetChoice: () => {},
});

function ChoiceProvider({ children }: any) {
  const [choice, SetChoice] = useState<Choice>(initialChoice);

  return (
    <ChoiceContext.Provider
      value={{
        choice,
        SetChoice,
      }}
    >
      {children}
    </ChoiceContext.Provider>
  );
}

export default ChoiceProvider;
