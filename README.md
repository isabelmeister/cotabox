# Welcome to my code of the Cotabox Challenge (FullStack Development)

## How to setup

**1 step:**
> **In your Terminal clone the repository with the follow command:**
 * git clone https://github.com/isabelmeister/cotabox.git
  
**2 step:**
> **Enter in the front-end folder**:
  * cd front-end
  > **And do the follow command:**
  * npm install
    
**3 step:**
> **Enter in the back-end folder**:
  * cd back-end
  > **And do the follow command:**
  * npm install
  
**4 step:**
> **If you already have a database on MongoDB called "Data" you can switch the name on the follow way:**
  * back-end/model/connection.js -> Change the value of the _constant DB_NAME_ at the 3rd line .
  * **Do not change any other line or code**

**5 step:**
> **Check if your MongoDB server is active using the follow command:**
* _sudo service mongod status_
> **In case the server is not active do the follow command to activate it:**
* _sudo service mongod start_

## How to start

**1 step:**
> **In the Terminal, open two tabs, one for the front-end command and one for the back-end command.
On each you should be at the respective folder**
  
**2 step:**
> **In the back-end tab, write the follow command:**
* npm run dev
> **Then your back-end is running.**
  
**3 step**
> **In the front-end tab, write the follow command:**
* npm start

## How to run the tests

**1 step:**
> **In the terminal back-end folder, make sure you are running the server with the follow command:**
* npm run dev
> **At the same time, but in another tab, do the follow command to initiate the tests:**
* npm test

**2 step:**
> **In the terminal front-end folder, do the follow command to initiate the tests:**
* npm test
  
## I believe that is all the steps you need to do to appreciate my code and interface.

## Future improvements:
- Deploy back and front-end on Heroku
- Make some improvements about the front-end tests

### For more **informations** or **feedbacks** please **contact me by email: _beelsdelonge@gmail.com_**
