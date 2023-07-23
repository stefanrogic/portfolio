import teraLogo from "../assets/projects/tera/tera-logo.png";
import teraMain from "../assets/projects/tera/tera-main.png";
import teraProtein from "../assets/projects/tera/tera-protein.png";
import teraCart from "../assets/projects/tera/tera-cart.png";
import teraCartDropdown from "../assets/projects/tera/tera-cart-dropdown.png";

import devJobsLogo from "../assets/projects/devJobs/dev-jobs-logo.png";
import devJobsMain from "../assets/projects/devJobs/devJobsMain.png";
import devJobs from "../assets/projects/devJobs/devJobs.png";
import devJobsSearch from "../assets/projects/devJobs/devJobsSearch.png";
import devJobsNoResult from "../assets/projects/devJobs/devJobsNoResult.png";

import ageDetectiveLogo from "../assets/projects/ageDetective/age-detective-logo.png";
import ageDetectiveResult from "../assets/projects/ageDetective/ageDetectiveResult.png";
import ageDetectiveMain from "../assets/projects/ageDetective/ageDetectiveMain.png";
import ageDetectiveValidation from "../assets/projects/ageDetective/ageDetectiveValidation.png";
import ageDetectiveEmpty from "../assets/projects/ageDetective/ageDetectiveEmpty.png";

import quoteRouletteLogo from "../assets/projects/quoteRoulette/quote-roulette-logo.png";
import quoteRouletteMain from "../assets/projects/quoteRoulette/quoteRouletteMain.png";
import quoteRouletteRandom from "../assets/projects/quoteRoulette/quoteRouletteRandom.png";
import quoteRouletteSearch from "../assets/projects/quoteRoulette/quoteRouletteSearch.png";

