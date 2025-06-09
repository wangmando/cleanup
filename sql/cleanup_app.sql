CREATE DATABASE cleanup_app;

USE cleanup_app;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  nickname VARCHAR(50),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE missions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'easy',
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE user_missions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  mission_id INT NOT NULL,
  status ENUM('completed', 'deferred') NOT NULL DEFAULT 'completed',
  completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (mission_id) REFERENCES missions(id)
);

select * from users;
select * from missions;
select * from user_missions;