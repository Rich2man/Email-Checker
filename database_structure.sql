-- Email Checker Database Structure
-- Insert random plans
INSERT INTO plans (name, max_checks_per_month, price) VALUES
('Free', 50, 0.00),
('Pro', 2000, 9.00),
('Business', 100000, 29.00);

-- Insert random users
-- Insert random files
INSERT INTO files (user_id, filename, file_type) VALUES
(1, 'company_users.csv', 'csv'),
(2, 'new_users.csv', 'csv'),
(3, 'graduates.xls', 'xls'),
(4, 'students.csv', 'csv'),
(5, 'family.xls', 'xls');
INSERT INTO users (name, email, password_hash, plan_id) VALUES
('Alice Smith', 'alice@example.com', 'hashedpassword1', 1),
('Bob Johnson', 'bob@example.com', 'hashedpassword2', 2),
('Charlie Lee', 'charlie@example.com', 'hashedpassword3', 3),
('Dana White', 'dana@example.com', 'hashedpassword4', 1),
('Eve Black', 'eve@example.com', 'hashedpassword5', 2);

CREATE TABLE plans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    max_checks_per_month INT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    plan_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plan_id) REFERENCES plans(id)
);

CREATE TABLE email_checks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    email VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    checked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE files (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    filename VARCHAR(100) NOT NULL,
    file_type VARCHAR(10) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE file_emails (
    id INT PRIMARY KEY AUTO_INCREMENT,
    file_id INT,
    email VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (file_id) REFERENCES files(id)
);
