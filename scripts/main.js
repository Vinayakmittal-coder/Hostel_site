// Weekly Mess Menu
const messMenu = {
  Monday: {
    breakfast: 'Aloo Paratha + Curd + Tea + Pickle + Bread Butter Jam',
    lunch: 'Aloo Gobhi Sabji + Chana dal + Rice + Roti + Salad + Pickle',     
    snacks: 'Pasta(One Time)/Paloda + Cold Coffee',
    dinner: 'Dal + Soya Chap + Roti + Rice + Gajar Halwa'
  },
  Tuesday: {      
  breakfast: 'Masala Dosa, Sambhar, Coconut Chutney + Tea + Milk', 
  lunch: 'Kadhi Pakoda + Allo masala + Roti + Rice + Boiled Sprouts + Chana Salad',          
  snacks: 'Veg Noodle(One Time) + Green Chutney + Tea',            
  dinner: 'Matar Mushroom + Yellow Dal + Rice + Butter Roti + Kheer + Salad'
  },
  Wednesday: {
     breakfast:'Poha + Green Chutney + Tea + Milk + Butter Bread Jam',            
     lunch: 'Allo Palak + Masoor dal + Rice + Roti + Salad + Raita Bhoodi + Pickle',            
     snacks: 'Masala Maggi(One Time) + Coffee',            
     dinner: 'Egg Curry / Paneer + Dal Fry + Rice +Roti + Gulab Jamun + Salad'
  },
  Thursday:{
      breakfast: 'Mix / Onion Paratha + Curd + Tea + Pickle + Butter Bread Jam',
      lunch: 'Aloo-Pattagobhi + Arhar dal + Rice + Roti + Salad + Pickle + Boondi Raita',            
      snacks: 'Chilli Potato(One Time) + Tea',
      dinner: 'Lal Masoor dal + Aloo Mater + Pulao + Roti + Jalebi + Salad'
  },
  Friday:{            
      breakfast: 'Moong dal Chilla / Boiled Egg + Tea + Milk + Butter Bread Jam',
      lunch: 'Kala Chana + Seasonal Veg + Masoor dal + Rice + Roti + Salad Pickle + Boondi Raita',
      snacks: 'Bread Roll(One Piece) + Green Chutney + Tea',
      dinner: 'Sarso Ka Saag + Mix Dal + Makke ki Roti + Rice + Rasgulla + Salad'
  },
  Saturday: {
    breakfast:'Aloo Subji + Puri + Pickle + Tea + Milk + Bread Butter Jam',
    lunch: 'Rajma + Jeera Rice + Baigan Bharta + Roti + Salad + Pickle + Boondi Raita',
    snacks: 'Samosa(One Piece) + Green Chutney + Tea',
    dinner: 'Kadhai Paneer / Egg Kadhai + Arhar dal + Rice + Roti + Salad + Fruits Custard'
  },
  Sunday: {
    breakfast: 'Uttapam + Sambhar + Coconut Chutney + Tea + Milk + Bread Butter Jam',
    lunch: 'Chhole Bhature + Raita + Pulav + Salad (Onion + Chilli)',
    snacks:'Chhole Tikki (One Piece) + Green Chutney + Dahi + Tea',
    dinner: 'Malai Kofta + Dal Makhani + Paratha + Ice-Cream + Salad'
  }
};

// Function to display today's mess menu on the homepage
function displayTodaysFood() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const todayName = days[today];

  const todayMenu = messMenu[todayName];

  if (todayMenu) {
    document.getElementById("today-breakfast").innerHTML = `<strong>Breakfast:</strong> ${todayMenu.breakfast}`;
    document.getElementById("today-lunch").innerHTML = `<strong>Lunch:</strong> ${todayMenu.lunch}`;
    document.getElementById("today-snacks").innerHTML = `<strong>Snacks:</strong> ${todayMenu.snacks}`;
    document.getElementById("today-dinner").innerHTML = `<strong>Dinner:</strong> ${todayMenu.dinner}`;
  }
}

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

hamburgerMenu.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
});
menuOverlay.addEventListener("click", (event) => {
  if (event.target === menuOverlay) {
    menuOverlay.classList.remove("active");
  }
});
//Data
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
      <p><strong>Branch:</strong> ${student.branch}</p>
      <p><strong>Section:</strong> ${student.section}</p>
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
