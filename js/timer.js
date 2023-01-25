(() => {
    const clockEl = document.querySelector('#clock');
    let timer = "30:00";

    if (!clockEl) return;

    const interval = setInterval(function() {
        const splitedTimer = timer.split(':');

        let minutes = parseInt(splitedTimer[0], 10);
        let seconds = parseInt(splitedTimer[1], 10);

        --seconds;

        minutes = (seconds < 0) ? --minutes : minutes;

        if (minutes < 0) clearInterval(interval);

        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        clockEl.innerHTML = `${minutes}:${seconds}`;

        timer = minutes + ':' + seconds;
    }, 1000);
})()