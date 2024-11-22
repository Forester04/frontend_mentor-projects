const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
let users = []; // Array to store user data

// Sign up event listener
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('signup-firstname').value;
  const lastName = document.getElementById('signup-lastname').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    document.getElementById("existingUser").textContent = "User already exists. Please log in.";
    return;
  }

  users.push({ firstName, lastName, email, password });
  document.getElementById("success1").textContent = "Sign up successful!";

  // Add new user to the array
  
  

  // Redirect to login page or other desired page
  // window.location.href = 'index.html';
});


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Find the user in the array
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Successful login, redirect to profile page or other protected area
    document.getElementById("success2").textContent = "Sign up successful!"
    window.location.href = 'profile.html'; // Replace with your actual profile page URL
  } else {
    document.getElementById("failed").textContent = "Invaild Credentials"
  }
});