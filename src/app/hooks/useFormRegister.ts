import { useState, useEffect } from "react";

export const useFormRegister = () => {
  const [step, setStep] = useState(1);
  const [departaments, setDepartaments] = useState([]);
  const [profile, setProfile] = useState([]);
  const [typeconnection, setTypeConnection] = useState([]);
  const [roleUser, setRoleUser] = useState([]);
  const [location, setLocation] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roleUser: "",
    cargo: "",
    departamento: "",
    typeconnection: "",
    location: "",
    dataAdmissao: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  
    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Usuário criado com sucesso:", result);
        // Você pode redirecionar ou mostrar uma mensagem de sucesso
      } else {
        const error = await response.text();
        console.error("Erro ao criar usuário:", error);
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
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

  useEffect(() => {
    fetch("http://localhost:8080/metadata/roleuser")
      .then((res) => res.json())
      .then((data) => setRoleUser(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/metadata/location")
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  return {
    step,
    setStep,
    departaments,
    profile,
    typeconnection,
    roleUser,
    location,
    formData,
    handleChange,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
  };
};
