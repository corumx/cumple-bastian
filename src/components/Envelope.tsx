import "@fontsource/fredoka";
import { useEffect, useRef, useState } from "react";
import Invitation from "./Invitation";

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [envelopeTransitionFinished, setEnvelopeTransitionFinished] =
    useState(false);

  /*
    =========================================================
    MÚSICA
    =========================================================
  */

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.6;

    audio.play().catch(() => {
      // El navegador puede bloquear el autoplay.
    });
  }, []);

  const startMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.6;

    audio.play().catch(() => {
      // El navegador puede bloquear la reproducción.
    });
  };

  /*
    =========================================================
    ABRIR SOBRE
    =========================================================
  */

  const handleOpen = () => {
    if (isOpen) return;

    startMusic();

    setIsOpen(true);

    /*
      Primero dejamos que se abra la solapa.
    */

    setTimeout(() => {
      setShowInvitation(true);
    }, 700);

    /*
      Esperamos a que termine la transición
      de la tarjeta antes de pasarla al flujo
      normal de la página.
    */

    setTimeout(() => {
      setEnvelopeTransitionFinished(true);
    }, 2550);
  };

  /*
    =========================================================
    RENDER
    =========================================================
  */

  return (
    <>
      <style>{`

        /* =====================================================
           PANTALLA DEL SOBRE
        ===================================================== */

        .envelope-page {
          position: relative;

          width: 100%;
          min-height: 100svh;

          display: flex;
          align-items: center;
          justify-content: center;

          background-image:
            url("${import.meta.env.BASE_URL}images/fondo-looney.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          overflow-x: hidden;
          overflow-y: visible;

          isolation: isolate;
        }


        /* =====================================================
           CAPA DE OPACIDAD
        ===================================================== */

        .envelope-page::before {
          content: "";

          position: absolute;

          inset: 0;

          background: #4A5D87;

          opacity: 0.35;

          z-index: 0;

          pointer-events: none;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .envelope-intro {
          position: absolute;

          left: 50%;
          top: 50%;

          width:
            min(
              90vw,
              500px
            );

          transform:
            translate(
              -50%,
              -50%
            );

          display: flex;

          flex-direction: column;

          align-items: center;

          z-index: 20;

          transition:
            opacity 0.5s ease,
            transform 0.5s ease;
        }


        .envelope-intro.hidden {
          opacity: 0;

          transform:
            translate(
              -50%,
              -50%
            )
            scale(0.97);

          pointer-events: none;
        }


        /* =====================================================
           TEXTO SUPERIOR
        ===================================================== */

        .envelope-message-top {
          margin:
            0 0 28px;

          text-align: center;

          color: #000000;

          font-family:
            "Fredoka",
            sans-serif;

          font-size:
            clamp(
              21px,
              4vw,
              29px
            );

          font-weight: 700;

          line-height: 1.25;

          text-shadow:
            1px 1px 1px
            rgba(
              151,
              148,
              148,
              0.8
            );
        }


        /* =====================================================
           CONTENEDOR SOBRE
        ===================================================== */

        .envelope-container {
          width: 100%;
        }


        /* =====================================================
           BOTÓN
        ===================================================== */

        .envelope-button {
          width: 100%;

          aspect-ratio: 1.5;

          padding: 0;

          border: none;

          background: transparent;

          cursor: pointer;

          -webkit-tap-highlight-color: transparent;
        }


        /* =====================================================
           SOBRE
        ===================================================== */

        .envelope {
          position: relative;

          width: 100%;
          height: 100%;

          filter:
            drop-shadow(
              0 12px 18px
              rgba(
                40,
                55,
                65,
                0.32
              )
            );

          isolation: isolate;
        }


        /* =====================================================
           PARTE TRASERA
        ===================================================== */

        .envelope-back {
          position: absolute;

          inset: 0;

          background: #FFF8E8;

          border-radius: 10px;

          box-shadow:

            0 14px 25px
            rgba(
              50,
              65,
              75,
              0.22
            ),

            inset 0 1px 0
            rgba(
              255,
              255,
              255,
              0.45
            ),

            inset 0 -3px 5px
            rgba(
              70,
              90,
              100,
              0.10
            );

          z-index: 1;
        }


        /* =====================================================
           FRENTE
        ===================================================== */

        .envelope-front {
          position: absolute;

          inset: 0;

          background: #5FB4D2;

          clip-path: polygon(
            0 0,
            50% 52%,
            100% 0,
            100% 100%,
            0 100%
          );

          border-radius: 10px;

          filter:
            drop-shadow(
              0 2px 3px
              rgba(
                35,
                70,
                85,
                0.22
              )
            );

          box-shadow:
            inset 0 -5px 8px
            rgba(
              35,
              75,
              90,
              0.08
            );

          z-index: 3;
        }


        /* =====================================================
           SOMBRAS DE LOS PLIEGUES
        ===================================================== */

        .envelope-front::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              35deg,
              transparent 49.25%,
              rgba(
                35,
                80,
                100,
                0.10
              ) 49.7%,
              rgba(
                255,
                255,
                255,
                0.12
              ) 50%,
              transparent 50.4%
            ),

            linear-gradient(
              -35deg,
              transparent 49.25%,
              rgba(
                35,
                80,
                100,
                0.10
              ) 49.7%,
              rgba(
                255,
                255,
                255,
                0.12
              ) 50%,
              transparent 50.4%
            );

          pointer-events: none;

          z-index: 1;
        }


        /* =====================================================
           SOLAPA
        ===================================================== */

        .envelope-flap {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 52%;

          background: #5FB4D2;

          clip-path: polygon(
            0 0,
            100% 0,
            50% 100%
          );

          transform-origin:
            50% 0%;

          transform:
            rotateX(0deg);

          transition:
            transform 0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );

          filter:
            drop-shadow(
              0 8px 9px
              rgba(
                35,
                65,
                80,
                0.28
              )
            )

            drop-shadow(
              0 2px 2px
              rgba(
                255,
                255,
                255,
                0.20
              )
            );

          z-index: 5;
        }


        /* =====================================================
           SOMBRA SOLAPA
        ===================================================== */

        .envelope-flap::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: 0;

          height: 12px;

          background:
            linear-gradient(
              to bottom,
              rgba(
                35,
                70,
                85,
                0.22
              ),
              rgba(
                35,
                70,
                85,
                0
              )
            );

          opacity: 0.85;

          pointer-events: none;
        }


        /* =====================================================
           SOBRE ABIERTO
        ===================================================== */

        .envelope.open .envelope-flap {
          transform:
            rotateX(155deg);
        }


        /* =====================================================
           INVITACIÓN DURANTE LA TRANSICIÓN
        ===================================================== */

        .invitation-from-envelope {
          position: fixed;

          left: 50%;
          top: 30%;

          width:
            min(
              88vw,
              430px
            );

          height:
            calc(
              min(
                88vw,
                430px
              ) / 1.5
            );

          transform-origin:
            center center;

          background: #FFF8E8;

          border-radius: 10px;

          overflow: hidden;

          box-shadow:
            0 15px 35px
            rgba(
              50,
              60,
              70,
              0.2
            );

          z-index: 100;

          opacity: 0;

          animation:
            invitation-expand
            1.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            forwards;
        }


        /*
          Cuando termina la animación:

          dejamos de usar fixed
          y dejamos que Invitation
          ocupe el flujo normal.
        */

        .invitation-from-envelope.finished {
          position: relative;

          left: auto;
          top: auto;

          width: 100%;

          height: auto;

          min-height: 100svh;

          transform: none;

          border-radius: 0;

          overflow: visible;

          box-shadow: none;

          animation: none;

          opacity: 1;

          z-index: 1;
        }


        /* =====================================================
           ANIMACIÓN
        ===================================================== */

        @keyframes invitation-expand {

          0% {
            width:
              min(
                88vw,
                430px
              );

            height:
              calc(
                min(
                  88vw,
                  430px
                ) / 1.5
              );

            border-radius: 10px;

            opacity: 0;

            transform:
              translate(
                -50%,
                -10%
              )
              scale(0.15);
          }


          25% {
            width:
              min(
                88vw,
                430px
              );

            height:
              calc(
                min(
                  88vw,
                  430px
                ) / 1.5
              );

            border-radius: 10px;

            opacity: 1;

            transform:
              translate(
                -50%,
                -10%
              )
              scale(1);
          }


          55% {
            width:
              min(
                88vw,
                430px
              );

            height:
              calc(
                min(
                  88vw,
                  430px
                ) / 1.5
              );

            border-radius: 10px;

            opacity: 1;

            transform:
              translate(
                -50%,
                -10%
              )
              scale(1);
          }


          100% {
            width: 100vw;

            height: 100svh;

            border-radius: 0;

            opacity: 1;

            transform:
              translate(
                -50%,
                -30%
              )
              scale(1);
          }
        }


        /* =====================================================
           TEXTO INFERIOR
        ===================================================== */

        .envelope-message-bottom {
          margin:
            28px 0 0;

          text-align: center;

          color: #040404;

          font-family:
            Arial,
            sans-serif;

          font-size:
            clamp(
              16px,
              3vw,
              20px
            );

          font-weight: 700;

          line-height: 1.3;

          text-shadow:
            1px 1px 1px
            rgba(
              151,
              148,
              148,
              0.8
            );
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 480px) {

          .envelope-intro {
            width: 88vw;
          }

          .envelope-message-top {
            margin-bottom: 22px;

            font-size: 22px;
          }

          .envelope-message-bottom {
            margin-top: 22px;

            font-size: 17px;
          }

        }

      `}</style>


      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/musica.mp3`}
        loop
        preload="auto"
      />


      {/* =====================================================
          PANTALLA
      ===================================================== */}

      <main className="envelope-page">

        {/* ===================================================
            INTRO
        =================================================== */}

        <div
          className={`
            envelope-intro
            ${showInvitation ? "hidden" : ""}
          `}
        >

          <div className="envelope-message-top">
            Hay una invitación especial
            <br />
            para ti!!
          </div>


          <div className="envelope-container">

            <button
              type="button"
              className="envelope-button"
              onClick={handleOpen}
              aria-label="Abrir invitación"
            >

              <div
                className={`
                  envelope
                  ${isOpen ? "open" : ""}
                `}
              >

                <div className="envelope-back" />

                <div className="envelope-front" />

                <div className="envelope-flap" />

              </div>

            </button>

          </div>


          <div className="envelope-message-bottom">
            Haz clic en el sobre
            <br />
            para abrirla
          </div>

        </div>


        {/* =====================================================
            INVITACIÓN
        ===================================================== */}

        {showInvitation && (
          <div
            className={`
              invitation-from-envelope
              ${envelopeTransitionFinished ? "finished" : ""}
            `}
          >
            <Invitation />
          </div>
        )}

      </main>

    </>
  );
}