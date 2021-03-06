# burger

## Description

This project lets a user enter a burger name they'd like to eat and puts it on the available list.  User is able to devour a burger by clicking it's associated Eat Me button.  At this point the burger is consumed and is moved to the devoured list on the right.    

This project demonstrates a usage of the MVC, ORM and use of handlebars.  Multiple blocks of html code were supplied for different handlebars.   Data passed in to the handlebars displayed burgers in correct column and displayed the Eat Me buttons.  Storage of availabe and devoured burgers was accomplished with a mysql database on the back end.

The application utilized an Express server and was deployed through Heroku.

## Table of Contents

* [Screenshots](#Screenshots)
* [Installation](#Installation)
* [Usage](#Usage)
* [Support](#Support)
* [Technologies](#Technologies)
* [Repository](#Repository)
* [Deployment](#Deployment)

## Screenshots

The following is a screenshot of the Eat-Da-Burger application.

<p align="center">
  <img src="./public/assets/img/burgerMain.png" alt="burger screenshot">
</p>

## Installation

* Install node.js to computer, if not already present.
    * Node.js can be installed from [here](https://nodejs.org/en/)
* Copy all the application files locally to one's machine.
* In a terminal window where you copied the files, install 'mysql', 'express', and 'handlebars' using node package manager (npm)
    * **npm install**

## Usage

This application requires Node.js to be installed.  It also requires the user to have installed 'mysql', 'express' and 'handlebars' via npm.  (See [Installation](#installation) section.)  Once these items have been installed, the user can launch the server back end from a terminal window as follows:

**node server.js**

The user launches the application in browser window URL line as follows:

**localhost:8080**

Alternatively, you can launch the entire deployed application via Heroku as described in the Deployment section of this readme.


## Support

Please email me for further information jtoth7824@gmail.com


## Technologies

<div>Node.js</div>
<div>Express</div>
<div>mySQL</div>
<div>handlebars</div>
<div>Heroku</div>
<div>Javascript</div>
<div>npm</div>
<div>ORM</div>

## Repository

<div>Direct link to repository:  https://github.com/jtoth7824/burger</div>
<div>Updated Portfolio link:  https://jtoth7824.github.io/portfolio/</div>

## Deployment

Direct link to deployed Eat-Da-Burger application on Heroku:   https://morning-island-76519.herokuapp.com/