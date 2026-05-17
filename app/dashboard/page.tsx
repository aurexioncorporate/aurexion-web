export default function Dashboard() {
  return (
    <div
      style={{
        background: "#000814",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#00d4ff",
          fontSize: "60px",
          marginBottom: "30px",
        }}
      >
        Dirección Ejecutiva
      </h1>

      <p style={{ fontSize: "24px" }}>
        Gerente General — AUREXION
      </p>

      <img
        src="/gerente.jpg"
        alt="Gerente"
        style={{
          width: "350px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 0 30px #00d4ff",
        }}
      />

      <h2
        style={{
          color: "#00d4ff",
          marginTop: "50px",
          fontSize: "40px",
        }}
      >
        Contacto Corporativo
      </h2>

      <p style={{ fontSize: "22px" }}>
        contacto@aurexion.com
      </p>
    </div>
  );
}