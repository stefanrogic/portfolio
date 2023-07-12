import devJobsMain from "../assets/projects/devJobs/devJobsMain.png";
import devJobs from "../assets/projects/devJobs/devJobs.png";
import devJobsSearch from "../assets/projects/devJobs/devJobsSearch.png";
import devJobsNoResult from "../assets/projects/devJobs/devJobsNoResult.png";

import ageDetectiveResult from "../assets/projects/ageDetective/ageDetectiveResult.png";
import ageDetectiveMain from "../assets/projects/ageDetective/ageDetectiveMain.png";
import ageDetectiveValidation from "../assets/projects/ageDetective/ageDetectiveValidation.png";
import ageDetectiveEmpty from "../assets/projects/ageDetective/ageDetectiveEmpty.png";

import quoteRouletteMain from "../assets/projects/quoteRoulette/quoteRouletteMain.png";
import quoteRouletteRandom from "../assets/projects/quoteRoulette/quoteRouletteRandom.png";
import quoteRouletteSearch from "../assets/projects/quoteRoulette/quoteRouletteSearch.png";

import teraMain from "../assets/projects/tera/teraMain.png";
import teraMainTop from "../assets/projects/tera/teraMainTop.png";
import teraStore from "../assets/projects/tera/teraStore.png";

export const projects = [
  {
    id: 0,
    projectName: "Tera Supplements",
    shortDesc:
      "Incorporating React, Redux, and Framer Motion, built a captivating supplement web store with fully functional features. The site boasts a seamless user experience with a robust shopping cart system, allowing customers to effortlessly add, manage quantities, and proceed to checkout. Additionally, the implementation of user-friendly filtering options empowers users to easily navigate and find specific products based on their preferences.",
    background: [""],
    img: teraMain,
    visit: "https://tera-supplements.netlify.app/",
    code: "https://github.com/Rasgrin/tera-supplements",
    tags: ["REACT", "REDUX", "SASS", "FRAMER MOTION"],
    mainImg: { img: teraMainTop, name: "teraMainTop" },
    static: [
      { img: teraMain, name: "teraMain" },
      { img: teraStore, name: "teraStore" },
    ],
  },
  {
    id: 1,
    projectName: "Dev Jobs",
    shortDesc:
      "Fully responsive job board that allows users to easily search and filter job listings. This project showcases my skills in web development, specifically in creating a responsive and user-friendly interface. It features modern design with light and dark theme, and offers a variety of search and filtering options.",
    background: [
      "The application features a user-friendly interface that allows developers to filter job listings based on specific criteria such as job type, location, company, and more. The application also features a responsive design, making it easy to use on a wide range of devices, including desktops, tablets, and smartphones.",
      "I chose React as the frontend library for the project. Reacts component-based architecture allowed me to create reusable UI elements that could be easily maintained and updated. This helped developing the application quickly and efficiently, while ensuring a consistent user interface across all pages.",
      "For navigation I used React Router DOM to define routes for different pages such as the job listing page and job details page. For example, when a user clicks on a job listing, React Router DOM navigates the user to the job details page for that listing.",
      "In addition to React, I also used Sass as a CSS preprocessor for the project. Sass allowed modular and maintainable CSS code by introducing several new features such as variables, nesting, and mixins. This made it easier to style the application and ensure a consistent look and feel across all pages.",
      "Overall, the Dev Jobs web application project demonstrates my skills in developing modern web applications using popular frontend technologies as well as my ability to create responsive and user-friendly interfaces, write maintainable and scalable code, and implement efficient styling using Sass.",
    ],
    img: devJobs,
    visit: "https://dev-jobs-listings.netlify.app/",
    code: "https://github.com/Rasgrin/dev-jobs",
    tags: ["REACT", "SASS"],

    mainImg: { img: devJobsMain, name: "devJobsMain" },
    static: [
      { img: devJobs, name: "devJobs" },
      { img: devJobsSearch, name: "devJobsSearch" },
      { img: devJobsNoResult, name: "devJobsNoResult" },
    ],
  },
  {
    id: 2,
    projectName: "Quote Roulette",
    shortDesc:
      "Random quote generator that uses a public API to fetch a random quote, which is displayed along with the author's name. With each click, a new quote is generated, offering users an endless supply of inspiration, wisdom, or humor. This project demonstrates my proficiency in working with APIs and integrating them into a functional web application.",
    background: [
      "The aim of the project is to provide users with a fun and interactive way to discover new quotes from famous people. To develop QuoteRoulette, I chose to use React as the frontend library and Sass as the CSS preprocessor. React's component-based architecture allowed me to create reusable UI elements and build a responsive and user-friendly interface for the application. Sass helped me to write modular and maintainable CSS code, ensuring a consistent look and feel across all pages.",
      "In addition to React and Sass, I also used a Public API to retrieve quotes from famous people. The API provides a collection of quotes from a variety of sources, making it possible to display a wide range of quotes by using the fetch() method in JavaScript to make API calls and retrieve the quotes.",
      "The Quote Roulette web application features a simple and intuitive interface that allows users to discover new quotes by clicking a button. Users can also filter quotes based on specific categories, such as success, humor, or wisdom. Random quote from specific author can be generated by clicking on the name or using search to find the author.",
      "Quote Roulette project showcases my skills in developing a fun and interactive web application using popular frontend technologies such as React and Sass. It demonstrates my ability to integrate external APIs, handle data retrieval and display, and provide a seamless user experience application's users. ",
    ],
    img: quoteRouletteRandom,
    visit: "https://quote-roulette.netlify.app",
    code: "https://github.com/Rasgrin/quote-roulette",
    tags: ["REACT", "SASS", "API"],
    mainImg: { img: quoteRouletteMain, name: "quoteRouletteMain" },
    static: [
      { img: quoteRouletteRandom, name: "quoteRouletteRandom" },
      { img: quoteRouletteSearch, name: "quoteRouletteSearch" },
    ],
  },
  {
    id: 3,
    projectName: "Age Detective",
    shortDesc:
      "Age Detective was my first React project. The goal was to create a simple, yet functional age calculator that could accurately determine a person's age in years, months, and days. I chose this project because it offered a great opportunity to practice my React skills while creating a useful tool.",
    background: [
      "Age Detective is a age calculator that accurately determines a person's age in years, months, and days. The project aimed to help me practice my React skills while creating a useful tool for users.",
      "The Age Detective project features a user-friendly interface that allows users to input their birthdate and calculate their age instantly. The application uses JavaScript's built-in Date() object to retrieve the current date and calculate the difference between the current date and the user's birthdate. The application then displays the user's age in years, months, and days, making it easy to determine their age accurately.",
      "I chose to use React for this project to practice my skills in creating reusable components and managing application state. The application state is managed using React's useState hook, making it easy to update the UI when the user inputs their birthdate.",
      "As a beginner in React, it is essential to work on projects that are simple yet functional. The Age Detective project was an excellent choice for this, as it allowed me to focus on the basics of React, such as component creation and state management, while providing a tangible result that users can benefit from.",
    ],
    img: ageDetectiveResult,
    visit: "https://agedetective.netlify.app",
    code: "https://github.com/Rasgrin/age-detective",
    tags: ["REACT", "SASS"],
    mainImg: { img: ageDetectiveMain, name: "ageDetectiveMain" },
    static: [
      { img: ageDetectiveResult, name: "ageDetectiveResult" },
      { img: ageDetectiveValidation, name: "ageDetectiveValidation" },
      { img: ageDetectiveEmpty, name: "ageDetectiveEmpty" },
    ],
  },
];
