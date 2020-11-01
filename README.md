## Onboarding Survey App
* Full Stack React Application For Onboarding Survey.
* Frontend in React JS, HTML and CSS3.
* Backend in Node JS, Express and mongoDB Atlas.

## Screenshots
<table>
<tr>
<th>Survey Landing Page</th>
<th>Survey Page 1</th>
</tr>
<tr>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/1.png" width="400" height="auto">
</td>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/2.png" width="400" height="auto">
</td>
</tr>
<tr>
<th>Page 1 with option selected</th>
<th>Page 2</th>
</tr>
<tr>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/3.png"
</td>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/4.png">
</td>
</tr>
<tr>
<th>Page 3</th>
<th>Page 4</th>
</tr>
<tr>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/5.png">
</td>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/6.png">
</td>
</tr>
<tr>
<th>Page 5</th>
<th>Result Page</th>
</tr>
<tr>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/7.png">
</td>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/8.png">
</td>
</tr>
<table>
  
## Requirements for the App:
1. Download Node JS from https://nodejs.org/en/download/
* Select the package depending on your operating system Windows or macOS or Linux.
* Click save on your desktop. 
* After the downloading is complete, double click on the application to install Node JS on your machine.
* Follow the installation steps as normal. Now you have Node JS installed on your machine.
2. Download Visual Studio from https://visualstudio.microsoft.com/downloads/
3. Downlaod Google chrome browser or use your favourite web browser.
* Follow the same installation steps above to complete the installation.

## How to use/test the App:
#### Open visual studio terminal and run the following commands
```
# Clone repository from GitHub
git clone git@github.com:hassan-mo/onboarding-v2.git

# then
cd onboarding-v2

# Install dependencies for express server
npm install

# Install dependencies for client
cd client && npm install

# Run the client and the server with concurrently
cd ..
npm run dev


# Server runs on http://localhost:1000/ 
# Client runs on http://localhost:3000/
```
* React app should start on a new browser tab with the following url: ```http://localhost:3000/```
* You can test the App by clicking on the green button "Take the survey".
* Follow the Application step by step and choose the answer to the questions and click on the green button "Next question". 
* It is required to select an option before clicking on the "Next question" button.

### Express Server:
* Express and mongoDB Atlas added to the server.js file.
* MongoDB Atlas connected with a database user on the cloud. No need for exporting database.
* Our Rest API is a get request and created for our survey data inside of server.js file.
* Also, I have implemented a pagination function to sync the data, total number of pages and items limit per page.
* Created a Mongoose schema in datas.js

### Extra Information: 
* The command "npm run dev" will run both servers express and react one after the other.
* Express server default listens on port 3000, I've changed it to port 1000. Because it can conflict with react port which is also 3000.
* You can take a look at the server response in ```JSON format``` visit this url: ```http://localhost:1000/api/surveyoptions?page=1``` you can change the parameter value to ```page=2, page=3 up to 5```.

### NPM Packages and Modules Installed:
Client Side
```
npm install react-router-dom
```
Server Side
```
npm install mongoose
npm install express
npm install -g concurrently
npm install -g nodemon
```
### I've created 7 components for this App:
1.``` App.js```: It contains our AppProvider, three Components and it's Routes: Home, Diet, and DietComplete.

2.``` Nav.js```: Nav component is the header of the App, it contains our survey menu items, progress bar and number of questions.

3.``` AppContext.js```: Context API contains our initial state for "count" and "percentage" variables. The counter will update our state and save it in a local storage, if we refresh the brower our state stay the same.

4.``` Home.js```: Main Landing Page and it contains image and content.

5.``` Survey.js```: It contains the rest API from Express server fetched with our useEffect hook, multiple states and a form with our radio button and submit button.

6.``` Diet.js```: It contains a prop called Match, this prop is passed into every route that is rendered from survey component. Which holds the key and the actual value in the URL.

7.``` DietComplete.js```: It has the content for the final result page.
