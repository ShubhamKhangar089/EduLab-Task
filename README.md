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

## admin  { 
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

## testData :
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
##
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
    "title": "Test Task 2",
    "description": "This is a test task",
    "priority": "high",
    "status": "open",
    "_id": "66c8c93f0665adb5cbbebed2",
    "createdAt": "2024-08-23T17:39:11.115Z",
    "updatedAt": "2024-08-23T17:39:11.115Z",
    "__v": 0
  }
}
##

## updateTaskByTaskId :- http://localhost:8080/api/v1/task/update/66c8ccd40f5339b9ef3da0eb
##
  body :- {
     "title": "Test Task 2",
    "description": "This is a test task",
    "priority": "high",
    "status": "in-progress",
  }
##
## getByTaskId api :- http://localhost:8080/api/v1/task/get/66c8ccd40f5339b9ef3da0eb
## getFilteredTask api: - http://localhost:8080/api/v1/task/get/?priority=high&status=open


## Only-Admin-Delete-RoleBased Auth Check :-
## login with admin credential :- Provided above please check
## api :- http://localhost:8080/api/v1/task/delete/66c8ccd40f5339b9ef3da0eb
