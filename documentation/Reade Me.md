##### **Brief.io - Briefs Dashboard**



###### **Description**



A Node.js and Express server application built as part of the Brief.io portfolio ecosystem. The server powers the Briefs Dashboard, a rendered view that allows agency admins to view and submit campaign briefs.



* Custom Middleware (2): Logger middleware logs all incoming requests. Validator middleware checks Content-Type on POST/PATCH
* Error Handling Middleware: returns appropriate status codes and JSON error messages.
* Three data categories: briefs, contacts, team.
* Data Structuring: data categories use consistent key/value structures with unique IDs.
* GET Routes: Implemented for all three data categories (all records and by ID).
* POST Routes: Implemented for all three data categories.
* PATCH Routes: Implemented for all three data categories.
* DELETE Routes: Implemented for all three data categories.
* Query Parameters:  Status filtering implemented on all three GET all routes.
* Route Parameters: All three route files use /:id for single data objects.
* Template Engine: EJS used to render the Briefs Dashboard view.
* CSS Styling: Brief.io brand styling applied.
* HTML Form: Brief Submission form on the dashboard.



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

