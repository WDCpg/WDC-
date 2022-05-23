CREATE DATABASE fest;
SELECT fest;

CREATE Table users (
  user_id int NOT NULL,
  first_name varchar(63),
  last_name varchar(63),
  dob date,
  email varchar(100),
  contact_number int,
  city varchar(63),
  street varchar(100),
  country varchar(63),
  [state] varchar(63),
  post_code int,
  is_admin boolean,
  profile_picture varchar(255),
  PRIMARY KEY (user_id)
);

CREATE Table event (
  event_id int NOT NULL,
  event_start datetime,
  event_end datetime,
  event_discription varchar(510),
  event_title varchar(100),
  country varchar(63),
  city varchar(63),
  street varchar(63),
  post_code varchar(20),
  icon varchar(20),
  is_active boolean,
  event_type int,
  PRIMARY KEY (event_id)
);

CREATE Table event_types (
  type_id int NOT NULL,
  type_desc varchar(500),
  PRIMARY KEY(type_id)
);

CREATE Table images (
  image_id int NOT NULL,
  event_id int NOT NULL,
  image_loc varchar(255),
  PRIMARY KEY (image_id)
);

CREATE Table attendance (
  att_id int NOT NULL,
  user_id int NOT NULL,
  event_id int NOT NULL,
  user_status int,
  PRIMARY KEY(att_id)
);

CREATE Table organiser (
  org_id int NOT NULL,
  event_id int NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY(org_id)
);

CREATE Table user_logs (
  log_id int NOT NULL,
  user_id int NOT NULL,
  date_time timestamp,
  PRIMARY KEY (log_id)
);

CREATE Table notifications (
  notification_id int NOT NULL,
  user_id int NOT NULL,
  type_id int NOT NULL,
  created_at timestamp,
  PRIMARY KEY (notification_id)
);

CREATE Table notification_type (
  type_id int NOT NULL,
  type_desc varchar(100),
  PRIMARY KEY (type_id)
);

