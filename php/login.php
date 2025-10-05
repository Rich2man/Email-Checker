<?php
require 'db.php';
session_start();

class User {
    private $pdo;
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    public function login($email, $password) {
        $stmt = $this->pdo->prepare('SELECT id, password_hash FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['message'] = 'Login successful!';
            header('Location: ../main-page.php');
            exit;
        } else {
            $_SESSION['message'] = 'Invalid credentials.';
            header('Location: ../login.php');
            exit;
        }
    }
}

$status = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $userObj = new User($pdo);
    $status = $userObj->login($email, $password);
    echo $status;
    exit;
}
