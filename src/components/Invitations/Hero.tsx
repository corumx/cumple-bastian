export default function Hero() {
  return (
    <section className="hero">
      <div className="cloud cloud-1">
        <span />
        <span />
        <span />
      </div>

      <div className="cloud cloud-2">
        <span />
        <span />
        <span />
      </div>

      <div className="cloud cloud-3">
        <span />
        <span />
        <span />
      </div>

      <div className="star star-1">✦</div>
      <div className="star star-2">✦</div>
      <div className="star star-3">✦</div>
      <div className="star star-4">✦</div>

      <div className="hero-content">
        <div className="hero-title">
          <h1>BASTIAN RAFAEL</h1>
          <h2>¡MI PRIMER AÑITO!</h2>
        </div>

        <div className="hero-scene">
          <div className="hero-circle">
            <div className="circle-outer" />
            <div className="circle-middle" />
            <div className="circle-inner" />
          </div>

          <img
            src={`${import.meta.env.BASE_URL}images/hero/bastian.png`}
            alt="Bastian"
            className="hero-bastian"
          />

          <div className="hero-one">
            <span>1</span>
          </div>
        </div>

        <p className="hero-message">
          Un día muy especial está por comenzar...
        </p>

        <div className="hero-scroll">
          <span>↓</span>
          
          <small>Deslizá para continuar</small>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          background: linear-gradient(
            180deg,
            #DDF6FC 0%,
            #C9EEF7 52%,
            #A9DCEB 100%
          );
          font-family: "Fredoka",sans-serif;
          isolation: isolate;
        }

        .hero-content {
          position: relative;
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 20px 18px;
          box-sizing: border-box;
        }

        .hero-title {
          position: relative;
          z-index: 20;
          text-align: center;
          animation: title-enter .9s ease-out both;
        }

        .hero-title h1 {
          margin: 0;
          color: #FFFFFF;
          font-size: clamp(30px,5vw,58px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: 1px;
          text-shadow:
            3px 3px 0 #527D9A,
            -1px -1px 0 #527D9A,
            1px -1px 0 #527D9A,
            -1px 1px 0 #527D9A;
        }

        .hero-title h2 {
          margin: 8px 0 0;
          color: #FFD45C;
          font-size: clamp(24px,4vw,46px);
          font-weight: 800;
          line-height: 1;
          text-shadow:
            3px 3px 0 #E8754F,
            -1px -1px 0 #FFF4D2,
            1px -1px 0 #FFF4D2,
            -1px 1px 0 #FFF4D2,
            1px 1px 0 #FFF4D2;
        }

        .hero-scene {
          position: relative;
          width: 650px;
          height: 470px;
          max-width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-circle {
          position: absolute;
          width: 460px;
          height: 460px;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          z-index: 1;
          filter: drop-shadow(
            0 14px 20px rgba(57,100,120,.22)
          );
        }

        .circle-outer {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(
            145deg,
            #F2FCFF,
            #C7EEF7
          );
          box-shadow:
            inset 0 4px 8px rgba(255,255,255,.9),
            inset 0 -8px 14px rgba(75,150,175,.14);
        }

        .circle-middle {
          position: absolute;
          width: 377px;
          height: 377px;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: #8ED7EB;
          box-shadow:
            inset 0 5px 12px rgba(255,255,255,.45);
        }

        .circle-inner {
          position: absolute;
          width: 304px;
          height: 304px;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: linear-gradient(
            145deg,
            #28B4E7,
            #58C5E8
          );
          box-shadow:
            inset 0 6px 15px rgba(20,110,145,.18);
        }

        .hero-bastian {
          position: absolute;
          width: 480px;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(
            0 18px 17px rgba(40,70,85,.25)
          );
          animation:
            bastian-enter
            1.1s
            .2s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .hero-one {
          position: absolute;
          right: 55px;
          bottom: 2px;
          width: 92px;
          height: 92px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFD45C;
          border: 6px solid #FFFFFF;
          box-shadow:
            0 8px 15px rgba(50,80,90,.20);
          z-index: 10;
          transform: rotate(-8deg);
          animation:
            one-enter
            1s
            .8s
            ease-out
            both;
        }

        .hero-one span {
          color: #E8754F;
          font-size: 62px;
          line-height: 1;
          font-weight: 800;
          text-shadow:
            2px 2px 0 rgba(255,255,255,.7);
        }

        .hero-message {
          position: relative;
          z-index: 20;
          margin: 18px 0 0;
          padding: 9px 22px;
          max-width: 420px;
          color: #456B82;
          background: rgba(255,255,255,.76);
          border: 1px solid rgba(255,255,255,.95);
          border-radius: 999px;
          font-size: clamp(13px,2vw,17px);
          font-weight: 600;
          line-height: 1.25;
          text-align: center;
          box-shadow:
            0 5px 14px rgba(50,80,95,.08);
          backdrop-filter: blur(5px);
        }

        .hero-scroll {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          color: rgba(65,99,122,.72);
        }

        .hero-scroll span {
          font-size: 20px;
          line-height: 1;
          margin-bottom: 5px;
          animation:
            scroll-bounce
            1.7s
            ease-in-out
            infinite;
        }

        .hero-scroll small {
          margin-top: 2px;
          font-size: 9px;
          font-weight: 600;
        }

        .cloud {
          position: absolute;
          width: 170px;
          height: 60px;
          border-radius: 999px;
          background: rgba(255,255,255,.72);
          z-index: 0;
        }

        .cloud span {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: rgba(255,255,255,.72);
        }

        .cloud span:nth-child(1) {
          width: 65px;
          height: 65px;
          left: 25px;
          bottom: 5px;
        }

        .cloud span:nth-child(2) {
          width: 85px;
          height: 85px;
          left: 70px;
          bottom: 0;
        }

        .cloud span:nth-child(3) {
          width: 55px;
          height: 55px;
          right: 10px;
          bottom: 5px;
        }

        .cloud-1 {
          left: -55px;
          top: 12%;
        }

        .cloud-2 {
          right: -65px;
          top: 28%;
          transform: scale(.9);
        }

        .cloud-3 {
          left: -75px;
          bottom: 13%;
          transform: scale(.65);
        }

        .star {
          position: absolute;
          color: #FFE276;
          font-size: 28px;
          z-index: 1;
          animation:
            floating
            4s
            ease-in-out
            infinite;
        }

        .star-1 {
          top: 17%;
          left: 11%;
        }

        .star-2 {
          top: 23%;
          right: 12%;
          animation-delay: 1s;
        }

        .star-3 {
          bottom: 17%;
          right: 10%;
          animation-delay: 2s;
        }

        .star-4 {
          bottom: 30%;
          left: 13%;
          font-size: 20px;
          animation-delay: .5s;
        }

        @keyframes title-enter {
          from {
            opacity: 0;
            transform: translateY(-25px) scale(.95);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bastian-enter {
          from {
            opacity: 0;
            transform:
              translate(-50%,-45%)
              scale(.92);
          }

          to {
            opacity: 1;
            transform:
              translate(-50%,-50%)
              scale(1);
          }
        }

        @keyframes one-enter {
          from {
            opacity: 0;
            transform:
              scale(.6)
              rotate(-15deg);
          }

          to {
            opacity: 1;
            transform:
              scale(1)
              rotate(-8deg);
          }
        }

        @keyframes scroll-bounce {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(6px);
          }
        }

        @keyframes floating {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width:800px) {
          .hero-content {
            padding: 25px 15px 12px;
          }

          .hero-scene {
            height: 430px;
          }

          .hero-circle {
            width: 410px;
            height: 410px;
          }

          .circle-middle {
            width: 336px;
            height: 336px;
          }

          .circle-inner {
            width: 271px;
            height: 271px;
          }

          .hero-bastian {
            width: 430px;
          }

          .hero-one {
            right: 20px;
            width: 82px;
            height: 82px;
          }

          .hero-one span {
            font-size: 54px;
          }
        }

        @media (max-width:600px) {
          .hero-content {
            padding: 18px 10px 8px;
          }

          .hero-title h1 {
            font-size: clamp(27px,8vw,36px);
          }

          .hero-title h2 {
            margin-top: 6px;
            font-size: clamp(22px,7vw,31px);
          }

          .hero-scene {
            width: 100%;
            height: 350px;
          }

          .hero-circle {
            width: min(84vw,310px);
            height: min(84vw,310px);
          }

          .circle-middle {
            width: calc(min(84vw,310px) * .82);
            height: calc(min(84vw,310px) * .82);
          }

          .circle-inner {
            width: calc(min(84vw,310px) * .66);
            height: calc(min(84vw,310px) * .66);
          }

          .hero-bastian {
            width: min(92vw,350px);
          }

          .hero-one {
            right: max(8px,calc(50% - 160px));
            bottom: 3px;
            width: 68px;
            height: 68px;
            border-width: 5px;
          }

          .hero-one span {
            font-size: 44px;
          }

          .hero-message {
            margin: 2px 0 0;
            max-width: 86%;
            padding: 8px 15px;
            font-size: 12px;
            line-height: 1.2;
          }

          .hero-scroll {
            margin-top: 6px;
          }

          .hero-scroll span {
            font-size: 19px;
          }

          .hero-scroll small {
            margin-top: 2px;
            font-size: 8px;
          }

          .star {
            font-size: 21px;
          }

          .star-1 {
            left: 5%;
          }

          .star-2 {
            right: 5%;
          }

          .star-3 {
            right: 8%;
          }

          .star-4 {
            left: 8%;
          }
        }

        @media (max-width:380px) {
          .hero-content {
            padding-top: 14px;
          }

          .hero-scene {
            height: 320px;
          }

          .hero-bastian {
            width: 325px;
          }

          .hero-circle {
            width: 275px;
            height: 275px;
          }

          .circle-middle {
            width: 226px;
            height: 226px;
          }

          .circle-inner {
            width: 182px;
            height: 182px;
          }

          .hero-one {
            width: 60px;
            height: 60px;
            right: calc(50% - 135px);
          }

          .hero-one span {
            font-size: 39px;
          }

          .hero-message {
            margin-top: 2px;
            max-width: 90%;
            padding: 7px 13px;
            font-size: 11px;
          }

          .hero-scroll {
            margin-top: 4px;
          }

          .hero-scroll span {
            font-size: 18px;
          }

          .hero-scroll small {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}