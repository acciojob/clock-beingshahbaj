//your JS code here. If required.
 function updateTimer() {
            var timerElement = document.getElementById('timer');
            var currentDate = new Date();

            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();

            // Format the time to ensure it's always displayed as two digits
            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;

            // Create a string with the formatted time
            var timeString = hours + ':' + minutes + ':' + seconds;

            // Create a string with the formatted date
            var dateString = currentDate.toDateString();

            // Set the timer element content
            timerElement.textContent = dateString + ' ' + timeString;
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initial call to set the timer immediately
        updateTimer();