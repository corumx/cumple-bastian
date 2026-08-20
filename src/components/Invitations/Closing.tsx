export default function Closing() {
  return (
    <section className="closing-section">
      <div className="closing-cloud closing-cloud-left">
        <span />
        <span />
      </div>

      <div className="closing-cloud closing-cloud-right">
        <span />
        <span />
      </div>

      <div className="closing-star closing-star-1">
        ✦
      </div>

      <div className="closing-star closing-star-2">
        ✦
      </div>

      <div className="closing-character closing-character-top">
        <img
          src={`${import.meta.env.BASE_URL}images/characters/personajes.png`}
          alt=""
        />
      </div>

      <div className="closing-character closing-character-left">
        <img
          src={`${import.meta.env.BASE_URL}images/characters/personaje1.png`}
          alt=""
        />
      </div>

      <div className="closing-character closing-character-right">
        <img
          src={`${import.meta.env.BASE_URL}images/characters/personaje2.png`}
          alt=""
        />
      </div>

      <div className="closing-character closing-character-bottom">
        <img
          src={`${import.meta.env.BASE_URL}images/characters/personaje3.png`}
          alt=""
        />
      </div>

      <div className="closing-container">
        <p className="closing-small">
          ¡GRACIAS POR ACOMPAÑARNOS!
        </p>

        <h2>
          Este día será
          <br />
          inolvidable
        </h2>

        <span className="closing-line" />

        <p className="closing-text">
          Gracias por ser parte del primer añito
          <br className="desktop-break" />
          de nuestro pequeño Bastian.
        </p>

        <div className="closing-name">
          <span>BASTIAN</span>
          <strong>1 añito</strong>
        </div>

        <div className="closing-hearts">
          💙 ✨ 💙
        </div>
      </div>

      <style>{`
        .closing-section {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 120px 20px 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #e9f8fc 0%,
              #a9dceb 100%
            );
          font-family: "Fredoka", sans-serif;
          box-sizing: border-box;
        }

        .closing-container {
          position: relative;
          z-index: 5;
          width: min(100%, 700px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .closing-small {
          margin: 0 0 7px;
          color: #416b82;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.7px;
          text-shadow:
            0 1px 1px
            rgba(255, 255, 255, 1);
        }

        .closing-container h2 {
          margin: 0;
          color: #416b82;
          font-size: clamp(36px, 6vw, 55px);
          font-weight: 800;
          line-height: 1.05;
          text-shadow:
            2px 2px 0
            rgba(255, 255, 255, 0.85);
        }

        .closing-line {
          width: 80px;
          height: 5px;
          margin-top: 20px;
          border-radius: 999px;
          background: #ffd45c;
        }

        .closing-text {
          margin: 18px 0 22px;
          color: #527d9a;
          font-size: 15px;
          line-height: 1.5;
        }

        .closing-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .closing-name span {
          color: #416b82;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .closing-name strong {
          color: #416b82;
          font-size: 18px;
          font-weight: 800;
        }

        .closing-hearts {
          margin-top: 18px;
          font-size: 21px;
          letter-spacing: 5px;
        }

        .closing-character {
          position: absolute;
          z-index: 3;
          pointer-events: none;
        }

        .closing-character img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        /* PERSONAJE SUPERIOR */
        .closing-character-top {
          top: 15px;
          left: 50%;
          width: 190px;
          height: 100px;
          transform: translateX(-50%);
        }

        /* PERSONAJE IZQUIERDO */
        .closing-character-left {
          left: 3%;
          bottom: 20%;
          width: 130px;
          height: 150px;
          transform: rotate(-5deg);
        }

        /* PERSONAJE DERECHO */
        .closing-character-right {
          right: 3%;
          bottom: 19%;
          width: 135px;
          height: 150px;
          transform: rotate(5deg);
        }

        /* PERSONAJE INFERIOR */
        .closing-character-bottom {
          left: 50%;
          bottom: -20px;
          width: 180px;
          height: 100px;
          transform: translateX(-50%);
        }

        .closing-cloud {
          position: absolute;
          width: 160px;
          height: 55px;
          border-radius: 999px;
          background:
            rgba(255, 255, 255, 0.35);
          z-index: 1;
        }

        .closing-cloud span {
          position: absolute;
          display: block;
          border-radius: 50%;
          background:
            rgba(255, 255, 255, 0.35);
        }

        .closing-cloud span:first-child {
          width: 60px;
          height: 60px;
          left: 20px;
          bottom: 3px;
        }

        .closing-cloud span:last-child {
          width: 75px;
          height: 75px;
          left: 65px;
          bottom: 0;
        }

        .closing-cloud-left {
          left: -80px;
          top: 20%;
        }

        .closing-cloud-right {
          right: -80px;
          bottom: 20%;
        }

        .closing-star {
          position: absolute;
          color: #ffd45c;
          font-size: 25px;
          z-index: 2;
          animation:
            closing-float
            4s
            ease-in-out
            infinite;
        }

        .closing-star-1 {
          left: 10%;
          top: 25%;
        }

        .closing-star-2 {
          right: 10%;
          bottom: 25%;
          animation-delay: 1s;
        }

        @keyframes closing-float {
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
          .closing-section {
            padding:
              105px
              15px
              65px;
          }

          .closing-character-top {
            top: 10px;
            width: 160px;
            height: 90px;
          }

          .closing-character-left {
            left: -15px;
            bottom: 13%;
            width: 95px;
            height: 110px;
          }

          .closing-character-right {
            right: -15px;
            bottom: 13%;
            width: 100px;
            height: 110px;
          }

          .closing-character-bottom {
            bottom: -15px;
            width: 145px;
            height: 80px;
          }

          .closing-small {
            font-size: 11px;
            letter-spacing: 1.3px;
          }

          .closing-container h2 {
            font-size: 37px;
          }

          .closing-line {
            width: 70px;
            height: 4px;
            margin-top: 16px;
          }

          .closing-text {
            margin:
              15px
              0
              20px;
            font-size: 14px;
          }

          .desktop-break {
            display: none;
          }

          .closing-name span {
            font-size: 25px;
          }

          .closing-name strong {
            font-size: 16px;
          }

          .closing-hearts {
            margin-top: 15px;
            font-size: 18px;
          }

          .closing-cloud-left {
            left: -110px;
          }

          .closing-cloud-right {
            right: -110px;
          }
        }

        /* CELULARES PEQUEÑOS */
        @media (max-width: 400px) {
          .closing-section {
            padding:
              100px
              12px
              60px;
          }

          .closing-character-left {
            left: -30px;
            width: 80px;
            height: 95px;
          }

          .closing-character-right {
            right: -30px;
            width: 85px;
            height: 95px;
          }

          .closing-character-top {
            top: 10px;
            width: 145px;
            height: 80px;
          }

          .closing-character-bottom {
            width: 125px;
            height: 70px;
          }

          .closing-small {
            font-size: 10px;
            letter-spacing: 1.1px;
          }

          .closing-container h2 {
            font-size: 34px;
          }

          .closing-text {
            font-size: 13px;
          }

          .closing-name span {
            font-size: 23px;
          }

          .closing-name strong {
            font-size: 15px;
          }

          .closing-hearts {
            font-size: 17px;
          }
        }
      `}</style>
    </section>
  );
}