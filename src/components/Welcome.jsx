import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
  subtitle: {
    min: 100,
    max: 400,
    default: 100,
  },
  title: {
    min: 400,
    max: 900,
    default: 400,
  },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return ()=>{};

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const handleMouseMove = (e) => {
    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();

      const letterCenter = rect.left + rect.width / 2;

      const distance = Math.abs(
        e.clientX - letterCenter
      );

      const intensity = Math.exp(
        -(distance ** 2) / 20000
      );

      const weight =
        min + (max - min) * intensity;

      gsap.to(letter, {
        fontVariationSettings: `'wght' ${weight}`,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      gsap.to(letter, {
        fontVariationSettings: `'wght' ${base}`,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener(
      'mousemove',
      handleMouseMove
    );

    container.removeEventListener(
      'mouseleave',
      handleMouseLeave
    );
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = setupTextHover(
      titleRef.current,
      'title'
    );

    const cleanupSubtitle = setupTextHover(
      subTitleRef.current,
      'subtitle'
    );

    return () => {
      cleanupTitle?.();
      cleanupSubtitle?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>
        {renderText(
          "Hey, I'm Krishna! Welcome to my",
          'text-3xl font-georama',
          100
        )}
      </p>

      <h1
        ref={titleRef}
        className="mt-6"
      >
        {renderText(
          'Portfolio',
          'text-9xl italic font-georama',
          400
        )}
      </h1>

      <div className="small-screen">
        <p>
          This Portfolio is designed for
          desktop/tablet screens only.
        </p>
      </div>
    </section>
  );
};

export default Welcome;