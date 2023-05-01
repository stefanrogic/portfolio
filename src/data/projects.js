import devJobsLight from "../assets/projects/devJobs/devJobsLight.png";
import ageDetectiveResult from "../assets/projects/ageDetective/ageDetectiveResult.png";
import quoteRouletteRandom from "../assets/projects/quoteRoulette/quoteRouletteRandom.png";

export const projects = [
  {
    id: 0,
    projectName: "devJobs",
    shortDesc:
      "Fully responsive job board that allows users to easily search and filter job listings. This project showcases my skills in web development, specifically in creating a responsive and user-friendly interface. It features modern design with light and dark theme, and offers a variety of search and filtering options.",
    img: devJobsLight,
    visit: "https://dev-jobs-listings.netlify.app/",
    code: "https://github.com/Rasgrin/dev-jobs",
  },
  {
    id: 1,
    projectName: "Quote Roulette",
    shortDesc:
      "Random quote generator that uses a public API to fetch a random quote, which is displayed along with the author's name. With each click, a new quote is generated, offering users an endless supply of inspiration, wisdom, or humor. This project demonstrates my proficiency in working with APIs and integrating them into a functional web application.",
    img: quoteRouletteRandom,
    visit: "https://quote-roulette.netlify.app",
    code: "https://github.com/Rasgrin/quote-roulette",
  },
  {
    id: 2,
    projectName: "Age Detective",
    shortDesc:
      "Age Detective was my first React project. The goal was to create a simple, yet functional age calculator that could accurately determine a person's age in years, months, and days. I chose this project because it offered a great opportunity to practice my React skills while creating a useful tool  ",
    img: ageDetectiveResult,
    visit: "https://agedetective.netlify.app",
    code: "https://github.com/Rasgrin/age-detective",
  },
];
