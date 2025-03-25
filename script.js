document.addEventListener("DOMContentLoaded", function () {
    generateCalendar();
});

function generateCalendar() {
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    let daysInMonth = 30;
    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;
        calendarDiv.appendChild(dayDiv);
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

    let eventList = document.getElementById("event-list");
    let eventItem = document.createElement("p");
    eventItem.textContent = `📅 ${day}/${month}: ${desc}`;
    eventList.appendChild(eventItem);
}