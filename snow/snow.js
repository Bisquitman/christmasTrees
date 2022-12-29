const createSnow = (n) => {
  const style = document.createElement('style');
  style.textContent = `
    body {
      position: relative;
    }
    .snow {
      position: fixed;
      width: 20px;
      height: 20px;
      top: -20px;
      pointer-events: none;
      animation: fall ease-out 5s;
      background-repeat: no-repeat;
      background-position: center;
    }
    @keyframes fall {
      100% {
        transform: translateY(100vh)
      }
    }
  `;
  document.head.append(style);

  let i = 1;
  const count = 4; // Количество файлов-картинок со снежинками

  const createSnowFlake = () => {
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snow');

    i += 1;
    if (i > count) i = 1;

    // const time = (((Math.random() * 10) + 2) * n) * 1000;
    const time = (Math.random() * n + 2) * 1000;

    snowFlake.style.cssText = `
      left: ${Math.round(Math.random() * window.innerWidth)}px;
      opacity: ${Math.random()};
      animation-duration: ${time}ms;
      background-image: url('snow/img/snowflake${i}.svg');
    `;

    document.body.append(snowFlake);
    setTimeout(() => {
      snowFlake.remove();
    }, time);
  };
  setInterval(createSnowFlake, 100);
};

createSnow(10);
