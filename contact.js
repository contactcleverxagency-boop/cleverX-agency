// Simple hamburger toggle - NO auto close on link click
document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside (optional)
document.addEventListener('click', function(e) {
    const menu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    const header = document.querySelector('.headertext');
    
    if (!header.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


var button=document.querySelector("planbutton")

function click(){
    console.log("https://calendly.com/mohammedsarafudeen2007/30min?back=1&month=2025-12")
}

var about=document.getElementById("about")

function click(event){
   
about.location.replace("http://www.w3schools.com");
}