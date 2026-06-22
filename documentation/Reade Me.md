##### **Brief.io - Briefs Dashboard**



###### **Overview**



A single page web application built as part of the Brief.io portfolio ecosystem. The briefs dashboard allows agency admins to view their briefs that are available within the Sass product. It also allows them to submit new briefs also.



The rendered view is currently simplified for 1st iteration purposes and does not display the full functionality as it is simply the inital iteration. However, within the codebase all requirements have been satisfied with everything being fully functional.



✅ Three data files (briefs, contacts, team)

✅ Three route files with full CRUD (briefs, contacts, team)

✅ Three middleware files (logger, validator, error handler)

✅ Query parameter filtering on all three routes

✅ Error-handling Middleware

✅ Reasonable data structuring

✅ Chained Routes: GET Routes To Return All Briefs, Contacts, \& Team Data \& POST Routes For All Briefs, Contacts, \& Team Data.

✅ Chained Routes: GET Route To Return One Brief By Id | PATCH Route To Update A Brief By Id | DELETE Route To Delete A Brief By Id (Same for contacts and teams routes

✅Template engine rendering a view

✅ Include a form within the rendered view

✅ CSS styling

✅ HTML form interacting with the API

✅Tested and working in Thunderclient

✅ + All other requirements!



###### **Testing**



**Terminal Output From API Testing**



Server listening on port: 3000.



\----- 9:11:02 PM: Received a GET request to /api/contacts.

\----- 9:12:20 PM: Received a GET request to /api/briefs.

\----- 9:13:07 PM: Received a GET request to /api/contacts.

\----- 9:13:36 PM: Received a GET request to /api/team.

\----- 9:14:13 PM: Received a GET request to /api/briefs/1.

\----- 9:15:08 PM: Received a GET request to /api/briefs.



Containing the data:

{"projectName":"Test Brief","projectType":"Social Campaign","timeline":"3 months","targetAudience":"Test audience","status":"Active"}

\----- 9:17:04 PM: Received a GET request to /api/briefs.

Containing the data:

{"projectName":"Test Brief","projectType":"Social Campaign","timeline":"3 months","targetAudience":"Test audience","status":"Active"}

\----- 9:23:03 PM: Received a GET request to /api/briefs.

Containing the data:

{"projectName":"Test Brief","projectType":"Social Campaign","timeline":"3 months","targetAudience":"Test audience","status":"Active"}

\----- 9:23:16 PM: Received a POST request to /api/briefs.

Containing the data:

{"projectName":"Test Brief","projectType":"Social Campaign","timeline":"3 months","targetAudience":"Test audience","status":"Active"}



**Terminal Output From Query Parameter Filtering**



**Server listening on port: 3000.**



\----- 11:01:33 PM: Received a GET request to /api/briefs?status=Completed.

\----- 11:03:28 PM: Received a GET request to /api/briefs.

\----- 11:04:19 PM: Received a GET request to /api/briefs?status=Active.

\----- 11:04:36 PM: Received a GET request to /api/briefs?status=Completed.



**Testing From Rendered View**



**Browser**



{"id":4,"projectName":"Test Brief Submission From Rendered View","projectType":"Test Project Type","timeline":"Test Timeline","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","status":"Cancelled"}



{"id":6,"projectName":"Test 2","projectType":"Test","timeline":"Test","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","status":"Not Started"}



**Terminal**

Server listening on port: 3000.



\----- 8:35:52 PM: Received a POST request to /api/briefs.

Containing the data:

{"projectName":"Test Brief Submission From Rendered View","projectType":"Test Project Type","timeline":"Test Timeline","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","status":"Cancelled"}

\----- 8:35:52 PM: Received a GET request to /api/briefs.js.



{"projectName":"Test 1","projectType":"Test","timeline":"Test","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","status":"Not Started"}

\----- 8:47:46 PM: Received a POST request to /api/briefs.

Containing the data:

{"projectName":"Test 1","projectType":"Test","timeline":"Test","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","status":"Not Started"}

\----- 8:48:03 PM: Received a POST request to /api/briefs.

Containing the data:

{"projectName":"Test 2","projectType":"Test","timeline":"Test","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","status":"Not Started"}



###### 

###### **Assignment Overview**



###### **Introduction**



This assessment measures your understanding of Node and Express and your capability to implement their features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.



This assessment has a total duration of three (3) days. This is a take-home assessment.



You have three total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the third day after it is assigned. Your instructor will provide you with at least four hours of class time to work on the assessment; during which time, you may discuss details of the project with your instructor, including the topic, scope, and implementation.



###### **Objectives**



* Create a server application with Node and Express.
* Create a RESTful API using Express.
* Create Express middleware.
* Use Express middleware.
* Use a template engine to render views with Express.
* Interact with a self-made API through HTML forms.

