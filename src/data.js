import recipe from './images/recipe.png'
import beatles from './images/beatles.png'
import color from './images/color.png'
import roofstore from './images/roofstore.png'
import yelpcamp from './images/yelpcamp.png'
let projects = [
    {
        id: 5,
        image: roofstore,
        name: "Roof Store ",
        url: "https://danilomera-roofstore.netlify.app/",
        github: "https://github.com/realdanilo/roofstore",
        description: "From design to live site, using static technology",
        stack: ["HTML", "CSS", "Javascript"],
        main: ["Mobile CSS", "Flexbox/Grid system"]
    },
    {
        id: 3,
        image: beatles,
        name: "Beatles",
        url: "https://danilomera-beatles.netlify.app/",
        github: "",
        description: "Mobile first Beatles static website. I added some widgets such as Spotify, Graph, and Concert feedback",
        stack: ["HTML", "CSS", "Javascript"],
        main: ["DOM manipulation", "CSS queries", "API"]
    },
    {
        id: 1,
        image: yelpcamp,
        name: "Social Media",
        url: "https://danilocamp.herokuapp.com/",
        github: "https://github.com/realdanilo/yelpcamp",
        description: "I advance my bootcamp project and included extra features that optimizes the website, makes more dynamic, and relates to a real world app. For example you can upload images, create and login a user, admin access, set a map location, and reference likes between posts.",
        stack: ["Node", "Express", "Mongo DB", "Bootstrap", "Passport", "Cloudinary"],
        main: ["REST", "Authentication", "Admin settings", "Cascade Delete", "Geomaping", "API"]

    },


    {
        id: 4,
        image: recipe,
        name: "Recipe App",
        url: "https://danilomera-recipe.netlify.app/",
        github: "https://github.com/realdanilo/recipeapp",
        description: "Use of modern React, routing, and context to build an amazing recipe app. Super optimized!",
        stack: ["React", "Hooks"],
        main: ["useReducer", "useContext", "customHooks", "Local Storage"]

    },
    {
        id: 2,
        image: color,
        name: "Color",
        url: "https://danilomera-colorapp.netlify.app/",
        github: "https://github.com/realdanilo/colorapp",
        description: "Bootcamp project for React. Here I learned to use OOP with modern technology, learned development life cycle methods, and use of MaterialUI components",
        stack: ["React", "Material UI", "NPM modules"],
        main: ["OOP", "Routing", "Optimization/Memoization", "Life Cycle", "withStyles"]
    },

]
export default projects