# flight-planner

## What was asked

Make an app to create and store flight plans for their drones :

- When loaded, it shows a map + the list of the flight plans already stored (on one side of the page)
- The user will be able to create a flight plan by clicking on the map/image and insert points
- Each point will be joint to the next one inserted with a straight line
- Once all the points are inserted, the user can save the flight plan and load it at any time over the image/map.
- For simplicity, store and read the information directly on the client side
- The functionality needs to be implemented in JavaScript

## Informations

How to start :

- Once the repository is cloned, use `yarn` to install all dependecies
- To lauch the app use `yarn start`
- The app launches on `http://localhost:8080/`

Features implemented :

- insert points/lines by clinking on the map
- create a new flight plan to store
- show a flight plan already stored on the map
- clear the map of lines
- delete a flight plan
- delete all flights plans

Ideas for improvment :

- load other maps
- edit a flight
- registered users to save the flight plans individually and durably
- add information to a flight card
- visualise the line before inserting it (follows the mouse before release)
