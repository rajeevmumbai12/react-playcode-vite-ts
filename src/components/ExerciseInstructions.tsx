import React from "react";
import { TbSquareChevronUp, TbSquareChevronDown } from "react-icons/tb";
import "./ExerciseInstructions.css";

type ExerciseInstructionsProps = {
  isOpen: boolean;
  title: string;
  onOpenToggle: () => void;
  children: React.ReactNode;
};

export function ExerciseInstructions({
  isOpen,
  title,
  onOpenToggle,
  children,
}: ExerciseInstructionsProps) {
  return (
    <div className="exerciseInstructions">
      <div className="instructionsHeader" onClick={onOpenToggle}>
        {isOpen ? (
          <TbSquareChevronUp className="icon" />
        ) : (
          <TbSquareChevronDown className="icon" />
        )}{" "}
        {title}
      </div>
      {isOpen && children}
    </div>
  );
}
