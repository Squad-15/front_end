import { useState, useEffect } from "react";
import { toast } from "react-toastify";

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

    const handleNextStep = (e: React.FormEvent) => {
      e.preventDefault();
      if (step < 3) {
        setStep(step + 1);
      }
    };

  const handlePrevStep = () => setStep((prev) => prev - 1);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
  
      const user = await response.json();

      console.log(user)
  
      // Monta o corpo do e-mail
      const emailBody = {
        ownerRef: user.firstName,
        emailFrom: "jota.nunes@email.com",
        emailTo: user.email,
        subject: "Acesso ao Sistema - Criação de Senha",
        text: `Prezado ${user.firstName},
  
        Sua matrícula no sistema é: ${user.numberRegister}.
        
        Para acessar a plataforma, por favor, defina sua senha através do link abaixo:
        https://sistema.com.br/definir-senha?token=${user.token || 'abc123'}
        
        Caso tenha qualquer dúvida ou necessite de suporte, estamos à disposição.
        
        Atenciosamente,
        Equipe Jota Nunes`
      };

      console.log("Corpo do e-mail:", emailBody);
  
      // Envia o e-mail
      await fetch('http://localhost:8080/sending-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailBody)
      });
  
      toast.success("Usuário cadastrado e e-mail enviado com sucesso!");
  
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      toast.error("Erro ao cadastrar usuário.");
    }
  };
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  
  //   try {
  //     const response = await fetch("http://localhost:8080/users/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (response.ok) {
  //       const result = await response.json();
  //       toast.success("Usuário criado com sucesso!");
  //       console.log("Usuário criado com sucesso:", result);
  //     } else {
  //       const error = await response.text();
  //       console.error("Erro ao criar usuário:", error);
  //     }
  //   } catch (err) {
  //     console.error("Erro na requisição:", err);
  //   }
  // };  

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
