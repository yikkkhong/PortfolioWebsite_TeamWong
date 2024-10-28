// Add an event listener to the contact form for the 'submit' event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the collected data to the server using AJAX (fetch API)
    fetch('/submit_contact', {
        method: 'POST', // Specify the request method as POST
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({ name, email, message }) // Convert the data to a JSON string
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Check if the submission was successful
        if (data.success) {
            alert("Thank you for your message!"); // Show a success message
        } else {
            alert("There was a problem sending your message. Please try again."); // Show an error message
        }
    })
    .catch((error) => {
        console.error('Error:', error); // Log any errors to the console
        alert("An error occurred. Please try again."); // Show a general error message
    });
});
