-- Simple Database Querying

SELECT u.ID , u.UserName, p.UserName AS ParentUserName from USER u 
LEFT JOIN USER p ON u.Parent = p.ID 
ORDER BY u.ID 