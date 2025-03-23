import { useState } from "react";

export function useLogin() {
  const [matricula, setMatricula] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("Matricula:", matricula);
    console.log("Senha:", password);
  };

  return {
    matricula,
    setMatricula,
    password,
    setPassword,
    handleLogin,
  };
}