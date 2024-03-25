function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('password').value;

    if (email === 'Admin@gmail.com' && password === 'admin123') {
        // Redirect to another page
        window.location.href = '/firstpage/login.html';
    } else {
        // Display an error message or take other actions as needed
        alert('Invalid email or password. Please try again.');
    }
}
