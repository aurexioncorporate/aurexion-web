export default function Dashboard() {
  return (
    <div
      style={{
        background: "#000814",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#00d4ff",
          fontSize: "60px",
          marginBottom: "40px",
        }}
      >
        Dirección Ejecutiva
      </h1>

      <div
        style={{
          background: "#001122",
          border: "1px solid #00d4ff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 0 20px #00d4ff",
          display: "inline-block",
        }}
      >
        <p style={{ color: "white", fontSize: "24px" }}>
          Gerente General
        </p>

        <p style={{ color: "#00d4ff" }}>
          AUREXION CORPORATION
        </p>

        <img
          src="/gerente.jpg"
          alt="Gerente"
          style={{
            width: "350px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
}