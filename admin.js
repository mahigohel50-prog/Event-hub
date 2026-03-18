const container = document.getElementById("dataContainer");

// Get data from localStorage
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

if(contacts.length === 0){
container.innerHTML = "<p>No messages found</p>";
}else{

container.innerHTML = ""; // clear first

contacts.forEach((data, index) => {
container.innerHTML += `
<div style="border:1px solid #ccc; padding:10px; margin:10px;">
<h3>${data.name}</h3>
<p><b>Email:</b> ${data.email}</p>
<p>${data.message}</p>
</div>
`;
});

}