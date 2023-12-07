let showTime = () => {
    let numbers = document.getElementById('numbers');
    let dataDate = document.getElementById('dataDate');

    let newDate = new Date();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let amPm = (hour < 12) ? 'AM' : 'PM';
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let dayOfWeek = days[newDate.getDay()];
    let monthName = months[month];

    numbers.textContent = `${hour}:${minutes}:${seconds} ${amPm}`;
    dataDate.textContent = `${dayOfWeek}, ${monthName} ${day}, ${year}`;
};

setInterval(showTime, 1000);
