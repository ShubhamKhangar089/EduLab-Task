### Backend Setup For Task Managment System
## register-user
## api :- http://localhost:8080/api/v1/user/register

## register-body : 
## user
 {
 "username": "user",
 "email": "user@gmail.com",
 "password" : "12345"
  }

## admin  
{ 
  "username" : "admin",
  "email" : "admin@gmail.com",
  "password" : "12345",
  "role" : "Admin"
  }

## user-register-response 
{
  "message": "User Register Successfully",
  "user": {
    "username": "user",
    "email": "user@gmail.com",
    "password": "$2a$10$2hz6geZ30rxIpwGgvRsNf.B4h7I.0uD02eD3rYI0bGgcb5fBDl6ZG",
    "role": "User",
    "_id": "66c8c63ed313d18bce571554"
  }
}
##

## login-user
## api :- http://localhost:8080/api/v1/user/login

## body :
## user        
 {
 "email": "user@gmail.com",
  "password" : "12345"
 }
##
 ## admin
 {
 "email": "admin@gmail.com",
  "password" : "12345"
 }
 ##


## Role Based Auth :- api's 
## User && Admin Can Access :-

## create-new-task  api :- http://localhost:8080/api/v1/task/add
## Post-request
body :-
##
{ 
 "title": "Test Task 2",
 "description": "This is a test task",
 "priority": "high",
 "status": "open"
}
##
response :-
##
{
  "message": "Task created successfully",
  "task": {
    "title": "admin created Task",
    "description": "This is a admin created test task",
    "priority": "high",
    "status": "open",
    "assignedTo": "66c8cfce0120fb9d2e44ecea",
    "_id": "66c8d59b233f8bf670287570",
  }
}
##

## updateTaskByTaskId :- http://localhost:8080/api/v1/task/update/66c8ccd40f5339b9ef3da0eb
## Patch-Request
  body :- {
     "title": "Test Task 2",
    "description": "This is a test task",
    "priority": "high",
    "status": "in-progress",
  }
  
## Get-Requests :-

## getByTaskId api :- http://localhost:8080/api/v1/task/get/66c8ccd40f5339b9ef3da0eb
## getFilteredTask api: - http://localhost:8080/api/v1/task/get/?priority=high&status=open

## Only-Admin-Delete-RoleBased Auth Check :-
login with admin credential :- Provided above please check
## Delete-Request
## api :- http://localhost:8080/api/v1/task/delete/66c8ccd40f5339b9ef3da0eb
