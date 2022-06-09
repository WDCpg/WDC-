USE fest_db;
DROP TABLE calendar_availability;

CREATE TABLE calendar_availability (
    calendar_id int NOT NULL,
    user_id int NOT NULL,
    start_date datetime,
    end_date datetime,
    title varchar (65) ,
    event_description varchar(255),
    class varchar(20),
    PRIMARY KEY (calendar_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

INSERT INTO calendar_availability (calendar_id, user_id, start_date, end_date, title, event_description, class)
VALUES (11, 11, '2022-06-05 10:30', '2022-06-05 11:30', 'Doctor appointment', '<i class="v-icon material-icons">local_hospital</i>', 'leisure'
);

INSERT INTO calendar_availability (calendar_id, user_id, start_date, end_date, title, event_description, class)
VALUES (12, 11, '2022-06-06 10:30', '2022-06-06 11:30', 'Exam', '<i class="v-icon material-icons">Exam</i>', 'leisure'
);

-- FROM events AS ev
--     LEFT JOIN attendance AS att
--         ON  ev.event_id = att.event_id
--     WHERE att.user_id = req.session.user