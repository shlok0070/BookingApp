function submitForm(event) {
    event.preventDefault(); // prevent the default form submission

    // get user data from the form
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // create an object with the user data
    const userData = {
        username: username,
        phone: phone,
        email: email
    };

    // make an API call to your Node.js server
    fetch('http://localhost:3000/api/add_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('User registered successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error registering the user.');
    });
}
