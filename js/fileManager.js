// Simulated file contents
const fileContents = {
  'Company Users Email': 'Email,Status\ncompany1@example.com,Valid\ncompany2@example.com,Valid',
  'New Users Email': 'Email,Status\nnewuser1@example.com,Valid\nnewuser2@example.com,Valid',
  'Graduate Email': 'Email,Status\ngrad1@example.com,Valid\ngrad2@example.com,Valid',
  'Student Email': 'Email,Status\nstudent1@example.com,Valid\nstudent2@example.com,Valid',
  'Family Email': 'Email,Status\nfamily1@example.com,Valid\nfamily2@example.com,Valid'
};

function openManagedFile(span) {
  const name = span.textContent.trim();
  const content = fileContents[name] || 'Email,Status\nexample@example.com,Valid';
  // Default to CSV for demo; you can add logic for .xls if needed
  openFileInNewTab(content, name.replace(/\s+/g, '_').toLowerCase() + '.csv', 'text/csv');
}

// Load fileManager.js
// Make sure this script is included after fileManager.js in your HTML
function enableRename(span) {
  if (span.classList.contains('editing')) return;
  const currentName = span.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentName;
  input.className = 'form-control form-control-sm d-inline w-auto rename-input';
  span.replaceWith(input);
  input.focus();
  input.onblur = function() {
    finishRename(input);
  };
  input.onkeydown = function(e) {
    if (e.key === 'Enter') {
      finishRename(input);
    } else if (e.key === 'Escape') {
      cancelRename(input, currentName);
    }
  };
}

function finishRename(input) {
  const newName = input.value.trim() || 'Untitled File';
  const span = document.createElement('span');
  span.className = 'file-name';
  span.textContent = newName;
  span.onclick = function() { enableRename(span); };
  input.replaceWith(span);
}

function cancelRename(input, oldName) {
  const span = document.createElement('span');
  span.className = 'file-name';
  span.textContent = oldName;
  span.onclick = function() { enableRename(span); };
  input.replaceWith(span);
}
















// fileManager.js
// Logic to open file in a new tab as CSV/Excel and show tip for Google Sheets/Excel Online

/**
 * Opens the given file content in a new tab as CSV or Excel.
 * @param {string} content - The file content (CSV or Excel format)
 * @param {string} filename - The name of the file (should end with .csv or .xls)
 * @param {string} mimeType - The MIME type (e.g., 'text/csv' or 'application/vnd.ms-excel')
 */
function openFileInNewTab(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  // Open in new tab
  window.open(url, '_blank');
  // Optionally, revoke the object URL after some time
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  // Show tip for Google Sheets/Excel Online
  alert('To view this file in Google Sheets or Excel Online, download it from the new tab and upload it to the service.');
}

// Example usage:
// openFileInNewTab('Email,Status\ntest@example.com,Valid', 'checked_emails.csv', 'text/csv');
// openFileInNewTab('Email\tStatus\ntest@example.com\tValid', 'checked_emails.xls', 'application/vnd.ms-excel');

// You can call openFileInNewTab from your UI logic when a user clicks a file name or a "View Online" button.
