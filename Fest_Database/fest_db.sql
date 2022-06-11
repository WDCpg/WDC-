CREATE DATABASE fest_db;
USE fest_db;

CREATE Table users (
  user_id int NOT NULL AUTO_INCREMENT,
  first_name varchar(63),
  last_name varchar(63),
  password varchar(255),
  dob date,
  email varchar(100),
  contact_number int,
  city varchar(63),
  street varchar(100),
  country varchar(63),
  state varchar(63),
  post_code int,
  is_admin boolean,
  profile_picture varchar(255),
  PRIMARY KEY (user_id)
);

CREATE TABLE userLogin (
  user_id int NOT NULL,
  password varchar(255) NOT NULL
);

CREATE Table friends (
  user_id int NOT NULL,
  friend_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (friend_id) REFERENCES users(user_id) ON DELETE CASCADE

);

CREATE Table calendar_availability(
  calendar_id int NOT NULL,
  user_id int,
  start_date datetime AS start,
  end_date datetime AS end,
  title varchar(30),
  content varchar(100),
  class varchar(20),
  PRIMARY KEY (calendar_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE Table event_types (
  type_id int NOT NULL AUTO_INCREMENT,
  type_desc varchar(500),
  PRIMARY KEY (type_id)
);

CREATE Table events (
  event_id int NOT NULL AUTO_INCREMENT,
  event_start datetime,
  event_end datetime,
  event_description varchar(510),
  event_title varchar(100),
  country varchar(63),
  state varchar(63),
  city varchar(63),
  street varchar(63),
  post_code varchar(20),
  icon varchar(20),
  is_active boolean,
  event_type varchar(50),
  PRIMARY KEY (event_id),
  FOREIGN KEY (event_type) REFERENCES event_types(type_id)
);

CREATE Table event_images (
  image_id int NOT NULL AUTO_INCREMENT,
  event_id int NOT NULL,
  image_loc varchar(255),
  PRIMARY KEY (image_id),
  FOREIGN KEY (event_id) REFERENCES events (event_id) ON DELETE CASCADE
);

CREATE Table attendance (
  user_id int NOT NULL,
  event_id int NOT NULL,
  user_status int,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);

CREATE Table organiser (
  org_id int NOT NULL AUTO_INCREMENT,
  event_id int NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (org_id),
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE Table user_logs (
  log_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  date_time timestamp,
  PRIMARY KEY (log_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE NO ACTION
);

CREATE Table notifications (
  notification_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  event_id int NOT NULL,
  type_id int NOT NULL,
  created_at DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (notification_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);

CREATE Table notification_type (
  type_id int NOT NULL AUTO_INCREMENT,
  type_desc varchar(100),
  PRIMARY KEY (type_id)
);

CREATE TABLE `user_login` (
  `user_id` int NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Notification Types
INSERT INTO notification_type (type_desc)  VALUES ("Invited"), ("Attending");





