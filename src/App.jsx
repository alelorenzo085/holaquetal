import React, { useState, useEffect } from "react";
import ValentineCard from "./components/ValentineCard";
import Hearts from "./components/Hearts";
import Confetti from "./components/Confetti";

export default function App() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="app">
      <Hearts />
      {success && <Confetti />}
      <ValentineCard onSuccess={() => setSuccess(true)} />
    </div>
  );
}
