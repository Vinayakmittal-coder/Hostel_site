// Weekly Mess Menu with Snacks
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
    {name: "Vinayak Mittal", room: "A-113", branch: "Computer Science and Artificial Intelligence",section:"2",roll: "2024UCA1564", phone: "+918826760409", email: "vinayakmittal027@gmail.com", hometown: "Faridabad" },
    {roll: "2024UEV2802", name: "Anmol Tyagi", branch: "Electronics and Vehicle Engineering", section: "To Be Updated", email: "To Be Updated", room: "C-102", phone: "7838022484", hometown: "To Be Updated" },
    {roll: "2024UIT3074", name: "Pratinav Pragy", branch: "Information Technology", section: "To Be Updated", email: "To Be Updated", room: "C-106", phone: "9580819700", hometown: "To Be Updated" },
    {name: "Aayush Kumar", room: "A-104", branch: "Computer Science and Artificial Intelligence",section:"1", roll: "2024UCA1855", phone: "+918076763274", email: "To Be Updated", hometown: "To Be Updated" },
    {roll: "2024UCS1672", name: "Manansh Arora", branch: "Computer Science and Engineering", section: "To Be Updated", email: "To Be Updated", room: "C-201", phone: "8077877537", hometown: "To Be Updated" },
    { roll: "2024UME4168", name: "Shashwat Shraiya", branch: "Mechanical Engineering", section: "To Be Updated", email: "To Be Updated", room: "C-202", phone: "7061347640", hometown: "To Be Updated" },
    { roll: "2024UME4211", name: "Divyansh Jain", branch: "Mechanical Engineering", section: "To Be Updated", email: "To Be Updated", room: "C-302", phone: "9818463516", hometown: "To Be Updated" },
    { roll: "2024UCD2132", name: "Garv Duhan", branch: "Computer Science and Data Science", section: "To Be Updated", email: "To Be Updated", room: "C-306", phone: "7082317772", hometown: "To Be Updated" },
    { roll: "2024UCA1922", name: "Yugansh Sharma", branch: "Computer Science and Artificial Intelligences", section: "To Be Updated", email: "To Be Updated", room: "C-404", phone: "8860251151", hometown: "To Be Updated" },
    { roll: "2024UIC3641", name: "Puneet Ranjan", branch: "Instrumentation and Control Engineering", section: "To Be Updated", email: "To Be Updated", room: "C-411", phone: "8595170645", hometown: "To Be Updated" },
    { roll: "2024UEC2650", name: "Prashanth Singh", branch: "Electronics and Communication Engineering", section: "To Be Updated", email: "To Be Updated", room: "CD-301", phone: "7727050516", hometown: "To Be Updated" },
    { roll: "2024UCA1882", name: "Ayush Agarwal", branch: "Computer Science and Artificial Intelligences", section: "To Be Updated", email: "To Be Updated", room: "CD-301", phone: "7528943073", hometown: "To Be Updated" },
    { roll: "2024UCA1931", name: "Tushar Girdher", branch: "Computer Science and Artificial Intelligences", section: "To Be Updated", email: "To Be Updated", room: "CD-303", phone: "8979397431", hometown: "To Be Updated" },
    { roll: "2024UBT1074", name: "Ayush Thakur", branch: "Biotechnology", section: "To Be Updated", email: "To Be Updated", room: "D-201", phone: "8738854460", hometown: "To Be Updated" },
    { roll: "2024UME4003", name: "Utkarsh", branch: "Mechanical Engineering", section: "To Be Updated", email: "To Be Updated", room: "D-204", phone: "9729010476", hometown: "To Be Updated" },
    { roll: "2024UCS1547", name: "Saumya Anshul", branch: "Computer Science and Engineering", section: "To Be Updated", email: "To Be Updated", room: "D-211", phone: "9576539917", hometown: "To Be Updated" },
    { roll: "2024UIT3154", name: "Rudraksh Joshi", branch: "Information Technology", section: "To Be Updated", email: "To Be Updated", room: "D-213", phone: "9815367395", hometown: "To Be Updated" },
    { roll: "2024UME4063", name: "Prateek Dwivedi", branch: "Mechanical Engineering", section: "To Be Updated", email: "To Be Updated", room: "D-303", phone: "9193401096", hometown: "To Be Updated" },
    { roll: "2024UBT1058", name: "Varij Vatsal Verma", branch: "Biotechnology", section: "To Be Updated", email: "To Be Updated", room: "D-305", phone: "7355115612", hometown: "To Be Updated" },
    { roll: "2024UEC2570", name: "Harsh Parwani", branch: "Electronics and Communication Engineering", section: "To Be Updated", email: "To Be Updated", room: "D-309", phone: "9079949815", hometown: "To Be Updated" },
    { roll: "2024UCA1863", name: "Aman Yadav", branch: "Computer Science and Artificial Intelligences", section: "To Be Updated", email: "To Be Updated", room: "D-312", phone: "9454096764", hometown: "To Be Updated" }
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
    .forEach(student => {
      const card = document.createElement("div");
      card.className = "student-card";
      card.dataset.roll = student.roll; 
      card.innerText = `${student.name}\nRoom ${student.room}`;
      studentList.appendChild(card);
    });
}

// Attach Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderStudentList();

  document.getElementById("search-bar").addEventListener("input", e => renderStudentList(e.target.value));

  document.getElementById("student-list").addEventListener("click", e => {
    if (e.target.classList.contains("student-card")) {
      const roll = e.target.dataset.roll;
      showFlashcard(roll);
    }
  });
});

// Function to Show Flashcard 
function showFlashcard(roll) {
  const student = students.find(s => s.roll === roll); 
  if (!student) return; // Prevent errors if no match is found

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
sessionStorage.setItem("lastPage", window.location.href);
document.getElementById("back-btn").addEventListener("click", function () {
    if (document.referrer) {
        window.history.back(); // Normal back function
    } else {
        let lastPage = sessionStorage.getItem("lastPage");
        if (lastPage) {
            window.location.href = lastPage; // Use stored page
        } else {
            window.location.href = "index.html"; // Default to homepage
        }
    }
});