import './hero.css'

export default function Hero() {
  return (
    <section className="hero">

      {/* Glow fondo */}
      <div className="hero-glow"></div>

      {/* Grid */}
      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <span className="badge">
            Frontend Developer ✨
          </span>

          <h1>
            Construyo
            <span> experiencias </span>
            web modernas
          </h1>

          <p>
            Frontend Developer especializada en React,
            Next.js y TypeScript.
            Creo interfaces rápidas,
            modernas y enfocadas en experiencia de usuario.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Ver proyectos
            </button>

            <button className="secondary-btn">
              Hablemos
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-visual">

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <div className="planet"></div>

          <div className="card-floating">

            <span>Santo Bocado 🍞</span>

            <p>
              Ecommerce bakery
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}