import { useState } from "react";
import "./Login.css";
import logo from "./img/Logo Preta (2).png"


export default function Login() {
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Matricula:", matricula);
    console.log("Senha:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo}/>
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
            <input
            type="checkbox"
            id="checkbox"
            />
            <label>Manter-me conectado</label>
        </div>
        <button onClick={handleLogin} className="login-button">
          Entrar
        </button>
      </div>
    </div>
  );
}
