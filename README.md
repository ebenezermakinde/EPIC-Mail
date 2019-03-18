# :star: EPIC-M@il :e-mail: :postbox:
[![Build Status](https://travis-ci.com/ebenezermakinde/EPIC-Mail.svg?branch=develop)](https://travis-ci.com/ebenezermakinde/EPIC-Mail)
[![Maintainability](https://api.codeclimate.com/v1/badges/aa33b93685257e38c4c0/maintainability)](https://codeclimate.com/github/ebenezermakinde/EPIC-Mail/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/ebenezermakinde/EPIC-Mail/badge.svg?branch=develop)](https://coveralls.io/github/ebenezermakinde/EPIC-Mail?branch=develop)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Overview
The internet is increasingly becoming an integral part of lives. Ever since the invention of electronic mail by Ray Tomlinson , emails have grown to become the primary medium of exchanging information over the internet between two or more people, until the advent of Instant Messaging (IM) Apps.

As EPIC Andelans who work towards advancing human potential and giving back to the society, we wish to empower others by building a web app that helps people exchange messages/information over the internet.

### Required Features
1. Users can sign up.
2. Users can login.
3. Users can create groups.
4. Users can send a message to individuals.
5. Users can view their inbox and read messages.
6. Users can retract sent messages.
7. Users can save an email as draft and send it later or delete it.

### Optional Features
1. User can reset password.
2. Integrate Twilio and deliver messages via SMS.
3. Users can upload a profile photo.

### UI Templates
The UI templates can be found here [EPIC M@il](https://ebenezermakinde.github.io/EPIC-Mail/UI)


### Pivotal Tracker

Project is currently being managed with Pivotal Tracker, a project management tool. You can find the stories on the [EPIC M@il Pivotal Tracker Board](https://www.pivotaltracker.com/n/projects/2314369)

### Installation
* filepath> git clone https://github.com/ebenezermakinde/EPIC-Mail.git
* create database with postgres named `epic_db`
* run `npm i`
* run `npm run migrate`
* run `npm start`

### API Endpoints.
##### Base URL 
The project base url can be visited on clicking the link [Heroku](https://epic-mail-myapp.herokuapp.com/)

S/N | Verb   | Endpoint                 | Description             |
---:| -------|--------------------------|-------------------------|
  1 | Post   | /api/v1/auth/signup      | Create a user account   |
  2 | Post   | /api/v1/auth/login       | Sign in a user          |
  3 | Get    | /api/v1/messages         | Get all received emails |
  4 | Get    | /api/v1/messages/unread  | Get all unread emails   |
  5 | Get    | /api/v1/messages/sent    | Get all emails sent     |
  6 | Get    | /api/v1/messages/id      | Get a specific email    |
  7 | Post   | /api/v1/messages         | Send email to users     |
  8 | Delete | /api/v1/messages/id      | Delete an email         |

### API Documentation :file_folder: :point_left:
The API documentation page can be found here [EPIC-M@il](https://myepicmail.docs.apiary.io/)


### Author
Ebenezer Makinde

### Acknowledgements
* Andela