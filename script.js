document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Message sent!'); // Replace this with your actual logic
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});