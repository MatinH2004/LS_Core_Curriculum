// document.addEventListener('DOMContentLoaded', () => {
//   const _centiseconds = document.querySelector('#centiseconds');
//   const _seconds = document.querySelector('#seconds');
//   const _minutes = document.querySelector('#minutes');
//   const _hours = document.querySelector('#hours');

//   const stopwatch = (function() {
//     let intervalId = null;
  
//     let centiseconds = 0;
//     let seconds = 0;
//     let minutes = 0;
//     let hours = 0;
  
//     function formatTime(value) {
//       return String(value).padStart(2, '0');
//     }
  
//     function displayTime() {
//       _centiseconds.textContent = formatTime(centiseconds);
//       _seconds.textContent = formatTime(seconds);
//       _minutes.textContent = formatTime(minutes);
//       _hours.textContent = formatTime(hours);
//     }

//     function resetValues() {
//       [
//         centiseconds, _centiseconds,
//         seconds, _seconds,
//         minutes, _minutes,
//         hours, _hours,
//       ]
//       .forEach(value => {
//         if (value instanceof Element) value.textContent = '00';
//         else value = 0;
//       });
//     }
  
//     return {
//       start() {
//         intervalId = setInterval(() => {
//           centiseconds += 1;
    
//           if (centiseconds > 99) {
//             centiseconds = 0
//             seconds += 1
//           } else if (seconds > 59) {
//             seconds = 0;
//             minutes += 1;
//           } else if (minutes > 59) {
//             minutes = 0
//             hours += 1;
//           }
    
//           displayTime();
//         }, 2);
//       },
  
//       stop() {
//         clearInterval(intervalId);
//       },
  
//       reset() {
//         this.stop();
//         resetValues();        
//       },
//     }
//   })();

//   const start = document.querySelector('#start');
//   const reset = document.querySelector('#reset');

//   start.addEventListener('click', e => {
//     const button = e.target;
//     if (button.textContent === 'Start') {
//       stopwatch.start();
//       button.textContent = 'Stop';
//     } else {
//       stopwatch.stop();
//       button.textContent = 'Start';
//     }
//   });

//   reset.addEventListener('click', e => {
//     stopwatch.reset();
//     start.textContent = 'Start';
//   });
// });

// ---- FIXED LAG PROBLEM USING DATE.NOW() ----

document.addEventListener('DOMContentLoaded', () => {
  const _centiseconds = document.querySelector('#centiseconds');
  const _seconds = document.querySelector('#seconds');
  const _minutes = document.querySelector('#minutes');
  const _hours = document.querySelector('#hours');

  const stopwatch = (function() {
    let intervalId = null;
    let startTime = null;
    let elapsedTime = 0;

    function formatTime(value) {
      return String(value).padStart(2, '0');
    }

    function displayTime() {
      const totalCentiseconds = Math.floor(elapsedTime / 10);
      const centiseconds = totalCentiseconds % 100;

      const totalSeconds = Math.floor(totalCentiseconds / 100);
      const seconds = totalSeconds % 60;

      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;

      const hours = Math.floor(totalMinutes / 60);

      _centiseconds.textContent = formatTime(centiseconds);
      _seconds.textContent = formatTime(seconds);
      _minutes.textContent = formatTime(minutes);
      _hours.textContent = formatTime(hours);
    }

    function updateElapsedTime() {
      elapsedTime = Date.now() - startTime;
      displayTime();
    }

    return {
      start() {
        if (!startTime) startTime = Date.now() - elapsedTime;

        intervalId = setInterval(updateElapsedTime, 10); // update every 10ms for smoother display
      },
  
      stop() {
        clearInterval(intervalId);
        intervalId = null;
      },
  
      reset() {
        this.stop();
        startTime = null;
        elapsedTime = 0;
        displayTime();
      },
    };
  })();

  const start = document.querySelector('#start');
  const reset = document.querySelector('#reset');

  start.addEventListener('click', (e) => {
    const button = e.target;
    if (button.textContent === 'Start') {
      stopwatch.start();
      button.textContent = 'Stop';
    } else {
      stopwatch.stop();
      button.textContent = 'Start';
    }
  });

  reset.addEventListener('click', () => {
    stopwatch.reset();
    start.textContent = 'Start';
  });
});
