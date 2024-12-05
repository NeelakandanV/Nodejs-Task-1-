# Student Report Generation

This project enables the generation and management of student progress reports. It allows you to create and manage students, subjects, marks, and generate detailed report cards through a simple API. The system supports functionalities for adding, updating, and deleting student and subject data, as well as managing subject marks.


### Server URL
- **Base URL**: `https://progress-card.onrender.com/`

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
## GET - https://progress-card.onrender.com/api/marks/generateReport/:id - Generate Report Card ** Student Id**
### GET - https://progress-card.onrender.com/ - To start the server
﻿### POST - https://progress-card.onrender.com/api/student/create/ - Create a Student
﻿### GET - https://progress-card.onrender.com/api/student/getOneStudent/:id - Particular Student **Student Id**
﻿### GET - https://progress-card.onrender.com/api/student/getStudent - All Students
﻿### PUT - https://progress-card.onrender.com/api/student/updateStudent/:id - Update a student **Student Id**
﻿### DELETE - https://progress-card.onrender.com/api/student/deleteStudent/6751ff80e3575f60b8f67ba5 - Delete Student **Student Id**
﻿### POST - https://progress-card.onrender.com/api/subject/create - Create Subject
﻿### GET - https://progress-card.onrender.com/api/subject/getSubject - All Subjects
﻿### GET - https://progress-card.onrender.com/api/subject/getOneSubject/:id -  Particular Subject **Subject Id**
﻿### PUT - https://progress-card.onrender.com/api/subject/updateSubject/:id - Update a Subject **Subject Id**
### DELETE - https://progress-card.onrender.com/api/subject/deleteSubject/:id - Delete Subject **Subject Id**
﻿### POST - https://progress-card.onrender.com/api/marks/create - Create Subject mark for student
﻿### GET -https://progress-card.onrender.com/api/marks/getMarks/ - Getting all marks for all subjects
﻿### PUT - https://progress-card.onrender.com/api/marks/updateMarks/:id -  Updating a mark **Mark Id**
﻿### DELETE - https://progress-card.onrender.com/api/marks/deleteMark/:id - Delete Mark **Mark Id**

## For more details,Visit my ["https://documenter.getpostman.com/view/26860332/2sAYBbd8kz"](Postman Docs)

 ## Note: Since I'm deployed the apis in render's free tier, The initial request is taking time, Please wait little longer for initial request
﻿
