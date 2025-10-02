
function handleCheck() {
  const emailInput = document.getElementById('emailInput');
  const resultBox = document.getElementById('resultBox');
  const email = emailInput.value.trim();
  if (!email) {
    resultBox.innerHTML = '<span class="text-danger">Please enter an email address.</span>';
    return;
  }
  // Simple email validation
  const valid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
  checkedEmails.push({ email, status: valid ? 'Valid' : 'Invalid' });
  resultBox.innerHTML = valid
    ? '<span class="badge bg-valid">Valid Email</span>'
    : '<span class="badge bg-invalid">Invalid Email</span>';
  emailInput.value = '';
  updateSavedFiles();
}

function downloadCSV() {
  if (!isLoggedIn) {
    showRegisterModal();
    return;
  }
  if (checkedEmails.length === 0) {
    alert('No emails to download.');
    return;
  }
  let csv = 'Email,Status\n' + checkedEmails.map(e => `${e.email},${e.status}`).join('\n');
  downloadFile(csv, 'checked_emails.csv', 'text/csv');
}

function downloadExcel() {
  if (!isLoggedIn) {
    showRegisterModal();
    return;
  }
  if (checkedEmails.length === 0) {
    alert('No emails to download.');
    return;
  }
  // Simple Excel (CSV with .xls extension)
  let excel = 'Email\tStatus\n' + checkedEmails.map(e => `${e.email}\t${e.status}`).join('\n');
  downloadFile(excel, 'checked_emails.xls', 'application/vnd.ms-excel');
}

function downloadFile(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  addSavedFile(filename);
}

function showRegisterModal() {
  const modal = new bootstrap.Modal(document.getElementById('registerModal'));
  modal.show();
}

// Manage saved files (frontend only)
function addSavedFile(filename) {
  savedFiles.push(filename);
  updateSavedFiles();
}
function updateSavedFiles() {
  const filesDiv = document.getElementById('savedFiles');
  if (!filesDiv) return;
  filesDiv.innerHTML = savedFiles.length
    ? '<strong>Downloaded Files:</strong><ul>' + savedFiles.map(f => `<li>${f}</li>`).join('') + '</ul>'
    : '';
}

// Optional: Simulate login for demo
function simulateLogin() {
  isLoggedIn = true;
  alert('You are now logged in! Download features unlocked.');
}




let checkedEmails = [];
let isLoggedIn = false; // Simulate login status

function handleCheck() {
  const emailInput = document.getElementById('emailInput');
  const resultBox = document.getElementById('resultBox');
  const email = emailInput.value.trim();
  if (!email) {
    resultBox.innerHTML = '<span class="text-danger">Please enter an email address.</span>';
    return;
  }
  // Simple email validation
  const valid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
  checkedEmails.push({ email, status: valid ? 'Valid' : 'Invalid' });
  resultBox.innerHTML = valid
    ? '<span class="badge bg-valid">Valid Email</span>'
    : '<span class="badge bg-invalid">Invalid Email</span>';
  emailInput.value = '';
  updateSavedFiles();
}

function downloadCSV() {
  if (!isLoggedIn) {
    showRegisterModal();
    return;
  }
  if (checkedEmails.length === 0) {
    alert('No emails to download.');
    return;
  }
  let csv = 'Email,Status\n' + checkedEmails.map(e => `${e.email},${e.status}`).join('\n');
  downloadFile(csv, 'checked_emails.csv', 'text/csv');
}

function downloadExcel() {
  if (!isLoggedIn) {
    showRegisterModal();
    return;
  }
  if (checkedEmails.length === 0) {
    alert('No emails to download.');
    return;
  }
  // Simple Excel (CSV with .xls extension)
  let excel = 'Email\tStatus\n' + checkedEmails.map(e => `${e.email}\t${e.status}`).join('\n');
  downloadFile(excel, 'checked_emails.xls', 'application/vnd.ms-excel');
}

function downloadFile(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  addSavedFile(filename);
}

function showRegisterModal() {
  const modal = new bootstrap.Modal(document.getElementById('registerModal'));
  modal.show();
}

// Manage saved files (frontend only)
function addSavedFile(filename) {
  savedFiles.push(filename);
  updateSavedFiles();
}
function updateSavedFiles() {
  const filesDiv = document.getElementById('savedFiles');
  if (!filesDiv) return;
  filesDiv.innerHTML = savedFiles.length
    ? '<strong>Downloaded Files:</strong><ul>' + savedFiles.map(f => `<li>${f}</li>`).join('') + '</ul>'
    : '';
}

// Optional: Simulate login for demo
function simulateLogin() {
  isLoggedIn = true;
  alert('You are now logged in! Download features unlocked.');
}