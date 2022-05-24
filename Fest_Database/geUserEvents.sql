DELIMITER //

CREATE PROCEDURE GetUserEvents(IN _USER_ID INT)
BEGIN
	SET @userId = _USER_ID;

    SELECT 
        *
    FROM users AS u 
        WHERE u.user_id = @userId;
END //

DELIMITER ;