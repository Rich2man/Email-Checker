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
