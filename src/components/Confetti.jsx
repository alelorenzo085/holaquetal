import React, { useEffect, useState } from "react";

export default function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100 + "vw",
      animationDelay: Math.random() * 2 + "s",
      color: ["#ff357f", "#ffc1cc", "#ff6f91", "#ffe066"][Math.floor(Math.random() * 4)],
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="confetti-container">
      {pieces.map((p, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            backgroundColor: p.color,
          }}
        ></div>
      ))}
    </div>
  );
}
