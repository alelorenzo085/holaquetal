import React from "react";

export default function Hearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="hearts-container">
      {hearts.map((_, i) => (
        <div key={i} className="heart"></div>
      ))}
    </div>
  );
}
