import React, { useState, useEffect } from "react";

const SECRET_CODE = "250126"; // Código secreto
const BLOCK_TIME = 60 * 60 * 44 * 1000; // 1 día y 20 horas

export default function ValentineCard({ onSuccess }) {
  const [showInput, setShowInput] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [blockedUntil, setBlockedUntil] = useState(null);

  useEffect(() => {
    const blockData = localStorage.getItem("blockedUntil");
    if (blockData) {
      const blockTime = new Date(parseInt(blockData));
      if (blockTime > new Date()) {
        setBlockedUntil(blockTime);
      } else {
        localStorage.removeItem("blockedUntil");
      }
    }
  }, []);

  const handleYesClick = () => {
    if (blockedUntil) return;
    setShowInput(true);
  };

  const handleNoClick = () => {
    alert("Adiós 😢");
  };

  const handleSubmit = () => {
    if (code === SECRET_CODE) {
      onSuccess(); // Activa confeti
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    } else {
      const blockTime = new Date().getTime() + BLOCK_TIME;
      localStorage.setItem("blockedUntil", blockTime);
      setBlockedUntil(new Date(blockTime));
      setError("Código incorrecto. Intenta más tarde 😢");
    }
  };

  return (
    <div className="card">
      <h1>🤍 Hola, mi niña 🤍</h1>
      <p>¿Quieres ver la sorpresa?</p>

      {blockedUntil ? (
        <p className="error">
          Estás bloqueado hasta: {blockedUntil.toLocaleString()}
        </p>
      ) : showInput ? (
        <div className="input-container">
          <input
            type="text"
            placeholder="Introduce el código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleSubmit} className="button-pink">
            Enviar
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <div className="buttons">
          <button onClick={handleYesClick} className="button-pink">
            Sí
          </button>
          <button onClick={handleNoClick} className="button-grey">
            No
          </button>
        </div>
      )}
    </div>
  );
}
