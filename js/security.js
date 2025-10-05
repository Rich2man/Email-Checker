// js/security.js
// Simple JS to check password strength and block weak passwords
function checkPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

function validateForm(form) {
  const password = form.password.value;
  if (checkPasswordStrength(password) < 3) {
    alert('Password too weak! Use at least 8 characters, mix of upper/lowercase, numbers, and symbols.');
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function validatePassword(password) {
  // At least 6 characters, one letter, one number
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

function validateSignupForm(form) {
  const name = form.querySelector('#signupName').value.trim();
  const email = form.querySelector('#signupEmail').value.trim();
  const password = form.querySelector('#signupPassword').value;
  const confirm = form.querySelector('#signupConfirm').value;
  if (!name) {
    alert('Name is required.');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Invalid email address.');
    return false;
  }
  if (!validatePassword(password)) {
    alert('Password must be at least 6 characters, include a letter and a number.');
    return false;
  }
  if (password !== confirm) {
    alert('Passwords do not match.');
    return false;
  }
  return true;
}

function validateLoginForm(form) {
  const email = form.querySelector('#loginEmail').value.trim();
  const password = form.querySelector('#loginPassword').value;
  if (!validateEmail(email)) {
    alert('Invalid email address.');
    return false;
  }
  if (!validatePassword(password)) {
    alert('Password must be at least 6 characters, include a letter and a number.');
    return false;
  }
  return true;
}

// Usage: add onsubmit="return validateForm(this)" to your forms
