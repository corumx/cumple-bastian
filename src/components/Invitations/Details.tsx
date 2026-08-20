export default function Details() {
  return (
    <section className="details-section">
      <div className="details-cloud details-cloud-left">
        <span />
        <span />
      </div>

      <div className="details-cloud details-cloud-right">
        <span />
        <span />
      </div>

      <div className="details-star details-star-1">✦</div>
      <div className="details-star details-star-2">✦</div>
      <div className="details-star details-star-3">✦</div>

      <div className="details-container">
        <div className="details-header">
          <div className="details-icon">
            <img
              src={`${import.meta.env.BASE_URL}images/hero/personajes.png`}
              alt=""
            />
          </div>

          <p>GUARDÁ LA FECHA</p>

          <h2>¡Será un día inolvidable!</h2>

          <span className="details-line" />
        </div>

        <div className="details-grid">
          <article className="detail-card">
            <div className="detail-card-icon">📅</div>

            <div className="detail-card-content">
              <span className="detail-label">FECHA</span>
              <strong>24 de octubre</strong>
              <small>Sábado · 2026</small>
            </div>
          </article>

          <article className="detail-card">
            <div className="detail-card-icon">⏰</div>

            <div className="detail-card-content">
              <span className="detail-label">HORA</span>
              <strong>17:30 hs</strong>
              <small>Te esperamos</small>
            </div>
          </article>

          <article className="detail-card">
            <div className="detail-card-icon">📍</div>

            <div className="detail-card-content">
              <span className="detail-label">LUGAR</span>
              <strong>En mi casa</strong>
              
            </div>
          </article>
        </div>

        <div className="location-card">
          <div className="location-character">
            <img
              src={`${import.meta.env.BASE_URL}images/hero/numero-1.png`}
              alt=""
            />
          </div>

          <div className="location-content">
            <span>¿Cómo llegar?</span>

            <strong>
              Encontrá el lugar de la celebración
            </strong>

            <p>
              Tocá el botón para abrir la ubicación
              en Google Maps.
            </p>

            <a
              href="https://maps.app.goo.gl/ADRKpYSbWw9MDeF9A"
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              <span>📍</span>
              Ver ubicación
            </a>
          </div>
        </div>

        <div className="details-message">
          <p>
            Será un día muy especial y nos encantaría
            <br className="desktop-break" />
            compartirlo con vos.
          </p>

          <strong>¡Te esperamos! 💙</strong>
        </div>
      </div>

      <style>{`
        .details-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #fff8e8 0%,
            #fffdf5 55%,
            #e9f8fc 100%
          );
          font-family: "Fredoka", sans-serif;
          isolation: isolate;
        }

        .details-container {
          position: relative;
          width: min(100%, 900px);
          padding: 50px 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 5;
        }

        .details-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .details-icon {
          width: 320px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border-radius: 50%;
          background: #ffd45c;
          border: 5px solid #fff;
          box-shadow: 0 8px 20px rgba(70, 100, 110, 0.2);
          overflow: hidden;
        }

        .details-icon img {
          width: 450px;
          height: 200px;
          max-width: none;
          display: block;
          object-fit: cover;
        }

        .details-header p {
          margin: 0 0 8px;
          color: #527d9a;
          font-size: clamp(15px, 2vw, 19px);
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .details-header h2 {
          margin: 0;
          color: #416b82;
          font-size: clamp(38px, 5vw, 52px);
          font-weight: 800;
          line-height: 1;
          text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.9);
        }

        .details-line {
          display: block;
          width: 88px;
          height: 5px;
          margin-top: 24px;
          border-radius: 999px;
          background: #ffd45c;
        }

        .details-grid {
          width: 100%;
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .detail-card {
          min-height: 180px;
          padding: 25px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: rgba(255, 255, 255, 0.88);
          border: 3px solid rgba(255, 255, 255, 0.95);
          border-radius: 26px;
          box-shadow:
            0 12px 25px rgba(70, 100, 115, 0.1),
            inset 0 2px 0 rgba(255, 255, 255, 0.9);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .detail-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 17px 30px rgba(70, 100, 115, 0.15);
        }

        .detail-card-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          border-radius: 50%;
          background: #c9eef7;
          font-size: 26px;
        }

        .detail-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .detail-label {
          color: #78909c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .detail-card strong {
          margin-top: 5px;
          color: #416b82;
          font-size: clamp(18px, 2.5vw, 23px);
          font-weight: 800;
        }

        .detail-card small {
          margin-top: 3px;
          color: #78909c;
          font-size: 13px;
        }

        .location-card {
          width: 100%;
          margin-top: 25px;
          padding: 28px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          background: #5fb4d2;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 14px 28px rgba(55, 110, 130, 0.16);
        }

        .location-character {
          width: 170px;
          height: 225px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          border-radius: 22px;
        }

        .location-character img {
          width: 165px;
          max-width: none;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .location-content {
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          flex: 1;
        }

        .location-content > span {
          color: rgba(255, 255, 255, 0.85);
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .location-content strong {
          margin-top: 4px;
          color: #fff;
          font-size: clamp(19px, 3vw, 25px);
          font-weight: 800;
        }

        .location-content p {
          margin: 5px 0 15px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 18px;
        }

        .location-button {
          display: inline-flex;
          align-self: center;
          margin-top: 10px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          color: #416b82;
          background: #fff8e8;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 5px 10px rgba(40, 80, 95, 0.12);
        }

        .details-message {
          margin-top: 30px;
          text-align: center;
          color: #527d9a;
        }

        .details-message p {
          margin: 0;
          font-size: clamp(14px, 2vw, 17px);
          line-height: 1.5;
        }

        .details-message strong {
          display: block;
          margin-top: 6px;
          color: #527d9a;
          font-size: 18px;
        }

        .details-cloud {
          position: absolute;
          width: 170px;
          height: 55px;
          border-radius: 999px;
          background: rgba(169, 220, 235, 0.25);
          z-index: 1;
        }

        .details-cloud span {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: rgba(169, 220, 235, 0.25);
        }

        .details-cloud span:first-child {
          width: 60px;
          height: 60px;
          left: 25px;
          bottom: 3px;
        }

        .details-cloud span:last-child {
          width: 75px;
          height: 75px;
          left: 70px;
          bottom: 0;
        }

        .details-cloud-left {
          left: -80px;
          top: 20%;
        }

        .details-cloud-right {
          right: -80px;
          bottom: 18%;
        }

        .details-star {
          position: absolute;
          color: #ffd45c;
          font-size: 25px;
          z-index: 2;
          animation: details-float 4s ease-in-out infinite;
        }

        .details-star-1 {
          top: 18%;
          left: 7%;
        }

        .details-star-2 {
          top: 30%;
          right: 10%;
          animation-delay: 1s;
        }

        .details-star-3 {
          bottom: 12%;
          left: 18%;
          animation-delay: 2s;
        }

        @keyframes details-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        /* TABLET */
        @media (max-width: 700px) {
          .details-container {
            padding: 45px 18px 50px;
          }

          .details-grid {
            gap: 12px;
          }

          .detail-card {
            padding: 20px 10px;
          }

          .location-card {
            padding: 24px 20px;
            gap: 18px;
          }

          .location-character {
            width: 145px;
            height: 190px;
          }

          .location-character img {
            width: 140px;
          }
        }

        /* CELULAR */
        @media (max-width: 600px) {
          .details-section {
            min-height: auto;
            margin-top: 0;
            padding-top: 0;
          }

          .details-container {
            width: 100%;
            padding: 40px 15px 35px;
          }

          .details-icon {
            width: 180px;
            height: 125px;
            margin-bottom: 17px;
          }

          .details-icon img {
            width: 175px;
            height: 120px;
          }

          .details-header p {
            font-size: 14px;
            letter-spacing: 1.2px;
          }

          .details-header h2 {
            font-size: 36px;
          }

          .details-line {
            width: 80px;
            height: 5px;
            margin-top: 20px;
          }

          .details-grid {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 370px;
            margin-top: 35px;
            gap: 12px;
          }

          .detail-card {
            min-height: 105px;
            padding: 15px 20px;
            flex-direction: row;
            justify-content: flex-start;
            text-align: left;
            gap: 15px;
            border-radius: 20px;
          }

          .detail-card-icon {
            width: 50px;
            height: 50px;
            margin: 0;
            flex-shrink: 0;
          }

          .detail-card-content {
            align-items: flex-start;
          }

          .detail-card strong {
            font-size: 19px;
          }

          /* TARJETA DE UBICACIÓN */
          .location-card {
            width: 100%;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 22px 16px 20px;
            margin-top: 20px;
            gap: 8px;
            border-radius: 24px;
          }

          /* IMAGEN MÁS PEQUEÑA EN CELULAR */
          .location-character {
  width: 130px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.location-character img {
  width: 85px;
  height: auto;
  display: block;
  object-fit: contain;
}
          .location-content {
            width: 100%;
            align-items: center;
          }

          .location-content > span {
            font-size: 27px;
          }

          .location-content strong {
            max-width: 300px;
            font-size: 18px;
            line-height: 1.2;
          }

          .location-content p {
            max-width: 280px;
            margin: 5px auto 12px;
            font-size: 14px;
            line-height: 1.35;
          }

          .location-button {
            margin-top: 5px;
            padding: 9px 17px;
            font-size: 13px;
          }

          .details-message {
            margin-top: 25px;
          }

          .desktop-break {
            display: none;
          }

          .details-cloud-left {
            left: -120px;
          }

          .details-cloud-right {
            right: -120px;
          }
        }

        /* CELULARES PEQUEÑOS */
        @media (max-width: 380px) {
          .details-container {
            padding: 35px 12px 30px;
          }

          .details-icon {
            width: 170px;
            height: 115px;
          }

          .details-icon img {
            width: 165px;
            height: 110px;
          }

          .details-header h2 {
            font-size: 32px;
          }

          .detail-card {
            min-height: 95px;
          }

          .detail-card strong {
            font-size: 17px;
          }

          /* IMAGEN TODAVÍA MÁS PEQUEÑA */
          .location-character {
            width: 140px;
            height: 105px;
          }

          .location-character img {
            width: 135px;
          }

          .location-content > span {
            font-size: 25px;
          }

          .location-content strong {
            font-size: 17px;
          }

          .location-content p {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}