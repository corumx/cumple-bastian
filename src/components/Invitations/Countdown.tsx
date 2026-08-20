import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_DATE = new Date(
  "2026-10-24T08:30:00-03:00"
);

function calculateTimeLeft(): TimeLeft {
  const difference =
    EVENT_DATE.getTime() -
    new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference /
        (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference /
        (1000 * 60 * 60)) %
        24
    ),
    minutes: Math.floor(
      (difference /
        (1000 * 60)) %
        60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function formatNumber(number: number) {
  return number
    .toString()
    .padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(
      calculateTimeLeft()
    );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        calculateTimeLeft()
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  const isEventDay =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="countdown-section">
      <div className="countdown-cloud countdown-cloud-left">
        <span />
        <span />
        <span />
      </div>

      <div className="countdown-cloud countdown-cloud-right">
        <span />
        <span />
        <span />
      </div>

      <div className="countdown-star countdown-star-1">
        ✦
      </div>

      <div className="countdown-star countdown-star-2">
        ✦
      </div>

      <div className="countdown-star countdown-star-3">
        ✦
      </div>

      <div className="countdown-container">
        <div className="countdown-header">
          <div className="countdown-icon">
            <img
    src={`${import.meta.env.BASE_URL}images/characters/personaje4.png`}
    alt=""
  />
          </div>

          <p className="countdown-small-title">
            SE ACERCA EL GRAN DÍA
          </p>

          <h2>
            ¡Falta muy poquito!
          </h2>

          <p className="countdown-description">
            Estamos contando los días para celebrar
            <br />
            el primer añito de Bastian.
          </p>
        </div>

        {isEventDay ? (
          <div className="birthday-message">
            <span className="birthday-confetti">
              🎉
            </span>

            <h3>
              ¡HOY ES EL GRAN DÍA!
            </h3>

            <p>
              ¡Feliz primer añito, Bastian!
            </p>

            <span className="birthday-confetti">
              🎈
            </span>
          </div>
        ) : (
          <div className="countdown-grid">
            <div className="countdown-card">
              <div className="countdown-number">
                {formatNumber(timeLeft.days)}
              </div>

              <div className="countdown-label">
                DÍAS
              </div>
            </div>

            <div className="countdown-card">
              <div className="countdown-number">
                {formatNumber(timeLeft.hours)}
              </div>

              <div className="countdown-label">
                HORAS
              </div>
            </div>

            <div className="countdown-card">
              <div className="countdown-number">
                {formatNumber(timeLeft.minutes)}
              </div>

              <div className="countdown-label">
                MIN
              </div>
            </div>

            <div className="countdown-card seconds-card">
              <div className="countdown-number">
                {formatNumber(timeLeft.seconds)}
              </div>

              <div className="countdown-label">
                SEG
              </div>
            </div>
          </div>
        )}

        <div className="countdown-date">
          <span className="date-icon">
            📅
          </span>

          <div>
            <strong>
              24 DE OCTUBRE
            </strong>

            <span>
              2026 · 17:30 HS
            </span>
          </div>
        </div>

        <div className="countdown-decoration">
          <span>🎈</span>

          <div className="decoration-line" />

          <span className="one-decoration">
            1
          </span>

          <div className="decoration-line" />

          <span>🎈</span>
        </div>
      </div>

      <style>{`

        .countdown-section {
          position: relative;
          width: 100%;
          min-height: auto;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              #A9DCEB 0%,
              #C9EEF7 45%,
              #FFF8E8 100%
            );
          font-family: "Fredoka", sans-serif;
          isolation: isolate;
        }

        .countdown-container {
          position: relative;
          width: min(100%, 850px);
          padding: 30px 20px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          z-index: 5;
        }

        .countdown-header {
          text-align: center;
          animation:
            countdown-fade
            0.8s
            ease-out
            both;
        }

        .countdown-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 18px rgba(70, 120, 140, 0.15);
  overflow: hidden;
}

.countdown-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

        .countdown-small-title {
          margin: 0 0 6px;
          color: #527D9A;
          font-size:
            clamp(
              13px,
              2vw,
              16px
            );
          font-weight: 700;
          letter-spacing: 2px;
        }

        .countdown-header h2 {
          margin: 0;
          color: #416B82;
          font-size:
            clamp(
              30px,
              5vw,
              52px
            );
          font-weight: 800;
          line-height: 1;
          text-shadow:
            2px 2px 0
            rgba(
              255,
              255,
              255,
              0.8
            );
        }

        .countdown-description {
          margin: 10px 0 0;
          color: #58788A;
          font-size:
            clamp(
              15px,
              2vw,
              18px
            );
          line-height: 1.4;
        }

        .countdown-grid {
          width: 100%;
          margin-top: 28px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
          animation:
            countdown-scale
            0.8s
            0.2s
            ease-out
            both;
        }

        .countdown-card {
          position: relative;
          min-width: 0;
          padding: 20px 12px 17px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background:
            rgba(
              255,
              255,
              255,
              0.88
            );
          border:
            3px solid
            rgba(
              255,
              255,
              255,
              0.9
            );
          border-radius: 22px;
          box-shadow:
            0 10px 25px
            rgba(
              60,
              105,
              125,
              0.14
            ),
            inset
            0 2px 0
            rgba(
              255,
              255,
              255,
              0.9
            );
        }

        .countdown-number {
          color: #45A9CF;
          font-size:
            clamp(
              34px,
              6vw,
              62px
            );
          font-weight: 800;
          line-height: 1;
        }

        .countdown-label {
          margin-top: 6px;
          color: #66818F;
          font-size:
            clamp(
              11px,
              1.8vw,
              14px
            );
          font-weight: 700;
          letter-spacing: 1px;
        }

        .countdown-date {
          margin-top: 22px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #FFF8E8;
          border:
            2px solid
            rgba(
              255,
              255,
              255,
              0.9
            );
          border-radius: 18px;
          color: #527286;
          box-shadow:
            0 8px 18px
            rgba(
              60,
              100,
              120,
              0.10
            );
        }

        .date-icon {
          font-size: 23px;
        }

        .countdown-date div {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .countdown-date strong {
          font-size:
            clamp(
              14px,
              2vw,
              17px
            );
          color: #416B82;
        }

        .countdown-date span:not(.date-icon) {
          font-size:
            clamp(
              12px,
              1.8vw,
              14px
            );
          color: #78909C;
        }

        .countdown-decoration {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 15px;
          color: #FFD45C;
          font-size: 22px;
        }

        .decoration-line {
          width: 70px;
          height: 2px;
          background:
            rgba(
              82,
              125,
              154,
              0.25
            );
        }

        .one-decoration {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #FFD45C;
          color: #E8754F;
          font-size: 28px;
          font-weight: 800;
          border: 3px solid #FFFFFF;
          box-shadow:
            0 5px 10px
            rgba(
              60,
              90,
              100,
              0.15
            );
        }

        .birthday-message {
          margin-top: 28px;
          padding: 30px 40px;
          text-align: center;
          background:
            rgba(
              255,
              255,
              255,
              0.9
            );
          border-radius: 30px;
          box-shadow:
            0 15px 30px
            rgba(
              60,
              105,
              125,
              0.15
            );
          animation:
            birthday-pop
            0.8s
            ease-out
            both;
        }

        .birthday-message h3 {
          margin: 8px 0;
          color: #E8754F;
          font-size:
            clamp(
              28px,
              5vw,
              48px
            );
          font-weight: 800;
        }

        .birthday-message p {
          margin: 0;
          color: #527D9A;
          font-size: 18px;
          font-weight: 600;
        }

        .birthday-confetti {
          font-size: 32px;
        }

        .countdown-cloud {
          position: absolute;
          width: 180px;
          height: 60px;
          border-radius: 999px;
          background:
            rgba(
              255,
              255,
              255,
              0.55
            );
          z-index: 0;
        }

        .countdown-cloud span {
          position: absolute;
          border-radius: 50%;
          background:
            rgba(
              255,
              255,
              255,
              0.55
            );
        }

        .countdown-cloud span:nth-child(1) {
          width: 65px;
          height: 65px;
          left: 25px;
          bottom: 5px;
        }

        .countdown-cloud span:nth-child(2) {
          width: 85px;
          height: 85px;
          left: 70px;
          bottom: 0;
        }

        .countdown-cloud span:nth-child(3) {
          width: 55px;
          height: 55px;
          right: 10px;
          bottom: 5px;
        }

        .countdown-cloud-left {
          left: -70px;
          top: 20%;
        }

        .countdown-cloud-right {
          right: -70px;
          bottom: 15%;
        }

        .countdown-star {
          position: absolute;
          color: #FFD45C;
          font-size: 28px;
          z-index: 1;
          animation:
            countdown-float
            4s
            ease-in-out
            infinite;
        }

        .countdown-star-1 {
          left: 12%;
          top: 18%;
        }

        .countdown-star-2 {
          right: 12%;
          top: 30%;
          animation-delay: 1s;
        }

        .countdown-star-3 {
          left: 18%;
          bottom: 15%;
          animation-delay: 2s;
        }

        @keyframes countdown-fade {
          from {
            opacity: 0;
            transform:
              translateY(20px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }

        @keyframes countdown-scale {
          from {
            opacity: 0;
            transform:
              scale(0.92);
          }

          to {
            opacity: 1;
            transform:
              scale(1);
          }
        }

        @keyframes countdown-float {
          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-8px);
          }
        }

        @keyframes birthday-pop {
          from {
            opacity: 0;
            transform:
              scale(0.85);
          }

          to {
            opacity: 1;
            transform:
              scale(1);
          }
        }

        @media (max-width: 700px) {
          .countdown-container {
            padding:
              25px
              18px
              8px;
          }

          .countdown-grid {
            gap: 10px;
          }

          .countdown-card {
            padding:
              18px
              8px
              15px;
            border-radius: 20px;
          }

          .countdown-number {
            font-size: 38px;
          }
        }

        @media (max-width: 500px) {
          .countdown-section {
            min-height: auto;
            padding: 0;
          }

          .countdown-container {
            padding:
              18px
              15px
              5px;
          }

          .countdown-icon {
            width: 55px;
            height: 55px;
            margin-bottom: 8px;
            font-size: 28px;
          }

          .countdown-small-title {
            font-size: 11px;
            letter-spacing: 1.5px;
            margin-bottom: 5px;
          }

          .countdown-header h2 {
            font-size: 30px;
          }

          .countdown-description {
            margin-top: 8px;
            font-size: 14px;
          }

          .countdown-description br {
            display: none;
          }

          .countdown-grid {
            margin-top: 24px;
            grid-template-columns:
              repeat(2, 1fr);
            gap: 10px;
            width: 100%;
            max-width: 360px;
          }

          .countdown-card {
            min-height: 100px;
            padding:
              14px
              8px;
            border-radius: 18px;
          }

          .countdown-number {
            font-size: 40px;
          }

          .countdown-label {
            margin-top: 5px;
            font-size: 10px;
          }

          .countdown-date {
            max-width: 90%;
            margin-top: 20px;
            padding:
              9px
              15px;
          }

          .date-icon {
            font-size: 22px;
          }

          .countdown-decoration {
            margin-top: 10px;
            gap: 8px;
          }

          .decoration-line {
            width: 40px;
          }

          .one-decoration {
            width: 38px;
            height: 38px;
            font-size: 25px;
          }

          .birthday-message {
            margin-top: 25px;
            padding:
              25px
              18px;
          }

          .birthday-message h3 {
            font-size: 28px;
          }

          .birthday-message p {
            font-size: 15px;
          }

          .countdown-cloud-left {
            left: -110px;
          }

          .countdown-cloud-right {
            right: -110px;
          }

          .countdown-star-1 {
            left: 5%;
          }

          .countdown-star-2 {
            right: 5%;
          }
        }

      `}</style>
    </section>
  );
}