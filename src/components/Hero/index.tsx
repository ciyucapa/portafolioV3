"use client";

import './hero.css'
import Image from 'next/image';

export default function Hero() {

function scrollToSection(
    sectionId: string
  ){

    document
      .getElementById(sectionId)
      ?.scrollIntoView({

        behavior:"smooth",

        block:"start"

      });

  }


  return (
    <section id='hero' className="hero">

      {/* Glow fondo */}
      <div className="hero-glow"></div>

      {/* Grid */}
      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <span className="badge">
           Frontend Developer • React • Next.js ✨
          </span>

          <h1>
            Construyo
            <span> experiencias </span>
            web modernas
          </h1>

          <p>
            Construyo interfaces modernas,
            dashboards administrativos
            y APIs con Node.js,
            Express y Prisma,
            enfocadas en experiencia de usuario
            y soluciones reales.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                scrollToSection(
                  "projects"
                )
              }
            >

            Ver proyectos

            </button>

            <a
              href="/Cindy_Caceres_Frontend_Developer.pdf"
              download
              className="secondary-btn"
              >

              Descargar CV 📄

            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-visual">

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <div className="planet"></div>

          <div className="card-floating">

            <div className="project-preview">

              <Image
                  src="/santo-bocado-preview.png"
                  alt="Santo Bocado"
                  width={320}
                  height={180}
                  className="preview-image"
              />

            </div>

            <span>
              Santo Bocado 🍞
            </span>

            <p>
              Landing + API Platform
            </p>

            <small>
              React • Node • Prisma •
            </small>
             <p>
             🚧 Building Dashboard
            </p>

            <p>
              <a
              href="https://santo-bocado.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >

                Ver proyecto ↗

            </a>
            </p>

        </div>

        </div>

      </div>

    </section>
  );
}