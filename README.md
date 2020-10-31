## Onboarding Survey App
* React Application for Onboarding Survey.
* Frontend in React JS, HTML and CSS3.
* Backend in Node JS, Express and mongoDB.
* Demo for the app: https://codesandbox.io/s/crazy-voice-lh0tk

## Screenshots
<table>
<tr>
<th>Survey Landing Page</th>
<th>Survey Page 1</th>
</tr>
<tr>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/1.png">
</td>
<td>
<img src="https://github.com/hassan-mo/onboarding-v2/blob/master/client/src/screenshots/2.png">
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
* Open visual studio terminal and run the following commands
```
git clone git@github.com:hassan-mo/onboardingapp-v2.git
npm install
npm run dev
```
* React app should start on a new browser tab with the following url: ```http://localhost:3000/```
* You can test the App by clicking on the green button "Take the survey".
* Follow the Applications step by step and choose the answer to the questions.
* If you want to check the console log, click right click on the mouse and click inspect. Once the developer tool is open click on Console.
* Choose the answer to the question and click on the green button "Next question". On the console you will see your chosen option that have been submitted.

### Express Server:
* Express and mongoDB added to the server.js file.
* MongoDB Atlas connected with a database user on the cloud. No need for exporting database.
* Our Rest API is a get request and created for our survey data inside of server.js file.
* Also, implemented a pagination function to sync the data, total number of pages and items limit per page.
* Created a Mongoose schema in datas.js

### Extra information: 
* This command "npm run dev" will run express and react servers one after the other
* Express server default listens on port 3000, I've changed it to port 1000. Because it can conflict with react port which is also 3000
* To see the server response in ```JSON format``` coming from mongoDB visit this url: ```http://localhost:1000/api/surveyoptions?page=1``` you can change the parameter value to page=2, page=3 up to 5.

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
1.``` App.js```: It contains our AppProvider wrapper and three Components and it's Routes: Home, Diet, and DietComplete.

2.``` Nav.js```: This component is the header of the App and it contains the progress bar, survey navigation items and number of questions.

3.``` AppContext.js```: Context API contains our states "count" for counting the number of questions and "percentage" for our progress bar.

4.``` Home.js```: Main Survey App Landing Page and it contains image and content

5.``` Diet.js```: It has a prop called Match and it is passed to each survey page by getting page id.

6.``` DietComplete.js```: It has the content for the final result page.

7.``` Survey.js```: It contains the rest API from Express server fetched with useEffect hook, multiple states, a radio button and form submission.
