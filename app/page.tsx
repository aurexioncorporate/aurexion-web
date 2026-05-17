"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const entrar = () => {
    router.push("/dashboard");
  };

  return (
    <main
      style={{
        background: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/logo.jpg"
        alt="AUREXION"
        style={{
          width: "700px",
          borderRadius: "20px",
          boxShadow: "0 0 30px gold",
        }}
      />

      <button
        onClick={entrar}
        style={{
          marginTop: "30px",
          padding: "15px 40px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          background: "gold",
          color: "black",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Entrar al Sistema
      </button>
    </main>
  );
}