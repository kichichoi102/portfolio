import { ChapterEnum } from '../components/Overlay/Chapter';

export const favoriteThings = ['🧑‍💻 Coding', '🧑‍🏫 Learning new things', '📦 Delivering good products', '🐈‍⬛ Last AND most importantly, cats!'];

export const sectionData = {
  [ChapterEnum.PROJECTS]: [
    {
      title: 'SlüchAI',
      imageSrc: 'images/sluchai.png',
      bubbles: [
        { type: 'framework', text: 'React.js' },
        { type: 'language', text: 'Javascript' },
        { type: 'library', text: 'tensorflow.js' },
        { type: 'library', text: 'ml5.js' },
        { type: 'tool', text: 'GCP' },
        { type: 'database', text: 'MongoDB' },
      ],
      description:
        "SlüchAI is a neural network trained to identify users' slouching postures. After a prolonged period of slouching, it alerts the user about their sitting posture to avoid risk of back and neck pain.",
      award: '2022 Winner of ToHacks best use of Google Cloud!',
      githubUrl: 'https://github.com/kichichoi102/pose-classification',
      tryUrl: 'https://devpost.com/software/slouchanalytics',
    },
    {
      title: 'Developer Portfolio 2023',
      imageSrc: 'images/portfolio.png',
      bubbles: [
        { type: 'framework', text: 'Vite/React.js' },
        { type: 'framework', text: 'Tailwind CSS' },
        { type: 'language', text: 'Javascript' },
        { type: 'library', text: 'three.js' },
        { type: 'library', text: 'react-three/fiber.js' },
        { type: 'library', text: 'react-three/drei.js' },
        { type: 'tool', text: 'GSAP' },
      ],
      description:
        'My Three Dimensional portfolio to showcase my projects and experiences! I wanted to create a unique portfolio that would stand out from the rest. I also wanted to learn Three.js and how I could implement it in React!',
      award: "You're Currently here!",
      githubUrl: 'https://github.com/kichichoi102/portfolio',
      tryUrl: 'https://daniel-choi.vercel.app/',
    },
    {
      title: 'Flight Deals Tracker',
      imageSrc: 'images/tequila_logo.png',
      bubbles: [
        { type: 'framework', text: 'React.js' },
        { type: 'framework', text: 'Django' },
        { type: 'language', text: 'Javascript' },
        { type: 'language', text: 'Python3' },
        { type: 'library', text: 'Twilio API' },
        { type: 'library', text: 'Tequila API' },
        { type: 'database', text: 'PostgreSQL' },
      ],
      description:
        'Leverages Tequila Search API to search for cheap flights to chosen destinations! When the user chooses their preferred destination cities and their starting city, this app handles the rest and sends you sms/email notifications if a cheap flight is available!',
      githubUrl: 'https://github.com/kichichoi102/flight-deals-tracker',
      tryUrl: 'https://github.com/kichichoi102/flight-deals-tracker',
    },
    {
      title: 'More things on the way...',
      imageSrc: 'https://media3.giphy.com/media/eW9qyRjOwDROHF5YuQ/giphy.gif?cid=ecf05e47zsw30nckfyk19a604nmc34hwlzq12ti8v9ond0lq&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      bubbles: [
        { type: 'framework', text: 'Framework' },
        { type: 'language', text: 'Language' },
        { type: 'library', text: 'Library' },
        { type: 'database', text: 'Database' },
        { type: 'tool', text: 'Tool/Cloud' },
        { type: 'other', text: 'Other' },
      ],
      description: "Thats the end of the side projects I want to showcase for now. I'm currently working on a few more projects that I'm excited to share with you! Stay tuned!",
      githubUrl: 'https://github.com/kichichoi102/',
      tryUrl: 'https://github.com/kichichoi102/',
    },
  ],
  [ChapterEnum.EXPERIENCE]: [
    {
      title: 'Full Stack Engineer - Nitrex Metal Inc.',
      header: 'March 2023 - November 2023 (9 Months)',
      imageSrc: 'images/nitrex.jpg',
      bubbles: [
        { type: 'framework', text: 'FastAPI' },
        { type: 'framework', text: 'Vite/Vue.js' },
        { type: 'language', text: 'Python3' },
        { type: 'language', text: 'TypeScript' },
        { type: 'library', text: 'sqlalchemy' },
        { type: 'library', text: 'pydantic' },
        { type: 'library', text: 'mypy' },
        { type: 'database', text: 'PostgreSQL' },
        { type: 'tool', text: 'AWS' },
        { type: 'tool', text: 'Keycloak' },
        { type: 'tool', text: 'Pytest' },
        { type: 'tool', text: 'vitest' },
        { type: 'tool', text: 'Kubernetes/Docker' },
        { type: 'other', text: 'REST API' },
        { type: 'other', text: 'MQTT' },
        { type: 'other', text: 'WebSocket' },
        { type: 'other', text: 'Microservices' },
        { type: 'other', text: 'SSO' },
      ],
      summaries: [
        'Designed and implemented Single Sign-On service for a portfolio of five web applications portals, improving user registration and sign-in experience and overall authentication/security.',
        'Optimized API performance by introducing LRU Cache, writing asynchronous processes for database calls, and refactoring SQL queries with CTEs and removing redundant joints, reducing the core API response times by 34%.',
        'Developed an internal library in Python that synchronized multiple user directories into a centralized directory on Keycloak and an interface that performs automatic user provisioning and de-provisioning.',
      ],
    },
    {
      title: 'Lead Engineer - Combat Training Center',
      header: 'Janurary 2022 - March 2023 (14 Months)',
      imageSrc: 'images/ctc.jpg',
      bubbles: [
        { type: 'framework', text: 'Quasar/Vue.js' },
        { type: 'framework', text: '.NET WebAPI' },
        { type: 'language', text: 'TypeScript' },
        { type: 'language', text: 'C#' },
        { type: 'library', text: 'Tailwind CSS' },
        { type: 'database', text: 'MSSQL' },
        { type: 'tool', text: 'Azure' },
        { type: 'tool', text: 'Auth0' },
        { type: 'tool', text: 'NUnit' },
        { type: 'tool', text: 'vitest' },
        { type: 'tool', text: 'Kubernetes/Docker' },
        { type: 'other', text: 'REST API' },
        { type: 'other', text: 'Microservices' },
        { type: 'other', text: 'OAuth2.0' },
      ],
      summaries: [
        'Developed a web-based CRM and LMS platform to modernize the delivery of Canadian Armed Forces training online.',
        'Led the process of design and implementation of end-to-end architecture, including the API, the data access layer, data modelling, CI/CD processes in containerization and deployment, user access control, and testing strategies.',
      ],
    },
    {
      title: 'Backend Engineer - Canadian Joint Operations Command',
      header: 'May 2021 - Janurary 2022 (6 Months)',
      imageSrc: 'images/CJOC.png',
      bubbles: [
        { type: 'framework', text: 'React.js' },
        { type: 'framework', text: 'FastAPI' },
        { type: 'language', text: 'Python3' },
        { type: 'library', text: 'Pandas' },
        { type: 'library', text: 'Matplotlib' },
        { type: 'library', text: 'Pytorch' },
        { type: 'database', text: 'MSSQL' },
        { type: 'tool', text: 'Azure' },
        { type: 'tool', text: 'Pytest' },
        { type: 'tool', text: 'Kubernetes/Docker' },
        { type: 'other', text: 'REST API' },
        { type: 'other', text: 'Microservices' },
        { type: 'other', text: 'ETL' },
      ],
      summaries: [
        'Developed a data fusion module capable of synthesizing datasets from multiple datasources using Pandas to support data-driven decision making for the Canadian Armed Forces Head Quarters.',
        'Implemented a process for in-memory caching of data frame batches in the business layer, which decreased the file upload/process times from ~1h to 5 minutes.',
        'Developed a standalone task-runner service that automated data ETL processes instead of a user having to perform it manually.',
      ],
    },
    {
      title: 'Software Engineer - Canadian Forces Network Operations Centre',
      header: 'Janurary 2021 - May 2021 (5 Months)',
      imageSrc: 'images/cfnoc.jpg',
      bubbles: [
        { type: 'framework', text: 'React.js' },
        { type: 'framework', text: 'FastAPI' },
        { type: 'language', text: 'Javascript' },
        { type: 'language', text: 'Python3' },
        { type: 'library', text: 'D3.js' },
        { type: 'library', text: 'Chart.js' },
        { type: 'database', text: 'MSSQL' },
        { type: 'tool', text: 'AWS' },
        { type: 'tool', text: 'CloudFormation' },
      ],
      summaries: [
        'Developed a Web-based dashboard to enable the Red Team to track and plan their past, ongoing, and future operations.',
        'Designed and implemented a Mail-Bomb Architecture using AWS CloudFormation, which virtually created components to launch AWS ec2 instances safely and effectively without leaving any traces.',
        'Developed a linear-regression model that optimized the upload batch sizes for any host machines based on its caching performance.',
      ],
    },
    {
      title: 'Software Engineer Intern - CityNCom',
      header: 'May 2018 - September 2018 (5 Months)',
      imageSrc: 'images/cityncom.png',
      bubbles: [
        { type: 'framework', text: '.NET' },
        { type: 'language', text: 'C#' },
        { type: 'language', text: 'C++' },
        { type: 'language', text: 'Javascript' },
        { type: 'library', text: 'Chart.js' },
        { type: 'database', text: 'PostgreSQL' },
        { type: 'database', text: 'MariaDB' },
        { type: 'tool', text: 'OpenStack' },
        { type: 'tool', text: 'Jenkins/Puppet' },
        { type: 'tool', text: 'CentOS' },
        { type: 'other', text: 'Firmware Development' },
      ],
      summaries: [
        'Assisted in creating tools to monitor applications and services in cloud instances including system health indicators, trend identification, and anomaly detection on the OpenStack Platform.',
        'Pursued hands-on experience in implementing a DevOps pipeline using Jenkins and Puppet.',
        'Removed redundant sub-processes and implemented automation design, resulting in a 30% decrease in operational costs.',
      ],
    },
  ],
};

export const ProgressBarText = {
  0: 'Looking for snacks...',
  20: 'Searching for the meaning of life...',
  40: 'Looking for mice...',
  60: 'Fixing last minute bugs...',
  80: 'Taking a well deserved break...',
  100: 'Almost there...',
};
