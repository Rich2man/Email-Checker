<?php
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}
// Unset all session variables
$_SESSION = array();
// Destroy the session
session_destroy();
// Set logout message
session_start();
$_SESSION['message'] = 'You have been logged out.';
// Redirect to login page
header('Location: login.php');
exit;
