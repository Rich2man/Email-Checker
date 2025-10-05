<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up | Email Checker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/body.css">
  <link rel="stylesheet" href="css/utill.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand fw-bold text-white" href="index.html">EmailChecker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><a class="nav-link text-white" href="why_us.html">Why Us</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="explore_plans.html">Explore Plans</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="email-checker.html">Email-Checker</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="help.html">Help</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="login.php">Login</a></li>
          <li class="nav-item ms-lg-3"><a class="btn btn-accent" href="#">Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Sign Up Section -->
  <section class="section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="section-card p-4">
            <h2 class="fw-bold mb-4 text-center" style="color: var(--color-30);">Sign Up</h2>
            <?php
            if (session_status() === PHP_SESSION_NONE) {
              session_start();
            }
            if (isset($_SESSION['message']) && $_SESSION['message']) {
              echo '<div class="alert alert-info text-center" style="margin-top:20px;">' . htmlspecialchars($_SESSION['message']) . '</div>';
              unset($_SESSION['message']);
            }
            ?>
            <form action="php/register.php" method="POST" onsubmit="return validateForm(this)">
              <div class="mb-3">
                <label for="signupName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="signupName" name="name" placeholder="Your Name" required>
              </div>
              <div class="mb-3">
                <label for="signupEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="signupEmail" name="email" placeholder="you@email.com" required>
              </div>
              <div class="mb-3">
                <label for="signupPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="signupPassword" name="password" placeholder="Password" required>
                <script src="js/security.js"></script>
              </div>
              <div class="mb-3">
                <label for="signupConfirm" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="signupConfirm" name="confirm" placeholder="Confirm Password" required>
                <script>
                document.querySelector('form').onsubmit = function(e) {
                  var pass = document.getElementById('signupPassword').value;
                  var conf = document.getElementById('signupConfirm').value;
                  if (pass !== conf) {
                    alert('Passwords do not match!');
                    e.preventDefault();
                    return false;
                  }
                  return validateForm(this);
                };
                </script>
              </div>
              <button type="submit" class="btn btn-danger w-100 mb-2">Sign Up</button>
              <div class="text-center mb-2">
                <span class="text-muted">or</span>
              </div>
              <button type="button" class="btn btn-outline-danger w-100 mb-2">
                <i class="fa-solid fa-envelope me-2"></i>Continue with Email
              </button>
              <button type="button" class="btn btn-outline-secondary w-100">
                <i class="fab fa-google me-2"></i>Continue with Google
              </button>
            </form>
            <hr class="my-4">
            <div class="text-center">
              <span>Already have an account?</span>
              <a href="login.php" class="fw-bold" style="color: var(--color-10);">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer py-5">
    <div class="container">
      <div class="row gy-4">
        <div class="col-md-4 text-center text-md-start">
          <h5 class="fw-bold text-white">EmailChecker</h5>
          <p class="mb-0">Fast, accurate, and secure email verification.</p>
        </div>
        <div class="col-md-4 text-center">
          <h6 class="fw-bold text-white mb-3">Quick Links</h6>
          <ul class="list-unstyled">
            <li><a href="index.html" class="footer-link">Home</a></li>
            <li><a href="why_us.html" class="footer-link">Why Us</a></li>
            <li><a href="login.php" class="footer-link">Login</a></li>
            <li><a href="signup.php" class="footer-link">Sign-Up</a></li>
          </ul>
        </div>
        <div class="col-md-4 text-center text-md-end">
          <h6 class="fw-bold text-white mb-3">Follow Us</h6>
          <a href="#" class="social-icon me-2"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon me-2"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-telegram-plane"></i></a>
        </div>
      </div>
      <hr class="footer-divider my-4">
      <div class="text-center small">
        &copy; 2025 EmailChecker. All rights reserved.
      </div>
    </div>
  </footer>

  <script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
