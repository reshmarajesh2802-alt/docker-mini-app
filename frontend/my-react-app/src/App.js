import React, { useEffect, useState } from "react";

function App() {
  const [setMessage, setMessage] = useState("");  

  useEffect(() => {
  fetch("https://docker-mini-backend-jmvp.onrender.com/api/hello") // <-- This is the line to change
    .then(res => res.json())

    .then(text => setMessage(text)) 

    .catch(err => console.error(err));
}, []);  //temporary commit


  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Frontend + Backend + DB with Docker</h1>
      <p>Message from backend: <b>{message}</b></p>
    </div>
  );
}

export default App;