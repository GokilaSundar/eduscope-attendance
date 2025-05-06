import React from "react";
import { useState } from "react";
import { auth } from "../src/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      signInWithEmailAndPassword(auth, email, password);
      console.log(email, password);

      alert("Succesfully Login");
    } catch (error) {
      alert("Login Falied", error);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h2>Login</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleClick}
          style={{
            border: "1px solid white",
            borderRadius: "5px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ textAlign: "left" }}>Email :</label>
            <input
              required
              type="email"
              value={email}
              style={{
                border: "1px solid white",
                borderRadius: "4px",
                width: "300px",
                padding: "5px",
                backgroundColor: "#242424",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ textAlign: "left" }}>Password :</label>
            <input
              required
              type="password"
              value={password}
              style={{
                border: "1px solid white",
                borderRadius: "4px",
                width: "300px",
                padding: "5px",
                backgroundColor: "#242424",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              width: "100%",
              marginTop: "20px",
              padding: "7px",
              border: "1px solid white",
              borderRadius: "5px",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
