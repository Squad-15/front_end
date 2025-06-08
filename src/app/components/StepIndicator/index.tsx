"use client";
import React from "react";

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  title: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ step, currentStep, title }) => {
  const isActive = currentStep === step;
  const isCompleted = currentStep > step;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
          ${isActive ? "bg-blue-600 text-white" : isCompleted ? "bg-green-500 text-white" : "bg-slate-300 text-slate-700"}
        `}
      >
        {step}
      </div>
      <span className={`mt-2 text-md ${isActive ? "text-blue-600" : "text-slate-500"}`}>
        {title}
      </span>
    </div>
  );
};

export default StepIndicator;
