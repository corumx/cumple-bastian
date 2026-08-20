const galleryItems = [
  `${import.meta.env.BASE_URL}images/gallery/foto1.jpg`,
  `${import.meta.env.BASE_URL}images/gallery/foto2.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery/foto3.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery/foto4.jpg`,
  `${import.meta.env.BASE_URL}images/gallery/foto5.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery/foto6.jpg`,
  `${import.meta.env.BASE_URL}images/gallery/foto7.jpg`,
  `${import.meta.env.BASE_URL}images/gallery/foto8.jpg`,
  `${import.meta.env.BASE_URL}images/gallery/foto9.jpeg`,
  `${import.meta.env.BASE_URL}images/gallery/foto10.jpg`,
  `${import.meta.env.BASE_URL}images/gallery/foto11.jpeg`,
];

const items = [
  ...galleryItems,
  ...galleryItems,
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <p>MOMENTOS ESPECIALES</p>

        <h2>Bastian</h2>

        <span className="gallery-line" />

        <span>
          Un añito lleno de momentos,
          sonrisas y mucho amor.
        </span>
      </div>

      <div className="gallery-marquee">
        <div className="gallery-track">
          {items.map((image, index) => (
            <div
              className="gallery-item"
              key={`${image}-${index}`}
            >
              <div className="gallery-image">
                <img
                  src={image}
                  alt={`Bastian - foto ${index + 1}`}
                />
              </div>

              {index !== items.length - 1 && (
                <div className="gallery-separator">
                  ✦
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-bottom">
        <span>🐰</span>
        <span>🐥</span>
        <span>🐷</span>
      </div>

      <style>{`

        .gallery-section {
          position: relative;

          width: 100%;

          margin: 0;

          padding:
            50px
            0
            0;

          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              #E9F8FC 0%,
              #FFFDF5 100%
            );

          font-family:
            "Fredoka",
            sans-serif;
        }

        .gallery-header {
          position: relative;

          z-index: 2;

          display: flex;

          flex-direction: column;

          align-items: center;

          padding:
            0
            20px;

          text-align: center;
        }

        .gallery-header p {
          margin:
            0
            0
            5px;

          color:
            #527D9A;

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 2px;
        }

        .gallery-header h2 {
          margin: 0;

          color:
            #416B82;

          font-size:
            clamp(
              40px,
              6vw,
              58px
            );

          font-weight: 800;

          line-height: 1;
        }

        .gallery-line {
          width: 80px;

          height: 5px;

          margin-top: 18px;

          border-radius: 999px;

          background:
            #FFD45C;
        }

        .gallery-header > span:last-child {
          margin-top: 14px;

          color:
            #66818F;

          font-size: 15px;
        }

        .gallery-marquee {
          width: 100%;

          margin-top: 35px;

          overflow: hidden;

          -webkit-mask-image:
            linear-gradient(
              to right,
              transparent,
              black 6%,
              black 94%,
              transparent
            );

          mask-image:
            linear-gradient(
              to right,
              transparent,
              black 6%,
              black 94%,
              transparent
            );
        }

        .gallery-track {
          width: max-content;

          display: flex;

          align-items: center;

          animation:
            gallery-scroll
            30s
            linear
            infinite;

          will-change:
            transform;
        }

        .gallery-item {
          display: flex;

          align-items: center;

          gap: 18px;
        }

        .gallery-image {
          width: 210px;

          height: 270px;

          flex-shrink: 0;

          overflow: hidden;

          border-radius: 28px;

          background:
            #DDF3F8;

          border:
            5px solid
            rgba(
              255,
              255,
              255,
              0.9
            );

          box-shadow:
            0 12px 25px
            rgba(
              65,
              107,
              130,
              0.14
            );
        }

        .gallery-image img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform
            0.5s
            ease;
        }

        .gallery-image:hover img {
          transform:
            scale(1.05);
        }

        .gallery-separator {
          width: 45px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          color:
            #FFD45C;

          font-size: 24px;
        }

        .gallery-bottom {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 18px;

          margin-top: 28px;

          font-size: 22px;
        }

        .gallery-bottom span:nth-child(2) {
          transform:
            translateY(-5px);
        }

        @keyframes gallery-scroll {

          from {
            transform:
              translateX(0);
          }

          to {
            transform:
              translateX(-50%);
          }

        }

        @media (max-width: 600px) {

          .gallery-section {
            padding:
              40px
              0
              0;
          }

          .gallery-header p {
            font-size: 12px;
          }

          .gallery-header h2 {
            font-size: 40px;
          }

          .gallery-line {
            width: 70px;

            height: 4px;

            margin-top: 15px;
          }

          .gallery-header > span:last-child {
            font-size: 13px;
          }

          .gallery-marquee {
            margin-top: 28px;

            -webkit-mask-image:
              linear-gradient(
                to right,
                transparent,
                black 4%,
                black 96%,
                transparent
              );

            mask-image:
              linear-gradient(
                to right,
                transparent,
                black 4%,
                black 96%,
                transparent
              );
          }

          .gallery-track {
            animation-duration:
              24s;
          }

          .gallery-item {
            gap: 10px;
          }

          .gallery-image {
            width: 145px;

            height: 190px;

            border-radius: 20px;

            border-width: 4px;
          }

          .gallery-separator {
            width: 30px;

            font-size: 17px;
          }

          .gallery-bottom {
            margin-top: 22px;

            gap: 12px;

            font-size: 18px;
          }
        }

        @media (max-width: 380px) {

          .gallery-image {
            width: 130px;

            height: 175px;
          }

          .gallery-separator {
            width: 25px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .gallery-track {
            animation-play-state:
              paused;
          }

        }

      `}</style>
    </section>
  );
}