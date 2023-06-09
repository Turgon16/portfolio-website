const HomeItems = {
    profile: {
        img: '/img/tyler-hum.webp',
        alt: 'An profile image of Tyler Hum, a male in his thirties with black square-lensed glasses. A rich blue background is behind him.',
        title1: 'Full-Stack',
        title2: 'Software Developer',
        text: `Hi! My name is Tyler. I'm a passionate creative with a penchant for storytelling, building websites, and developing full-stack applications. You'll find me in beautiful `,
        textWidow: 'Edmonton, Alberta.',
    },
};

const FrontEndStack = [
    {
        id: 1,
        name: 'HTML5',
        img: '../svg/html-5.svg',
        alt: 'An image of the HTML 5 logo.',
    },
    {
        id: 2,
        name: 'CSS',
        img: '../svg/css-3.svg',
        alt: 'An image of the CSS 3 logo.',
    },
    {
        id: 3,
        name: 'JavaScript',
        img: '../svg/js.svg',
        alt: 'An image of the JavaScript logo.',
    },
    {
        id: 4,
        name: 'React',
        img: '../svg/react.svg',
        alt: 'An image of the React logo.',
    },
    {
        id: 5,
        name: 'Next.js',
        img: '../svg/nextjs.svg',
        alt: 'An image of the Next.js logo.',
    },
];

const BackEndStack = [
    {
        id: 1,
        name: 'C#',
        img: '../svg/csharp.svg',
        alt: 'An image of a C# logo.',
    },
    {
        id: 2,
        name: 'ASP.NET Core',
        img: '../svg/dotnetcore.svg',
        alt: 'An image of the .Net Core logo.',
    },
    {
        id: 3,
        name: 'Java & Jakarta',
        img: '../svg/java.svg',
        alt: 'An image of the Java logo.',
    },
    {
        id: 4,
        name: 'MS SQL Server',
        img: '../svg/sql.svg',
        alt: 'An image of the SQL logo.',
    },
];

const FrontEndBox = {
    text1: `Dynamic Single-Page Applications built with React and Next.js. Experienced with Bootstrap and MUI styling libraries for building quick,`,
    text1Widow: `clean UI/UX. `,
    text2: `Fluid and responsive web design with CSS Flexbox. Front-end development with a mobile-first approach. Intuitive layouts and a user-centric approach `,
    text2Widow: `to UI/UX.`,
    text3: `Managing stateful logic with the use of React Hooks. Using Fetch to consume REST API's. Creating compact and reusable components for maintainable, `,
    text3Widow: `scalable code.`,
    img1: `../img/Roles-Landing-Page.webp`,
    alt1: `An image of a roles-management dashboard with a search bar above and a table of roles below.`,
    img2: `../img/Roles-ProfileEdit-Page.webp`,
    alt2: `An image of a roles-management edit page, with a description of the role above, a tab option for 'profile' and for 'permissions', and a form below the tabs to edit the role.`,
    img3: `../img/SoW-sm.webp`,
    alt3: `A mobile-view of a web page titled 'The Story Of Water'.`,
    img4: `../img/SoW-md.webp`,
    alt4: `A medium-sized view of a web page titled 'The Story Of Water'.`,
    img5: `../img/SoW-md.webp`,
    alt5: `A large-sized view of a web page titled 'The Story Of Water'.`,
};

const BackEndBox = {
    text1: `Application development in a Microsoft environment with C# and ASP.NET Core. Experience with SQL Server, queries with both SQL `, // Maybe add more database stuff into this one, move razor pages into next one
    text1Widow: `and LINQ.`,
    text2: `Extensive experience using Model-View-Controllers and server-side rendering with Razor Pages. Building RESTful services using .NET Core's `,
    text2Widow: `Web API's.`,
    text3: `Application development with Java and the Jakarta EE. Writing end to end tests using Arquillian and Selenium. Server side rendering with JSF. Building RESTful API's `,
    text3Widow: `using JAX-RS.`,
    img1: `../img/ETools2PO.webp`,
    alt1: `An image of a purchase order system developed with ASP.NET Core using MVC razor pages.`,
    img2: `../img/Character-List.webp`,
    alt2: `An image of a Character Manager App, developed with Java, Jarkarta EE, Prime Faces and JAX-RS.`,
    img3: `../img/EmployeeRegistration.webp`,
    alt3: `An image of a Character Manager App, developed with Java, Jarkarta EE, Prime Faces and JAX-RS.`,
};

const Cards = [
    {
        name: 'Aquatic Biosphere Project',
        icon: '../svg/AquaticBiosphereLogo.svg',
        iconAlt: 'An icon image of the Aquatic Biosphere logo.',
        text1: 'I recently had the pleasure of working on a project for a non-profit registered charity organization that included rebuilding their future website from the ground up.',
        text2: 'During this four month project I consulted with our client and gathered requirements for the project. I helped plan, design and build an internal user management system. I was a key part of the UI/UX design for the system, and then helped with building the external ',
        textWidow: 'facing website.',
        linkText: 'Visit their blog',
        link: 'https://www.aquaticbiosphere.ca/post/nait-students-design-new-digital-home-for-aquatic-biosphere?postId=7b49e2d6-29ee-4078-80ed-364fe5a54445',
    },
    {
        name: 'Development Process',
        icon: '../svg/scrum.svg',
        iconAlt: 'An icon image of the Agile Scrum logo.',
        text1: `I have experience working in an agile environment using the Scrum methodology: from regularly scheduled client consultation to daily standup. I've developed in consistant sprint cycles starting with backlog and sprint planning through to review and retrospective.`,
        text2: `I'm experienced with using GitHub for version control and working with branching technology. I've used Jira as a primary project `,
        textWidow: 'management tool.',
        linkText: '',
        link: '',
    },
    {
        name: 'NAIT DMIT Software Development',
        icon: '../svg/education.svg',
        iconAlt: 'An icon image of a graduation hat.',
        text1: 'I recently graduated from the Northern Alberta Institute of Technology (NAIT) with a diploma in Digital Media and IT. My specialization was in software development.',
        text2: 'I learned a broad range of essential skills and technologies, including full-stack application development, web development, database management, BI solution development, and developing Android applications with Flutter and Dart. NAIT taught me core, fundamental development practices including documentation and testing, writing clean and scalable code, and working in an team-based ',
        textWidow: 'agile environment.',
        linkText: '',
        link: '',
    },
];

export {
    HomeItems,
    FrontEndStack,
    BackEndStack,
    FrontEndBox,
    BackEndBox,
    Cards,
};
