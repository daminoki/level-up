(() => {
    let timer = "30:00";

    const interval = setInterval(function() {
        const splitedTimer = timer.split(':');

        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(splitedTimer[0], 10);
        var seconds = parseInt(splitedTimer[1], 10);

        --seconds;

        minutes = (seconds < 0) ? --minutes : minutes;

        if (minutes < 0) clearInterval(interval);

        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        //minutes = (minutes < 10) ?  minutes : minutes;
        $('#clock').html(minutes + ':' + seconds);

        timer = minutes + ':' + seconds;
    }, 1000);
})()