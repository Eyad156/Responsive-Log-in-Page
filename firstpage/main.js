function handleSubmit(event) {
    event.preventDefault(); 

    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('password').value;

    if (email === 'Admin@gmail.com' && password === 'admin123') {
        
        window.location.href = '/firstpage/login.html';
    } 
    else {
        alert('Invalid email or password. Please try again.');
    }
}
