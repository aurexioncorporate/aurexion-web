export default function Dashboard() {
  return (
    <div
      style={{
        background: "#000814",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#00d4ff",
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        Dirección Ejecutiva
      </h1>

      <p
        style={{
          fontSize: "28px",
          marginBottom: "30px",
        }}
      >
        Gerente General — AUREXION
      </p>

      <img
        src="/gerente.jpg"
        alt="Gerente"
        style={{
          width: "420px",
          maxWidth: "90%",
          borderRadius: "20px",
          boxShadow: "0 0 40px #00d4ff",
          marginBottom: "50px",
        }}
      />

      <h2
        style={{
          color: "#00d4ff",
          fontSize: "45px",
          marginBottom: "20px",
        }}
      >
        Contacto Corporativo
      </h2>

      <p
        style={{
          fontSize: "24px",
        }}
      >
        contacto@aurexion.com
      </p>
    </div>
  );
}