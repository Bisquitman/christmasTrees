const declOfNum = (n, titles) => {
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

const timer = () => {
  const timer = document.createElement('div');
  const timerText = document.createElement('p');
  const timerCount = document.createElement('span');

  timer.classList.add('timer');
  timerText.classList.add('timer__text');
  timerCount.classList.add('timer__count');

  timerText.textContent = 'До конца распродажи осталось: ';

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {
    const deadline = new Date(2023, 0, 1, 0, 0, 0); // В формате: год, месяц (от 0), число, час, минута, секунда
    const now = new Date();
    const timeRemain = (deadline - now) / 1000; // Остаток времени в секундах

    const seconds = Math.floor(timeRemain % 60);
    const minutes = Math.floor((timeRemain / 60) % 60);
    const hours = Math.floor(timeRemain / 60 / 60 % 24);
    const days = Math.floor(timeRemain / 60 / 60 / 24 % 30);
    const months = Math.floor(timeRemain / 60 / 60 / 24 / 30) % 12;

    const s = declOfNum(seconds, ['секунда', 'секунды', 'секунд']) //1, 2, 5
    const m = declOfNum(minutes, ['минута', 'минуты', 'минут'])
    const h = declOfNum(hours, ['час', 'часа', 'часов'])
    const d = declOfNum(days, ['день', 'дня', 'дней'])
    const mn = declOfNum(months, ['месяц', 'месяца', 'месяцев'])

    timerCount.textContent = `${mn} ${d} ${h} ${m} ${s}`;

    if (timeRemain > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
      document.querySelector('.b-head-decor').style.top = '0';
    }
  };
  startTimer();
}

timer();