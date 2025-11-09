import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch('https://docker-mini-backend-jmvp.onrender.com') // <-- This is the line to change
    .then(res => res.json())
    .then(text => setBackendMessage(text))
    .catch(err => console.error(err));
}, []);


  return (
    <div style={{ textAlign: "//docker-mini-app-uisc.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Frontend + Backend + DB with Docker</h1>
      <p>Message from backend: <b>{message}</b></p>
    </div>
  );
}

export default App;