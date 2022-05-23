CREATE DATABASE fest;
SELECT fest;

CREATE Table users (
  user_id int,
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
  profile_picture varchar(255)
);

CREATE Table event (
  event_id int,
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
  event_type int
);

CREATE Table event_types (
  type_id int,
  type_desc varchar(500)
);

CREATE Table images (
  image_id int,
  event_id int,
  image_loc varchar(255)
);

CREATE Table attendance (
  att_id int,
  user_id int,
  event_id int,
  user_status int
);

CREATE Table organiser (
  org_id int,
  event_id int,
  user_id int
);

CREATE Table user_logs (
  log_id int,
  user_id int,
  date_time timestamp
);

CREATE Table notifications (
  notification_id int,
  user_id int,
  type int,
  created_at timestamp
);

CREATE Table notification_type (
  type_id int,
  type_desc varchar(100)
);

//uhdiusad
