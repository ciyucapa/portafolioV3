"use client";

import "./header.css";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (

    <>

      <header
        className={`header ${
          scrolled ? "header-scroll" : ""
        }`}
      >

        <div className="header-container">

          {/* LOGO */}

          <Link
            href="/"
            className="logo"
          >

            CINDY

            <span>.</span>

            DEV_

          </Link>

          {/* DESKTOP */}

          <nav className="desktop-nav">

            <Link href="/">
              Inicio
            </Link>

            <Link href="/sobre-mi">
              Sobre mí
            </Link>

            <Link href="/proyectos">
              Proyectos
            </Link>

            <Link href="/stack">
              Stack
            </Link>

            <Link href="/contacto">
              Contacto
            </Link>

          </nav>

          {/* BOTON */}

          <button
            className="desktop-button"
          >

            Hablemos ✨

          </button>

          {/* MOBILE */}

          <button
            className="
            mobile-toggle
            "
            onClick={() =>
              setOpen(!open)
            }
          >

            {

              open

              ? <X />

              : <Menu />

            }

          </button>

        </div>

      </header>

      {/* MOBILE MENU */}

      <div
        className={`
        mobile-menu

        ${
          open
          ? "mobile-open"
          : ""
        }
        `}
      >

        <Link href="/">
          Inicio
        </Link>

        <Link href="/sobre-mi">
          Sobre mí
        </Link>

        <Link href="/proyectos">
          Proyectos
        </Link>

        <Link href="/stack">
          Stack
        </Link>

        <Link href="/contacto">
          Contacto
        </Link>

      </div>

    </>

  );

}