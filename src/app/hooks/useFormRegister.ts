import { useState, useEffect } from "react";

export const useFormRegister = () => {
  const [step, setStep] = useState(1);
  const [departaments, setDepartaments] = useState([]);
  const [profile, setProfile] = useState([]);
  const [typeconnection, setTypeConnection] = useState([]);



  const [formData, setFormData] = useState({
    name: "",
    lname: "",
    email: "",
    number: "",
    username: "",
    nivelPermissao: "",
    cargo: "",
    departamento: "",
    profile: "",
    typeconnection: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    fetch("http://localhost:8080/metadata/departaments")
      .then((res) => res.json())
      .then((data) => setDepartaments(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/metadata/profiles")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/metadata/typeconnection")
      .then((res) => res.json())
      .then((data) => setTypeConnection(data));
  }, []);

  return {
    step,
    setStep,
    departaments,
    profile,
    typeconnection,
    formData,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
  };
};
