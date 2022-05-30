DELIMITER //

CREATE PROCEDURE singUp(IN _EMAIL varchar(200), IN _PASSWORD varchar(200))
BEGIN
	SET @email = _EMAIL;
    SET @password = _PASSWORD;

    INSERT INTO users (email)
    VALUES(@email);

    Set @userId = LAST_INSERT_ID();

    INSERT INTO user_login 
    VALUES (@userId, @password);

END //

DELIMITER ; 