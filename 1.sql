-- Simple Database Querying

SELECT u.ID , u.UserName, p.UserName AS parent_name from USER c 
LEFT JOIN USER p ON u.Parent = p.ID 
ORDER BY u.ID 