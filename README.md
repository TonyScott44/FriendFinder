# Friend Finder
Node &amp; Express Servers: Friend Finder 

https://infinite-headland-53237.herokuapp.com/ 
https://infinite-headland-53237.herokuapp.com/api/friends

This app is a survey that consists of 10 questions. Each answer is rated on a scale of 1 to 5, based on how much the user agrees or disagrees with a question.

Express routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.


The apiRoutes.js file contains two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. 

This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
Each of these objects should roughly follow the format below.

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}


