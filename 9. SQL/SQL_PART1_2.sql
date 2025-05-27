-- SQL PART 1 AND PART 2 CODES
CREATE DATABASE instagram ;

USE instagram ;


CREATE TABLE user (
	id INT,
    age INT ,
	name VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE ,
    followers INT DEFAULT 0,
    following INT ,
    CONSTRAINT AGE_CHECK CHECK(age>=18),
    PRIMARY KEY (id)
);

CREATE TABLE post(
	id INT PRIMARY KEY , 
    content VARCHAR(100),
    user_id INT,
    foreign key (user_id) REFERENCES user(id) );
    
    
INSERT INTO user
VALUES
( 101 , 20, "adam" ,"adam@gmail.com", 12 , 24), 
( 102 , 18 , "bob" ,"bob@gmail.com" , 14 , 18 ) ,
( 103 , 13 , "charlie" ,"charlie@gmail.com" , 104 , 108 ) ,
( 104 , 19 , "daemon" ,"daemon@gmail.com" , 114 , 118 ) ,
( 105 , 18 , "eric" ,"eric@gmail.com" , 124 , 128 ) 
;

SELECT * FROM user
WHERE followers > 12	;	

SELECT name , email from user 
WHERE email in ("adam@gmail.com" , "bob@gmail.com");

SELECT age from user
ORDER BY age ASC;

SELECT age from user
ORDER BY age desc;

SELECT MAX(age) from user ;

-- group by clause for grouping using aggregate functions 
SELECT COUNT(id) , age  from user
GROUP BY age ; 


-- having clause for grouping 
SELECT age , max(followers)
from user
GROUP BY age
having max(followers) >80;

-- UPDATE COMMAND TO USE UPDATE QUERY 
SET SQL_SAFE_UPDATES = 0 ;

UPDATE user
SET followers = 600
WHERE AGE = 18;

--  alter : add column 
ALTER TABLE user
ADD COLUMN city VARCHAR(20) DEFAULT "DELHI";

 -- to insert values into the city column use 
 
UPDATE users SET cities = 'New York' WHERE id = 101;
UPDATE users SET cities = 'Los Angeles' WHERE id = 102;
UPDATE users SET cities = 'Chicago' WHERE id = 103;
UPDATE users SET cities= 'Houston' WHERE id = 104;
UPDATE users SET cities = 'Phoenix' WHERE id = 105;

-- drop column
ALTER TABLE user
drop column city ;


-- rename table
ALTER TABLE USER 
RENAME  TO USERS ;


-- changing column name 
ALTER TABLE users
change COLUMN city  cities VARCHAR(20) ; 

-- modifying column datatype / constraint
ALTER TABLE users 
modify column cities VARCHAR(30) NOT NULL;


SELECT * FROM USERS;


TRUNCATE TABLE POST ;
DROP TABLE POST;
TRUNCATE TABLE USERS;
DROP TABLE USERS;

SELECT * FROM USERS;
