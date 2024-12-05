# Student Report Generation

This project enables the generation and management of student progress reports. It allows you to create and manage students, subjects, marks, and generate detailed report cards through a simple API. The system supports functionalities for adding, updating, and deleting student and subject data, as well as managing subject marks.


 # URL : https://progress-card.onrender.com/

## Features
- **Create Student**: Add a new student to the system.
- **Update Student**: Modify student information.
- **Delete Student**: Remove a student from the system.
- **Create Subject**: Add a new subject.
- **Update Subject**: Modify subject details.
- **Delete Subject**: Remove a subject.
- **Create Marks**: Assign marks to a student for a particular subject.
- **Generate Report Card**: Automatically generate a student’s progress report card based on their marks.

## API Endpoints
## Primary Endpoint - Report Card Generation
## GET - https://progress-card.onrender.com/api/marks/generateReport/:id - Generate Report Card  **(id-Student Id)** <br/>
GET - https://progress-card.onrender.com/ - To start the server <br/>
POST - https://progress-card.onrender.com/api/student/create/ - Create a Student <br/>
GET - https://progress-card.onrender.com/api/student/getOneStudent/:id - Particular Student **(id-Student Id)** <br/>
GET - https://progress-card.onrender.com/api/student/getStudent - All Students <br/>
PUT - https://progress-card.onrender.com/api/student/updateStudent/:id - Update a student **(id-Student Id)** <br/>
DELETE - https://progress-card.onrender.com/api/student/deleteStudent/:id - Delete Student **(id-Student Id)** <br/>
POST - https://progress-card.onrender.com/api/subject/create - Create Subject <br/>
GET - https://progress-card.onrender.com/api/subject/getSubject - All Subjects <br/>
GET - https://progress-card.onrender.com/api/subject/getOneSubject/:id -  Particular Subject **(id-Subject Id)** <br/>
PUT - https://progress-card.onrender.com/api/subject/updateSubject/:id - Update a Subject **(id-Subject Id)** <br/>
DELETE - https://progress-card.onrender.com/api/subject/deleteSubject/:id - Delete Subject **(id-Subject Id)** <br/>
POST - https://progress-card.onrender.com/api/marks/create - Create Subject mark for student <br/>
GET -https://progress-card.onrender.com/api/marks/getMarks/ - Getting all marks for all subjects <br/>
PUT - https://progress-card.onrender.com/api/marks/updateMarks/:id -  Updating a mark **(Id -Mark Id)** <br/> 
DELETE - https://progress-card.onrender.com/api/marks/deleteMark/:id - Delete Mark **(Id -Mark Id)** <br/>

## For more details,Visit my [Postman Docs](https://documenter.getpostman.com/view/26860332/2sAYBbd8kz)

 ## Note: Since I'm deployed the apis in render's free tier, The initial request is taking time, Please wait little longer for initial request
﻿
