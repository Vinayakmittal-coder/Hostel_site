// Weekly Mess Menu with Snacks
const messMenu = {
  Monday: {
    breakfast: "Idli & Sambar",
    lunch: "Rice & Curry",
    snacks: "Samosa with Chutney",
    dinner: "Chapati & Sabzi"
  },
  Tuesday: {
    breakfast: "Pancakes",
    lunch: "Pulao",
    snacks: "Vegetable Sandwich",
    dinner: "Roti & Dal"
  },
  Wednesday: {
    breakfast: "Paratha & Curd",
    lunch: "Fried Rice",
    snacks: "Masala Tea & Biscuits",
    dinner: "Vegetable Curry & Roti"
  },
  Thursday: {
    breakfast: "Dosa & Chutney",
    lunch: "Biryani",
    snacks: "Pakoras",
    dinner: "Dal Tadka & Rice"
  },
  Friday: {
    breakfast: "Poha & Jalebi",
    lunch: "Rajma Chawal",
    snacks: "Veg Patties",
    dinner: "Paneer Butter Masala & Naan"
  },
  Saturday: {
    breakfast: "Upma",
    lunch: "Khichdi",
    snacks: "Cold Coffee",
    dinner: "Chole Bhature"
  },
  Sunday: {
    breakfast: "Aloo Puri",
    lunch: "Veg Pulao",
    snacks: "Cupcakes",
    dinner: "Special Thali"
  }
};

// Function to display today's mess menu on the homepage
function displayTodaysFood() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay(); // Get the current day as a number (0 = Sunday, 6 = Saturday)
  const todayName = days[today];

  const todayMenu = messMenu[todayName];

  if (todayMenu) {
    document.getElementById("today-breakfast").innerHTML = `<strong>Breakfast:</strong> ${todayMenu.breakfast}`;
    document.getElementById("today-lunch").innerHTML = `<strong>Lunch:</strong> ${todayMenu.lunch}`;
    document.getElementById("today-snacks").innerHTML = `<strong>Snacks:</strong> ${todayMenu.snacks}`;
    document.getElementById("today-dinner").innerHTML = `<strong>Dinner:</strong> ${todayMenu.dinner}`;
  }
}

// Function to generate the mess menu table on the mess menu page
function generateMessMenuTable() {
  const tableBody = document.getElementById("mess-menu-body");

  Object.keys(messMenu).forEach(day => {
    const menu = messMenu[day];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${day}</td>
      <td>${menu.breakfast}</td>
      <td>${menu.lunch}</td>
      <td>${menu.snacks}</td>
      <td>${menu.dinner}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Hamburger Menu Toggle
document.getElementById("hamburger-menu").addEventListener("click", () => {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// Initialize Functions
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("today-breakfast")) displayTodaysFood();
  if (document.getElementById("mess-menu-body")) generateMessMenuTable();
});
// Get Hamburger Menu and Overlay Elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const menuOverlay = document.getElementById("menu-overlay");

// Open or close the menu when the hamburger icon is clicked
hamburgerMenu.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
});

// Close the menu if the user clicks outside the links box
menuOverlay.addEventListener("click", (event) => {
  if (event.target === menuOverlay) {
    menuOverlay.classList.remove("active");
  }
});
// Sample Student Data
const students = [
  { name: "Vinayak Mittal", room: "A113", class: "B.Tech 2nd Year",roll: "2024UCS1234", phone: "+911987654321", email: "jane.smith@example.com", hometown: "Mumbai" },
  { name: "Abhishek Mishra", room: "A101", class: "ECE 2",roll: "2024UCS1234", phone: "+911234567890", email: "john.doe@example.com", hometown: "New Delhi" }, 
  { name: "Rahul Kumar", room: "A103", class: "M.Tech Final Year",roll: "2024UCS1234", phone: "+911122334455", email: "rahul.kumar@example.com", hometown: "Bangalore"},
  { name: "Rohan Sharma", room: "A104", class: "B.Sc 3rd Year",roll: "2024UCS1234", phone: "+911234998877", email: "rohan.sharma@example.com", hometown: "Pune" }
];

// Function to Render Student Cards
function renderStudentList(filter = "") {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = ""; // Clear existing content

  students
    .filter(student => {
      const searchText = filter.toLowerCase();
      return (
        student.name.toLowerCase().includes(searchText) ||
        student.room.toLowerCase().includes(searchText)
      );
    })
    .forEach((student, index) => {
      const card = document.createElement("div");
      card.className = "student-card";
      card.dataset.index = index;
      card.innerText = `${student.name}\nRoom ${student.room}`;
      studentList.appendChild(card);
    });
}

// Function to Show Flashcard
function showFlashcard(index) {
  const student = students[index];
  const modal = document.createElement("div");
  modal.id = "student-modal";
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${student.name}</h2>
      <p><strong>Room:</strong> ${student.room}</p>
      <p><strong>Class:</strong> ${student.class}</p>
      <p><strong>Roll No:</strong> ${student.roll}</p>
      <p><strong>B.Tech 1st Year</strong></p>
      <p><strong>Phone:</strong> <a href="tel:${student.phone}">${student.phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${student.email}">${student.email}</a></p>
      <p><strong>Hometown:</strong> ${student.hometown}</p>
      <button id="close-modal">Close</button>
    </div>
  `;

  modal.querySelector("#close-modal").addEventListener("click", () => modal.remove());
  document.body.appendChild(modal);
}

// Attach Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderStudentList();

  document.getElementById("search-bar").addEventListener("input", e => renderStudentList(e.target.value));

  document.getElementById("student-list").addEventListener("click", e => {
    if (e.target.classList.contains("student-card")) {
      const index = e.target.dataset.index;
      showFlashcard(index);
    }
  });
});
