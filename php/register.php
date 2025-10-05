<?php
require 'db.php';

class User {
    private $pdo;
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    public function register($name, $email, $password) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $_SESSION['message'] = 'Invalid email address.';
            header('Location: ../signup.php');
            exit;
        }
        if (strlen($password) < 6) {
            $_SESSION['message'] = 'Password must be at least 6 characters.';
            header('Location: ../signup.php');
            exit;
        }
        $stmt = $this->pdo->prepare('SELECT id FROM users WHERE email = ?');
        $stmt->execute([$email]);
        if ($stmt->fetch()) {
            $_SESSION['message'] = 'Email already registered.';
            header('Location: ../login.php');
            exit;
        }
        $hash = password_hash($password, PASSWORD_DEFAULT);
        try {
            $stmt = $this->pdo->prepare('INSERT INTO users (name, email, password_hash, plan_id) VALUES (?, ?, ?, 1)');
            $stmt->execute([$name, $email, $hash]);
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                $_SESSION['message'] = 'Email already registered.';
                header('Location: ../login.php');
                exit;
            }
            $_SESSION['message'] = 'Registration failed: ' . $e->getMessage();
            header('Location: ../signup.php');
            exit;
        }
        $_SESSION['message'] = 'Signup successful!';
        header('Location: ../login.php');
        exit;
    }
}

$status = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $userObj = new User($pdo);
    $status = $userObj->register($name, $email, $password);
    echo $status;
    exit;
}
