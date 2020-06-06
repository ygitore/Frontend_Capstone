# NSS Frontend Capstone - "Review Apartments"
Single page application with full CRUD functionality that allows users to create a profile for apartments they have visited or lived in. Once user is logged-in they can view profile for all apartments, edit and delete apartments they have created. They can also give rating, like, add and view comment(s), add any apartments to their favorites
### Technologies used
* HTML5
* CSS3
* JavaScript
* React for core app functionality
* Reactstrap for buttons and modal
* Jason Server to store data
* Cloudinary to store image
* React-FontAwesome for icons
### Application features
* User can Sign-in using valid user name and password
* User can `CREATE` profile for apartments, and upload apartments image
* User can rate, like, add comments to apartments
* User can `READ` all comments
* User can add apartments to their favorites
* User can view all existing apartments and their reviews
* User can `UPDATE` apartments they have created
* User can `DELETE` apartments they have created
* User can search for specific apartment
## Screenshots
### Login
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/Login.PNG)
### Register
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/register.PNG)
### Home Page
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/_mainView.PNG)
### Create Apartment
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/uploadImage.PNG)
### Newly Created Apartment in Home Page
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/newApartment.PNG)
### Likes
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/Likes.PNG)
### Add Comment
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/AddingComment.PNG)
### View Comments
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/viewComments.PNG)
### Give Rating
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/rating.png)
## Favorited Apartments
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/favoritedApartments.png)
### Apartments I created
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/AptICreated.png)
### Edit My Apartment
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/EditApartment.PNG)
### Search for Apartment
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/searchForApt.PNG)
### Search Result
![Main View](https://raw.githubusercontent.com/yitbarekgitore/Frontend_Capstone/master/src/screenshots/searchResult.png)
### How to run
* Clone down this project and frontendCapstone_api from GitHub to your workspace
* Install http-server from npm in terminal window
* Navigate to root of this project
* Type npm start and hit enter
* In your browser, navigate to https://localhost:3000
* Open new terminal window and navigate to the root of frontendCapstone_api 
* Type json-server -p 8088 -w database.json
