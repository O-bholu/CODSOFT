document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Display the success message
    document.getElementById('successMessage').style.display = 'block';
  
    // Optionally, clear the form fields
    event.target.reset();
  });
  