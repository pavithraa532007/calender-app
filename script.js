let events = [];

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function generateCalendar() {
    let year = document.getElementById("year").value;
    let calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = ""; // Clear previous calendar

    for (let month = 1; month <= 12; month++) {
        let monthDiv = document.createElement("div");
        monthDiv.innerHTML = `<h3>${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}</h3>`;
        
        let daysInMonth = getDaysInMonth(month, year);
        let monthGrid = document.createElement("div");
        monthGrid.className = "month-grid";

        for (let day = 1; day <= daysInMonth; day++) {
            let dayDiv = document.createElement("div");
            dayDiv.className = "day";
            dayDiv.textContent = day;
            monthGrid.appendChild(dayDiv);
        }

        monthDiv.appendChild(monthGrid);
        calendarDiv.appendChild(monthDiv);
    }
}

function addEvent() {
    let day = document.getElementById("event-day").value;
    let month = document.getElementById("event-month").value;
    let desc = document.getElementById("event-desc").value;

    if (!day || !month || !desc) {
        alert("Please enter all event details!");
        return;
    }

    events.push({ day, month, desc });
    alert("Event added!");
}

function viewEvents() {
    let month = document.getElementById("view-month").value;
    let eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Clear previous list

    let filteredEvents = events.filter(e => e.month == month);
    if (filteredEvents.length === 0) {
        eventList.innerHTML = "<p>No events found.</p>";
    } else {
        filteredEvents.forEach(e => {
            let eventItem = document.createElement("p");
            eventItem.textContent = `📅 ${e.day}/${e.month}: ${e.desc}`;
            eventList.appendChild(eventItem);
        });
    }
}