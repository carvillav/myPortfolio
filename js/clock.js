let showTime = () => {
    let numbers = document.getElementById('numbers');
    let dataDate = document.getElementById('dataDate');

    let newDate = new Date();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1 ;
    let year = newDate.getFullYear();

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let months = ['January','February','March','April','May','June','July','August','September', 'October', 'November','December'];

    month = months[month - 1];

    let hr = (hour > 12) ? hour - 12 : hour;
    let am = (hour < 12) ? 'AM' : 'PM';

    if(hour < 10) { hour = '0' + hour }
    if(minutes < 10) { minutes = '0' + minutes }
    if(seconds < 10) { seconds = '0' + seconds }

    numbers.textContent = `${hr}:${minutes}:${seconds} ${am}`;
    dataDate.textContent = `${month} ${day}, ${year}`;
}

setInterval(showTime, 1000);