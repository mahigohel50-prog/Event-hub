/* MOBILE MENU */

let menu = document.querySelector(".menu-toggle");

if(menu){
menu.onclick = function(){
document.getElementById("navMenu").classList.toggle("show");
};
}


/* DISPLAY EVENTS FUNCTION */

function displayEvents(data){

let container = document.getElementById("eventsContainer");

if(!container) return;

container.innerHTML = "";

data.forEach(event => {

container.innerHTML += `

<div class="event-card">

<img src="${event.image}" alt="${event.title}">

<h3>${event.title}</h3>

<p>📅 ${event.date}</p>

<p>📍 ${event.location}</p>

<p>${event.description}</p>

<button onclick="openDetails(${event.id})">More Details</button>

</div>

`;

});

}


/* LOAD EVENTS */

if(typeof events !== "undefined"){
displayEvents(events);
}


/* OPEN DETAILS */

function openDetails(id){
window.location.href = "details.html?id=" + id;
}


/* CATEGORY FILTER */



function filterEvents(category){

    // REMOVE ACTIVE FROM ALL
    document.querySelectorAll(".category-filter button")
    .forEach(btn => btn.classList.remove("active"));
    
    // ADD ACTIVE TO CLICKED BUTTON
    event.target.classList.add("active");
    
    if(category === "All"){
    displayEvents(events);
    return;
    }
    
    let filtered = events.filter(e =>
    e.category === category
    );
    
    displayEvents(filtered);
    }




/* SEARCH (LIVE FILTER) */

let searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let filtered = events.filter(event =>
event.title.toLowerCase().includes(value) ||
event.location.toLowerCase().includes(value)
);

displayEvents(filtered);

});

}


/* BUTTON SEARCH (OPTIONAL) */

function searchEvents(){

let value = document.getElementById("searchInput").value.toLowerCase();

let filtered = events.filter(event =>
event.title.toLowerCase().includes(value) ||
event.location.toLowerCase().includes(value)
);

displayEvents(filtered);

}


/* SLIDER (SAFE VERSION) */

let slides = document.querySelector(".slides");
let images = document.querySelectorAll(".slides img");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

if(slides && images.length > 0){

let index = 0;
let total = images.length;

function showSlide(i){
slides.style.transform = `translateX(-${i * 100}%)`;
}

if(nextBtn){
nextBtn.onclick = function(){
index = (index + 1) % total;
showSlide(index);
};
}

if(prevBtn){
prevBtn.onclick = function(){
index = (index - 1 + total) % total;
showSlide(index);
};
}

setInterval(()=>{
index = (index + 1) % total;
showSlide(index);
},4000);

}



const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

// Get values
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Create object
const contactData = {
name: name,
email: email,
message: message
};

// Get existing data or empty array
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Add new data
contacts.push(contactData);

// Save back to localStorage
localStorage.setItem("contacts", JSON.stringify(contacts));

// Success message
alert("Message saved successfully! ✅");

// Reset form
form.reset();
});
}