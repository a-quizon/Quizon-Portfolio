// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // Feature 1: Simple form validation for the contact form
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload
            
            // Get values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation check
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
            } else {
                // In a real app, this would send data to a server
                alert("Thank you, " + name + "! Your message has been sent to Dina's Mami House.");
                contactForm.reset(); // Clear the form
            }
        });
    }

    // You can add more simple interactions here!
});
