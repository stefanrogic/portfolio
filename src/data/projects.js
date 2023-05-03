import devJobsMain from "../assets/projects/devJobs/devJobsMain.png";
import devJobs from "../assets/projects/devJobs/devJobs.png";
import devJobsSearch from "../assets/projects/devJobs/devJobsSearch.png";
import devJobsNoResult from "../assets/projects/devJobs/devJobsNoResult.png";

import ageDetectiveResult from "../assets/projects/ageDetective/ageDetectiveResult.png";
import quoteRouletteRandom from "../assets/projects/quoteRoulette/quoteRouletteRandom.png";

export const projects = [
  {
    id: 0,
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
    tags: ["HTML", "SASS", "REACT"],
    mainImg: { img: devJobsMain, name: "devJobsMain" },
    static: [
      { img: devJobs, name: "devJobs" },
      { img: devJobsSearch, name: "devJobsSearch" },
      { img: devJobsNoResult, name: "devJobsNoResult" },
    ],
  },
  {
    id: 1,
    projectName: "Quote Roulette",
    shortDesc:
      "Random quote generator that uses a public API to fetch a random quote, which is displayed along with the author's name. With each click, a new quote is generated, offering users an endless supply of inspiration, wisdom, or humor. This project demonstrates my proficiency in working with APIs and integrating them into a functional web application.",
    background: [``],
    img: quoteRouletteRandom,
    visit: "https://quote-roulette.netlify.app",
    code: "https://github.com/Rasgrin/quote-roulette",
    tags: ["HTML", "SASS", "REACT", "API"],
    mainImg: { img: devJobsMain, name: "devJobsMain" },
    static: [{ img: "", name: "" }],
  },
  {
    id: 2,
    projectName: "Age Detective",
    shortDesc:
      "Age Detective was my first React project. The goal was to create a simple, yet functional age calculator that could accurately determine a person's age in years, months, and days. I chose this project because it offered a great opportunity to practice my React skills while creating a useful tool  ",
    background: [``],
    img: ageDetectiveResult,
    visit: "https://agedetective.netlify.app",
    code: "https://github.com/Rasgrin/age-detective",
    tags: ["HTML", "SASS", "REACT"],
    mainImg: { img: devJobsMain, name: "devJobsMain" },
    static: [{ img: "", name: "" }],
  },
];
