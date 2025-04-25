"use client";
import { useLogin } from "../hooks/handleLogin";
import "/public/styles/login.css";
import logo from "/public/assets/img/logo.png";

export default function Login() {
  const {
    matricula,
    setMatricula,
    password,
    setPassword,
    handleLogin,
    isRedirecting,
  } = useLogin();

  if (isRedirecting) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
        <p className="mt-4 text-primary font-semibold">Redirecionando...</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo.src} alt="Logo" />
        <input
          type="number"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <div className="checkbox">
          <input type="checkbox" id="checkbox" />
          <label>Manter-me conectado</label>
        </div>
        <button onClick={handleLogin} className="login-button">
          Entrar
        </button>
      </div>
    </div>
  );
}
