import { Dispatch, SetStateAction } from "react";

export enum EServiceType {
  NONE = 0,
  DIGITAL_ART = 1,
  HOME_INTERIOR = 2,
  WEB_DESIGN = 3,
}

export type Choice = {
  id: string;
  name: string;
  actualStep: number;
  service: EServiceType;
  serviceDescription: string;
};

export type ChoiceContextType = {
  choice: Choice;
  SetChoice: Dispatch<SetStateAction<Choice>>;
};
