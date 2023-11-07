const calendarDays = document.getElementById('calendar-days');
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const live = document.getElementById('live');
const date = document.getElementById('date');
const day_select = document.getElementById('day');
const month_select = document.getElementById('month');
const year_select = document.getElementById('year');

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDate();
const currentDayName = getDayName(currentDate.getDay());
// live.textContent = `${currentDayName}, ${currentDay} ${getMonthName(currentMonth)} ${currentYear}`;
date.textContent =  `${currentDay}`;
day_select.textContent =  `${currentDayName}`;
month_select.textContent =  `${getMonthName(currentMonth)}`;
year_select.textContent =  `${currentYear}`;
prevMonthButton.addEventListener('click', showPreviousMonth);
nextMonthButton.addEventListener('click', showNextMonth);

showCalendar(currentYear, currentMonth);

function showCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    currentMonthYear.innerText = `${getMonthName(month)} ${year}`;

    // Clear previous month's days
    calendarDays.innerHTML = '';

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day';
        day.innerText = i;
        
        const dateToShow = new Date(year, month, i);
        const dayName = getDayName(new Date(year, month, i).getDay()); // Mendapatkan nama hari
        
        // Tambahkan event listener ke elemen 'day'
        day.addEventListener('click', () => {
            live.innerText = `${dayName}, ${i} ${getMonthName(currentMonth)} ${year}`;
            date.textContent =  `${i}`;
            day_select.textContent =  `${dayName}`;
            month_select.textContent =  `${getMonthName(currentMonth)}`;
            year_select.textContent =  `${year}`;
        });

        calendarDays.appendChild(day);
    }
}

function getDayName(day) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayNames[day];
}

function showPreviousMonth() {
    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }
    showCalendar(currentYear, currentMonth);
}

function showNextMonth() {
    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    showCalendar(currentYear, currentMonth);
}

function getMonthName(month) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
}

