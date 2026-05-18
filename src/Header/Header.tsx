"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =========================================
          🌌 HEADER
      ========================================= */}
      <header
        className="
          fixed
          top-10
          inset-x-0
          z-50
          flex
          justify-center
        "
      >
        <div
          className="
            glass

            w-full
            max-w-6xl

            mx-6
            lg:mx-10

            h-[88px]

            rounded-[28px]

            px-6
            lg:px-8

            flex
            items-center
            justify-between
          "
        >
          {/* =========================================
              ✨ LOGO
          ========================================= */}
          <Link href="/">
            <div
              className="
                flex
                items-center
                gap-1

                cursor-pointer

                uppercase
                tracking-[0.45em]

                text-base
                md:text-lg

                font-bold
                text-white

                transition
                hover:opacity-80
              "
            >
              CINDY

              <span
                className="
                  text-[var(--primary)]
                  drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
                "
              >
                .
              </span>

              DEV_
            </div>
          </Link>

          {/* =========================================
              🌌 DESKTOP NAVIGATION
          ========================================= */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="nav-link active">
              01. Inicio
            </Link>

            <Link href="/sobre-mi" className="nav-link">
              02. Sobre mí
            </Link>

            <Link href="/proyectos" className="nav-link">
              03. Proyectos
            </Link>

            <Link href="/stack" className="nav-link">
              04. Stack
            </Link>

            <Link href="/contacto" className="nav-link">
              05. Contacto
            </Link>
          </nav>

          {/* =========================================
              💜 BUTTON
          ========================================= */}
          <div className="hidden md:flex">
            <button
              className="
                group
                relative
                overflow-hidden

                rounded-full

                px-8
                py-4

                text-white
                font-semibold
                tracking-wide

                transition-all
                duration-500

                bg-gradient-to-r
                from-[var(--primary)]
                to-[var(--secondary)]

                shadow-[0_0_30px_rgba(139,92,246,0.35)]

                hover:scale-[1.03]
                hover:shadow-[0_0_45px_rgba(139,92,246,0.55)]
              "
            >
              {/* Glow Layer */}
              <span
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                  duration-500

                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]
                "
              />

              {/* Content */}
              <span
                className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-2
                "
              >
                Hablemos

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ✨
                </span>
              </span>
            </button>
          </div>

          {/* =========================================
              📱 MOBILE BUTTON
          ========================================= */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden

              w-11
              h-11

              rounded-full

              glass

              flex
              items-center
              justify-center

              text-white
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* =========================================
          📱 MOBILE MENU
      ========================================= */}
      <div
        className={`
          fixed
          inset-0
          z-40
          md:hidden

          transition-all
          duration-500

          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* =========================================
            🌌 BACKDROP
        ========================================= */}
        <div
          className="
            absolute
            inset-0

            bg-[rgba(7,7,11,0.92)]

            backdrop-blur-2xl
          "
        />

        {/* =========================================
            ✨ MENU CONTENT
        ========================================= */}
        <div
          className="
            relative
            z-10

            h-full

            flex
            flex-col
            items-center
            justify-center

            gap-10
          "
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-black
              tracking-wide

              text-white

              hover:text-[var(--primary)]

              transition
            "
          >
            01. Inicio
          </Link>

          <Link
            href="/sobre-mi"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-black
              tracking-wide

              text-white

              hover:text-[var(--primary)]

              transition
            "
          >
            02. Sobre mí
          </Link>

          <Link
            href="/proyectos"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-black
              tracking-wide

              text-white

              hover:text-[var(--primary)]

              transition
            "
          >
            03. Proyectos
          </Link>

          <Link
            href="/stack"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-black
              tracking-wide

              text-white

              hover:text-[var(--primary)]

              transition
            "
          >
            04. Stack
          </Link>

          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-black
              tracking-wide

              text-white

              hover:text-[var(--primary)]

              transition
            "
          >
            05. Contacto
          </Link>

          {/* =========================================
              💜 MOBILE BUTTON
          ========================================= */}
          <button
            className="
              primary-button

              mt-4

              px-8
              py-4

              rounded-full

              text-white
              font-semibold
            "
          >
            Hablemos ✨
          </button>
        </div>
      </div>
    </>
  );
}