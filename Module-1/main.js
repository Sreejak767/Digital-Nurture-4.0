// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = function() {
  alert("Page has fully loaded");
};

// 2. Syntax, Data Types, and Operators
const eventName = "Book Event";
const eventDate = "2025-07-15";
let availableSeats = 30;

const eventDetails = `Event: ${eventName}, Date: ${eventDate}, Seats: ${availableSeats}`;
console.log(eventDetails);

function decrementSeats() {
  if (availableSeats > 0) {
    availableSeats--;
  }
}

// 3. Conditionals, Loops, and Error Handling
const events = [
  { name: "Book Event", date: "2025-07-15", seats: 10, category: "Literature" },
  { name: "Food Fest", date: "2024-01-10", seats: 0, category: "Food" },
  { name: "Garba Event", date: "2025-10-20", seats: 5, category: "Dance" },
];

function displayValidEvents() {
  const today = new Date().toISOString().split("T")[0];
  events.forEach(event => {
    if (event.date > today && event.seats > 0) {
      console.log(`Valid: ${event.name} on ${event.date}`);
    }
  });
}

function tryRegister(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log(`Registered for ${eventName}. Remaining: ${event.seats}`);
  } catch (error) {
    console.error(error.message);
  }
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(event) {
  events.push(event);
}

function registerUser(eventName) {
  tryRegister(eventName);
}

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

function createCategoryCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const danceCounter = createCategoryCounter();

// 5. Objects and Prototypes
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const e = new Event("Holi Event", "2025-03-20", 20, "Festival");
console.log(Object.entries(e));

// 6. Arrays and Methods
const eventList = ["Music Fest", "Baking Workshop"];
eventList.push("Yoga Retreat");
const musicEvents = events.filter(e => e.category === "Music");
const formattedEvents = eventList.map(e => `Workshop on ${e}`);

// 7. DOM Manipulation
document.querySelectorAll("#events").forEach(section => {
  events.forEach(event => {
    const div = document.createElement("div");
    div.textContent = `${event.name} - ${event.date}`;
    section.appendChild(div);
  });
});

// 8. Event Handling
document.querySelectorAll("button").forEach(button => {
  button.onclick = () => alert("Button clicked");
});

document.getElementById("eventType").onchange = function () {
  const category = this.value;
  filterEventsByCategory(category, (result) => {
    console.log("Filtered Events:", result);
  });
};

document.addEventListener("keydown", function (e) {
  console.log("Key pressed:", e.key);
});

// 9. Async JS, Promises, Async/Await
function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 1000);
  });
}

fetchEvents()
  .then(data => console.log("Fetched Events:", data))
  .catch(err => console.error("Error:", err));

async function loadEvents() {
  const spinner = document.createElement("div");
  spinner.textContent = "Loading...";
  document.body.appendChild(spinner);
  try {
    const data = await fetchEvents();
    console.log("Async Loaded:", data);
  } finally {
    spinner.remove();
  }
}
loadEvents();

// 10. Modern JavaScript Features
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet();
const [first, ...rest] = eventList;
const cloned = [...events];

// 11. Working with Forms
document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const selectedEvent = form.elements["eventType"].value;

  if (!name || !email || !selectedEvent) {
    alert("All fields are required.");
    return;
  }
  console.log("Form Submitted", { name, email, selectedEvent });
});

// 12. AJAX & Fetch API
function sendRegistration(data) {
  setTimeout(() => {
    console.log("Data sent to server:", data);
    alert("Registration successful!");
  }, 1500);
}

// 13. Debugging and Testing
console.log("Registering form...");

// 14. jQuery and JS Frameworks
// Using jQuery (assumes jQuery is included)
$(document).ready(function () {
  $('#registerBtn').click(function () {
    alert('jQuery button click');
  });

  $('.event-card').fadeIn();
  $('.event-card').fadeOut();
});