# Assignment 3 - Creating a Client-Server Web App
Due Sa 4-11 at 11:59pm. Late submission policy: 10 points off if submitted by M 4-13 at noon. This assignment is 
to be done in the same teams of two as in the previous assignments.

### Enter both of your names below. If we cannot figure out who did the assignment, we cannot grade it!

### Name:  
  
### Name:

## Assignment Details
* Use Webstorm to clone this repository on your computer.
    * Close any currently open projects.
    * Click on `Get from VCS` and enter the URL of your GitHub assignment3 repo
    * Select the directory for the repository
* When you have completed the assignment, make sure to push your repository to your assignment3 GitHub repository by the deadline.
  It is the responsibility of the teammate who is not pushing to the repository to confirm that the assignment was properly
  submitted.

In this assignment, you will create a simple full-stack web application using React and Express.  
A client folder and a server folder have been created for you. In the client folder, 
create the default starter Vite React.js project in Webstorm with Typescript enabled:  
Webstorm -> New Project -> Vite -> Template: react -> check Use TypeScript Template

In the server folder, create an empty project:  
Webstorm -> File -> New Project -> Empty Project  

Create a new `package.json` file:  
Webstorm -> New -> package.json.  
Edit the file by changing `index.js` to `server.ts`. Create a `server.ts` file for your server code.

Install Express and Typescript by running the following commands at the terminal
``` 
npm install -D express cors
npm install -D @types/express @types/cors
npm install -D nodemon
npm install -D typescript
npm install -D @types/typescript

Note: you may use either CORS or a proxy server setting while you are developing the code and 
running two servers (Vite, and Express).  
```  
  
Change the styling for the form by selecting a font and new background and text colors.
Use plain CSS to determine the styles for your pages.

Data will be stored in the Express server in an array of objects (computer memory) instead of 
being persistent and stored in database. Use React (create this in the client folder) to create
a work request form that contains the following fields:
1. Name of the person making the request
2. Position required - claims adjusters, insurance agents, or underwriters
3. Name of the person satisfying the position required
4. Forms Processing - property loss, auto loss, or medical claim
4. Department - this is the department to be charged
5. Location - onsite, remote, or hybrid

1. The form contains two buttons, a Submit button and a Display List button
2. When the Submit button is pressed,
    1. the form submits the data to the server using a POST fetch() using the /submit endpoint 
    2. The submitted data is stored on the server.
3. When the Display List button is pressed,
    1. the form sends a GET fetch() request using the /lists endpoint
    2. a list of all submitted requests is displayed one line per request on a separate page

The Express server runs on port 3000 and has the following endpoints:
1.	/submit which receives the data from the form and stores it
2.	/lists which sends back an array of the data from all form submissions

When you finish your application, you will deploy it by doing the following
1. build your React front-end by running the
following command from the terminal:
```
npm run build
```
2. Copy the contents of the generated dist folder to `server/public`
3. Add the following line to server.js to serve your static files, particularly index.html
```
app.use(express.static('public'))
```
---
You and your teammate will want to review the team coaching session on F 4-4.
The starter GitHub repo and Jose Perez's video are posted there.

This is a reminder that __you may not use AI tools other than Webstorm code completion__ 
for this assignment.




