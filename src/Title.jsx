import React from "react";
import { useRef, useEffect } from "react";

function Title() {
  const text1 = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    const el1 = text1.current;
    console.log(el1);

    // 👇️ (better) use a ref
    const el2 = text2.current;
    console.log(el2);

    const texts = ["This", "is", "Ognjens", "Portfolio"];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    el1.textContent = texts[textIndex % texts.length];
    el2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      el2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      el1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      el1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      el1.textContent = texts[textIndex % texts.length];
      el2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      el2.style.filter = "";
      el2.style.opacity = "100%";

      el1.style.filter = "";
      el1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);
  return (
    <div className="title-div">
      <div id="container">
        <span ref={text1} id="text1"></span>
        <span ref={text2} id="text2"></span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Title;
