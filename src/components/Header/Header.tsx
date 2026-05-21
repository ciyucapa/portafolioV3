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

      setScrolled(
        window.scrollY > 40
      );

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

  function scrollToSection(
    sectionId:string
  ){

    document
      .getElementById(
        sectionId
      )
      ?.scrollIntoView({

        behavior:"smooth",

        block:"start"

      });

    setOpen(false);

  }

  return (

    <>

      <header
        className={`
          header

          ${
            scrolled
            ? "header-scroll"
            : ""
          }
        `}
      >

        <div
          className="
          header-container
          "
        >

          {/* LOGO */}

          <Link
            href="/"
            className="logo"
          >

            CINDY

            <span>

              .

            </span>

            DEV_

          </Link>

          {/* DESKTOP */}

          <nav
            className="
            desktop-nav
            "
          >

            <button
              onClick={() =>
                scrollToSection(
                  "hero"
                )
              }
            >

              Inicio

            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "about"
                )
              }
            >

              Sobre mí

            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "projects"
                )
              }
            >

              Proyectos

            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "stack"
                )
              }
            >

              Stack

            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "contact"
                )
              }
            >

              Contacto

            </button>

          </nav>

          {/* BOTON */}

          <button
            className="
            desktop-button
            "
            onClick={() =>
              scrollToSection(
                "contact"
              )
            }
          >

            Hablemos ✨

          </button>

          {/* MOBILE */}

          <button
            className="
            mobile-toggle
            "
            onClick={() =>
              setOpen(
                !open
              )
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

        <button
          onClick={() =>
            scrollToSection(
              "hero"
            )
          }
        >

          Inicio

        </button>

        <button
          onClick={() =>
            scrollToSection(
              "about"
            )
          }
        >

          Sobre mí

        </button>

        <button
          onClick={() =>
            scrollToSection(
              "projects"
            )
          }
        >

          Proyectos

        </button>

        <button
          onClick={() =>
            scrollToSection(
              "stack"
            )
          }
        >

          Stack

        </button>

        <button
          onClick={() =>
            scrollToSection(
              "contact"
            )
          }
        >

          Contacto

        </button>

      </div>

    </>

  );

}