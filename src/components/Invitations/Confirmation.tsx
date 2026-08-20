import { useState } from "react";

export default function Confirmation() {
  const [people, setPeople] = useState(1);

  const phoneNumber = "595991901482";

  const message = encodeURIComponent(
    `Hola 👋 Confirmamos nuestra asistencia al cumple de Bastian 🎉💙
Somos ${people} ${people === 1 ? "persona" : "personas"}.
¡Nos vemos! 🥳`
  );

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${message}`;

  const decreasePeople = () => {
    setPeople((current) => Math.max(1, current - 1));
  };

  const increasePeople = () => {
    setPeople((current) => Math.min(10, current + 1));
  };

  return (
    <section className="confirmation-section">
      <div className="confirmation-cloud confirmation-cloud-left">
        <span />
        <span />
      </div>

      <div className="confirmation-cloud confirmation-cloud-right">
        <span />
        <span />
      </div>

      <div className="confirmation-star confirmation-star-1">
        ✦
      </div>

      <div className="confirmation-star confirmation-star-2">
        ✦
      </div>

      <div className="confirmation-container">
        <div className="confirmation-characters">
          <img
            src="/images/hero/personajes.png"
            alt=""
          />
        </div>

        <div className="confirmation-content">
          <p className="confirmation-small-title">
            ¡QUEREMOS SABER DE VOS!
          </p>

          <h2>¿Nos acompañás?</h2>

          <span className="confirmation-line" />

          <p className="confirmation-text">
            Estamos preparando un día muy especial
            <br className="desktop-break" />
            y nos encantaría contar con vos.
          </p>

          <div className="people-selector">
            <span className="people-title">
              ¿Cuántas personas asistirán?
            </span>

            <div className="people-counter">
              <button
                type="button"
                onClick={decreasePeople}
                disabled={people === 1}
                aria-label="Disminuir cantidad"
              >
                −
              </button>

              <span className="people-number">
                {people}
              </span>

              <button
                type="button"
                onClick={increasePeople}
                disabled={people === 10}
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>

            <span className="people-description">
              {people === 1
                ? "1 persona asistirá"
                : `${people} personas asistirán`}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="confirmation-button"
          >
            <span className="whatsapp-icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.1 21.6h-.1c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.9 1 1-3.8-.2-.4a9.8 9.8 0 1 1 8.3 4.8Zm5.4-7.3c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.3-1.5-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
              </svg>
            </span>

            Confirmar asistencia
          </a>

          <span className="confirmation-note">
            Se abrirá WhatsApp con tu confirmación 💙
          </span>
        </div>
      </div>

      <style>{`
        .confirmation-section {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 45px 0 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(180deg,#FFFDF5 0%,#E9F8FC 100%);
          font-family: "Fredoka",sans-serif;
        }

        .confirmation-container {
          position: relative;
          width: min(100%,800px);
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 5;
        }

        .confirmation-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .confirmation-characters {
          width: 220px;
          height: 120px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .confirmation-characters img {
          width: 215px;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .confirmation-small-title {
          margin: 0 0 7px;
          color: #527D9A;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .confirmation-content h2 {
          margin: 0;
          color: #416B82;
          font-size: clamp(38px,6vw,55px);
          font-weight: 800;
          line-height: 1;
          text-shadow: 2px 2px 0 rgba(255,255,255,.9);
        }

        .confirmation-line {
          display: block;
          width: 85px;
          height: 5px;
          margin-top: 18px;
          border-radius: 999px;
          background: #FFD45C;
        }

        .confirmation-text {
          margin: 16px 0 18px;
          color: #66818F;
          font-size: 16px;
          line-height: 1.5;
        }

        .people-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 5px 0 16px;
        }

        .people-title {
          color: #416B82;
          font-size: 15px;
          font-weight: 700;
        }

        .people-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 9px;
          padding: 5px 8px;
          background: #FFFFFF;
          border: 2px solid #DDF3F8;
          border-radius: 999px;
          box-shadow: 0 5px 14px rgba(65,107,130,.1);
        }

        .people-counter button {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 50%;
          background: #C9EEF7;
          color: #416B82;
          font-size: 25px;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
          transition: transform .2s ease,background .2s ease;
        }

        .people-counter button:hover:not(:disabled) {
          transform: scale(1.08);
          background: #B5E5F2;
        }

        .people-counter button:disabled {
          opacity: .35;
          cursor: not-allowed;
        }

        .people-number {
          min-width: 30px;
          color: #416B82;
          font-size: 25px;
          font-weight: 800;
        }

        .people-description {
          margin-top: 5px;
          color: #78909C;
          font-size: 12px;
        }

        .confirmation-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 250px;
          margin: 0;
          padding: 13px 20px;
          color: #FFFFFF;
          background: #25D366;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 800;
          box-shadow: 0 9px 18px rgba(37,211,102,.22);
          transition: transform .2s ease,box-shadow .2s ease;
        }

        .confirmation-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 13px 24px rgba(37,211,102,.28);
        }

        .whatsapp-icon {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-icon svg {
          width: 24px;
          height: 24px;
          fill: #FFFFFF;
        }

        .confirmation-note {
          display: block;
          width: 100%;
          max-width: 320px;
          margin-top: 8px;
          color: #78909C;
          font-size: 12px;
          text-align: center;
        }

        .confirmation-cloud {
          position: absolute;
          width: 150px;
          height: 50px;
          border-radius: 999px;
          background: rgba(169,220,235,.25);
          z-index: 1;
        }

        .confirmation-cloud span {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: rgba(169,220,235,.25);
        }

        .confirmation-cloud span:first-child {
          width: 55px;
          height: 55px;
          left: 20px;
          bottom: 2px;
        }

        .confirmation-cloud span:last-child {
          width: 70px;
          height: 70px;
          left: 60px;
          bottom: 0;
        }

        .confirmation-cloud-left {
          left: -75px;
          top: 20%;
        }

        .confirmation-cloud-right {
          right: -75px;
          bottom: 18%;
        }

        .confirmation-star {
          position: absolute;
          color: #FFD45C;
          font-size: 25px;
          z-index: 2;
          animation: confirmation-float 4s ease-in-out infinite;
        }

        .confirmation-star-1 {
          left: 9%;
          top: 25%;
        }

        .confirmation-star-2 {
          right: 10%;
          bottom: 25%;
          animation-delay: 1s;
        }

        @keyframes confirmation-float {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @media (max-width:600px) {
          .confirmation-section {
            padding: 35px 0 40px;
          }

          .confirmation-container {
            padding: 0 15px;
          }

          .confirmation-characters {
            width: 190px;
            height: 105px;
            margin-bottom: 8px;
          }

          .confirmation-characters img {
            width: 185px;
          }

          .confirmation-small-title {
            font-size: 12px;
            letter-spacing: 1.4px;
          }

          .confirmation-content h2 {
            font-size: 38px;
          }

          .confirmation-line {
            width: 70px;
            height: 4px;
            margin-top: 15px;
          }

          .confirmation-text {
            margin: 14px 0 16px;
            font-size: 14px;
          }

          .desktop-break {
            display: none;
          }

          .people-selector {
            margin: 3px 0 14px;
          }

          .people-title {
            font-size: 14px;
          }

          .people-counter {
            gap: 16px;
            margin-top: 8px;
          }

          .people-counter button {
            width: 36px;
            height: 36px;
          }

          .people-number {
            font-size: 24px;
          }

          .people-description {
            margin-top: 4px;
          }

          .confirmation-button {
            min-width: 250px;
            padding: 13px 20px;
            font-size: 15px;
          }

          .confirmation-note {
            margin-top: 7px;
            font-size: 11px;
          }

          .confirmation-cloud-left {
            left: -110px;
          }

          .confirmation-cloud-right {
            right: -110px;
          }
        }
      `}</style>
    </section>
  );
}