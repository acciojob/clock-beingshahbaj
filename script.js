//your JS code here. If required.
 function updateTimer() {
            var timerElement = document.getElementById('timer');
            var currentDate = new Date();

            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();

          
            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;

          
            var timeString = hours + ':' + minutes + ':' + seconds;

         
            var dateString = currentDate.toDateString();

         
            timerElement.textContent = dateString + ' ' + timeString;
        }

       
        setInterval(updateTimer, 1000);

        
        updateTimer();