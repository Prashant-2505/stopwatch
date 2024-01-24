(function () {
    var hour = document.querySelector('.hour');
    var min = document.querySelector('.minute');
    var sec = document.querySelector('.second');

    var startBtn = document.querySelector('.start');
    var stopBtn = document.querySelector('.stop');
    var resetBtn = document.querySelector('.reset');

    var countdownTimer = null;

    startBtn.addEventListener('click', () => {
        if (hour.value == 0 && min.value == 0 && sec.value == 0) {
            return;
        }

        function startInterval() {
            startBtn.style.display = 'none';
            stopBtn.style.display = 'block';

            countdownTimer = setInterval(() => {
                timer();
            }, 1000);
        }

        startInterval();
    });

    stopBtn.addEventListener('click', () => {
        stopInterval();
    });

    function stopInterval() {
        startBtn.style.display = 'block';
        stopBtn.style.display = 'none';
        clearInterval(countdownTimer);
    }

    function timer() {
        if (hour.value == 0 && min.value == 0 && sec.value == 0) {
            stopInterval();
            return;
        }

        if (sec.value > 60) {
            sec.value = sec.value - 60;
            min.value++;
        }
        if (min.value > 60) {
            min.value = min.value - 60;
            hour.value++;
        }


        if (sec.value > 0) {
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
        } else {
            if (min.value > 0) {
                min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
                sec.value = 59;
            } else {
                if (hour.value > 0) {
                    hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
                    min.value = 59;
                    sec.value = 59;
                }
            }
        }


    }


    resetBtn.addEventListener("click",function(){
        min.value =0;
        sec.value = 0;
        hour.value = 0;
    })
})();
