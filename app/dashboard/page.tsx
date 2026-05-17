"use client";

export default function Home() {

  return (

    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#071226,#020617)",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* HERO */}
      <section
        style={{
          padding: "120px 60px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "90px",
            color: "#00d4ff",
            marginBottom: "20px",
          }}
        >
          AUREXION
        </h1>

        <h2
          style={{
            fontSize: "36px",
            fontWeight: "normal",
            color: "#dbeafe",
            maxWidth: "1000px",
            margin: "0 auto",
            lineHeight: "1.5",
          }}
        >
          Transformación corporativa, inteligencia empresarial,
          liderazgo ejecutivo y desarrollo estratégico internacional.
        </h2>

        <button
          style={{
            marginTop: "50px",
            padding: "20px 45px",
            fontSize: "22px",
            borderRadius: "16px",
            border: "none",
            background: "#00d4ff",
            color: "#00111a",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow:
              "0 0 30px rgba(0,212,255,0.6)",
          }}
        >
          Conoce nuestra organización
        </button>

      </section>

      {/* SERVICIOS */}
      <section
        style={{
          padding: "80px 60px",
        }}
      >

        <h2
          style={{
            fontSize: "50px",
            color: "#00d4ff",
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          Servicios Corporativos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >

          <div style={cardStyle}>
            <h3 style={cardTitle}>
              Inteligencia Empresarial
            </h3>

            <p style={cardText}>
              Modelos estratégicos para optimización
              organizacional y crecimiento corporativo.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>
              Educación Ejecutiva
            </h3>

            <p style={cardText}>
              Formación internacional enfocada
              en liderazgo, innovación y transformación.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>
              Transformación Digital
            </h3>

            <p style={cardText}>
              Integración tecnológica e inteligencia
              artificial aplicada a negocios modernos.
            </p>
          </div>

        </div>

      </section>

      {/* GERENTE */}
      <section
        style={{
          padding: "100px 40px",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "52px",
            color: "#00d4ff",
            marginBottom: "50px",
          }}
        >
          Dirección Ejecutiva
        </h2>

        <img
          src="/Gerente.JPG"
          alt="Gerente"
          style={{
            width: "1200px",
            maxWidth: "95%",
            borderRadius: "25px",
            border: "4px solid #00d4ff",
            boxShadow:
              "0 0 40px rgba(0,212,255,0.8)",
          }}
        />

      </section>

      {/* CONTACTO */}
      <section
        style={{
          padding: "100px 40px",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "50px",
            color: "#00d4ff",
            marginBottom: "30px",
          }}
        >
          Contacto Corporativo
        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#dbeafe",
            marginBottom: "20px",
          }}
        >
          contacto@aurexion.com
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#dbeafe",
          }}
        >
          Estados Unidos • Colombia • Latinoamérica
        </p>

      </section>

    </main>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid #00d4ff",
  borderRadius: "20px",
  padding: "40px",
  boxShadow:
    "0 0 20px rgba(0,212,255,0.15)",
};

const cardTitle = {
  color: "#00d4ff",
  fontSize: "28px",
  marginBottom: "20px",
};

const cardText = {
  color: "#dbeafe",
  fontSize: "18px",
  lineHeight: "1.7",
};