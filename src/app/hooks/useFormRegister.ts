// hooks/useFormRegister.ts
import { useState, useEffect } from "react";

export const useFormRegister = () => {
  const [step, setStep] = useState(1);
  const [departaments, setDepartaments] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    lname: "",
    email: "",
    number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    fetch("http://localhost:8080/departaments")
      .then((res) => res.json())
      .then((data) => setDepartaments(data));
  }, []);

  return {
    step,
    setStep,
    departaments,
    formData,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
  };
};