export const projects = [
  {
    id: 0,
    name: "Tera Supplements",
    alt: "Supplement Web Store",
    shortDesc:
      "The web store is dedicated to dietary supplements and features an intuitive user interface with product filtering options, allowing customers to find their desired supplements effortlessly. Developed using React, Redux, and Framer Motion. Additionally, It features a fully functional shopping cart with quantity management and a quick add to cart button.",
    background: [
      "The web store is built using React, which allows for the creation of reusable components, ensuring a consistent design and user experience across the site. A responsive and user-friendly layout is designed to cater to customers on various devices, such as desktops, tablets, and smartphones. Clear and intuitive navigation menus are included, making it easy for users to explore different sections of the store.",
      "The store offers a vast selection of dietary supplements, neatly organized into categories for easy browsing. Customers can use advanced filtering options to refine their search, including product type (e.g., vitamins, minerals, protein). Sorting options are available to arrange products by price, volume, and other relevant criteria.",
      'A convenient "Quick Add to Cart" button is available on the product listing and product pages, allowing customers to instantly add items to their shopping cart without navigating away from the current page.',
      "The web store features a fully functional shopping cart, where customers can review the items they've added and make changes to quantities or remove products. Customers can easily adjust the quantity of items they wish to purchase before proceeding to checkout.",
    ],
    img: teraMain,
    demo: "https://tera-supplements.netlify.app/",
    code: "https://github.com/Rasgrin/tera-supplements",
    tags: ["REACT", "REDUX", "SASS", "FRAMER MOTION"],
    logo: { img: teraLogo, name: "tera-logo" },

    static: [
      { img: teraMain, name: "tera-main" },
      { img: teraProtein, name: "tera-protein" },
      { img: teraCartDropdown, name: "tera-cart-dropdown" },
      { img: teraCart, name: "tera-cart" },
    ],
  },
  {
    id: 1,
    name: "Quote Roulette",
    alt: "Random Quote Generator",
    shortDesc:
      "Interactive Random Quote Generator, with the integration of an external API for fetching random quotes. The application allows users to generate a new quote instantly with a simple button press. To enhance the experience further, additional features enable users to explore quotes based on specific tags or authors.",
    background: [
      "The aim of the project is to provide users with a fun and interactive way to discover new quotes from famous people. To develop Quote Roulette, I chose to use React as the frontend library and Sass as the CSS preprocessor. React's component-based architecture allowed me to create reusable UI elements and build a responsive and user-friendly interface for the application. Sass helped me to write modular and maintainable CSS code, ensuring a consistent look and feel across all pages.",
      "In addition to React and Sass, I also used a Public API to retrieve quotes from famous people. The API provides a collection of quotes from a variety of sources, making it possible to display a wide range of quotes by using the fetch() method in JavaScript to make API calls and retrieve the quotes.",
      "The Quote Roulette web application features a simple and intuitive interface that allows users to discover new quotes by clicking a button. Users can also filter quotes based on specific categories, such as success, humor, or wisdom. Random quote from specific author can be generated by clicking on the name or using search to find the author.",
      "Quote Roulette project showcases my skills in developing a fun and interactive web application using popular frontend technologies such as React and Sass. It demonstrates my ability to integrate external APIs, handle data retrieval and display, and provide a seamless user experience application's users. ",
    ],
    img: quoteRouletteRandom,
    demo: "https://quote-roulette.netlify.app",
    code: "https://github.com/Rasgrin/quote-roulette",
    tags: ["REACT", "SASS", "API"],
    logo: { img: quoteRouletteLogo, name: "quote-roulette-logo" },
    mainImg: { img: quoteRouletteMain, name: "quoteRouletteMain" },
    static: [
      { img: quoteRouletteRandom, name: "quoteRouletteRandom" },
      { img: quoteRouletteSearch, name: "quoteRouletteSearch" },
    ],
  },
  {
    id: 2,
    name: "Dev Jobs",
    alt: "Job Board",
    shortDesc: "Fully responsive job board that allows users to easily search and filter job listings. Filtering system enables users to refine job searches based on specific criteria such as job titles, locations, required skills, and more.",
    background: [
      "The application features a user-friendly interface that allows developers to filter job listings based on specific criteria such as job type, location, company, and more. The application also features a responsive design, making it easy to use on a wide range of devices, including desktops, tablets, and smartphones.",
      "I chose React as the frontend library for the project. Reacts component-based architecture allowed me to create reusable UI elements that could be easily maintained and updated. This helped developing the application quickly and efficiently, while ensuring a consistent user interface across all pages.",
      "For navigation I used React Router DOM to define routes for different pages such as the job listing page and job details page. For example, when a user clicks on a job listing, React Router DOM navigates the user to the job details page for that listing.",
      "In addition to React, I also used Sass as a CSS preprocessor for the project. Sass allowed modular and maintainable CSS code by introducing several new features such as variables, nesting, and mixins. This made it easier to style the application and ensure a consistent look and feel across all pages.",
      "Overall, the Dev Jobs web application project demonstrates my skills in developing modern web applications using popular frontend technologies as well as my ability to create responsive and user-friendly interfaces, write maintainable and scalable code, and implement efficient styling using Sass.",
    ],
    img: devJobs,
    demo: "https://dev-jobs-listings.netlify.app/",
    code: "https://github.com/Rasgrin/dev-jobs",
    tags: ["REACT", "SASS"],
    logo: { img: devJobsLogo, name: "dev-jobs-logo" },
    mainImg: { img: devJobsMain, name: "devJobsMain" },
    static: [
      { img: devJobs, name: "devJobs" },
      { img: devJobsSearch, name: "devJobsSearch" },
      { img: devJobsNoResult, name: "devJobsNoResult" },
    ],
  },
  {
    id: 3,
    name: "Age Detective",
    alt: "Age Calculator",
    shortDesc: "Age calculator that accurately determines a person's age in years, months, and days. Features a user-friendly interface that allows users to input their birthdate and calculate their exact age instantly.",
    background: [
      "Age Detective is a age calculator that accurately determines a person's age in years, months, and days. The project aimed to help me practice my React skills while creating a useful tool for users.",
      "The Age Detective project features a user-friendly interface that allows users to input their birthdate and calculate their age instantly. The application uses JavaScript's built-in Date() object to retrieve the current date and calculate the difference between the current date and the user's birthdate. The application then displays the user's age in years, months, and days, making it easy to determine their age accurately.",
      "I chose to use React for this project to practice my skills in creating reusable components and managing application state. The application state is managed using React's useState hook, making it easy to update the UI when the user inputs their birthdate.",
      "As a beginner in React, it is essential to work on projects that are simple yet functional. The Age Detective project was an excellent choice for this, as it allowed me to focus on the basics of React, such as component creation and state management, while providing a tangible result that users can benefit from.",
    ],
    img: ageDetectiveResult,
    demo: "https://agedetective.netlify.app",
    code: "https://github.com/Rasgrin/age-detective",
    tags: ["REACT", "SASS"],
    logo: { img: ageDetectiveLogo, name: "age-detective-logo" },
    mainImg: { img: ageDetectiveMain, name: "ageDetectiveMain" },
    static: [
      { img: ageDetectiveResult, name: "ageDetectiveResult" },
      { img: ageDetectiveValidation, name: "ageDetectiveValidation" },
      { img: ageDetectiveEmpty, name: "ageDetectiveEmpty" },
    ],
  },
];
