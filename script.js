window.onload = function() {
    // Fetch all users when the page loads
    fetchAllUsers();
};

function fetchAllUsers() {
    fetch('http://localhost:3000/api/get_users')
    .then(response => response.json())
    .then(data => {
        displayUsers(data);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });
}

function displayUsers(users) {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Clear the current list
    
    users.forEach(user => {
        const li = document.createElement('li');
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            deleteUser(user.id); // Assuming each user has an 'id' property
        };

        li.textContent = `Username: ${user.username}, Phone: ${user.phone}, Email: ${user.email} `;
        li.appendChild(deleteButton);
        
        usersList.appendChild(li);
    });
}

function deleteUser(userId) {
    fetch(`http://localhost:3000/api/delete_user/${userId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('User deleted successfully!');
        fetchAllUsers(); // Refresh the list after deletion
    })
    .catch(error => {
        console.error('Error deleting user:', error);
    });
}

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
        fetchAllUsers(); // Refresh the list after adding a user
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error registering the user.');
    });
}