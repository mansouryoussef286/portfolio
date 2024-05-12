enum ProjectType {
    FrontEnd,
    BackEnd,
    FullStack
}

enum ProjectOwnership {
    Professional,
    Personal,
    Freelancing
}

export class Project {
    Title?: string;
    ImgSrc?: string;
    ImgAlt?: string;
    Description?: string;
    Type?: ProjectType;
    Ownership?: ProjectOwnership;
    LogoSrc?: string;
    LogoAlt?: string;
    WorkDone?: string[];
    GithubLink?: string;
    VisitLink?: string;
}

export const Projects: Project[] = [
    {
        Title: 'Amr Diwan',
        ImgSrc: 'assets/Images/Projects/amrdiwan.png',
        ImgAlt: "Amr diwan's hero section image",
        Description: 'Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.',
        Type: ProjectType.FrontEnd,
        Ownership: ProjectOwnership.Freelancing,
        LogoSrc: 'assets/Images/Projects/amrdiwan-logo.png',
        LogoAlt: "Amr diwan's logo image",
        WorkDone: [
            "Implemented the 2 Client side projects using Angular.",
            "Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.",
            "Create Diwan studios' Brand website also with their projects, portfolio and careers options."
        ],
        GithubLink: 'https://github.com/Diwan-organization/amr-diwan.web',
        VisitLink: 'https://amrdiwan.com/',
    },
    {
        Title: 'Diwan Studios',
        ImgSrc: 'assets/Images/Projects/diwanstudios.png',
        ImgAlt: "Diwan Studios's hero section image",
        Description: 'Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works. jndnl nwj fejfn ekjw nnew fj nflelj; wef efiuw iul ewuweihquiqwefle u ff lf.',
        Type: ProjectType.FrontEnd,
        Ownership: ProjectOwnership.Freelancing,
        LogoSrc: 'assets/Images/Projects/diwanstudios-logo.png',
        LogoAlt: "Diwan Studios's logo image",
        WorkDone: [
            "Implemented the 2 Client side projects using Angular.",
            "Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.",
            "Create Diwan studios' Brand website also with their projects, portfolio and careers options."
        ],
        GithubLink: 'https://github.com/Diwan-organization/diwan-studios.web',
        VisitLink: 'https://diwanstudios.com/',
    },
    {
        Title: 'Chehabi Academy',
        ImgSrc: 'assets/Images/Projects/chehabiacademy.png',
        ImgAlt: "Chehabi Academy's hero section image",
        Description: 'Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.',
        Type: ProjectType.FullStack,
        Ownership: ProjectOwnership.Freelancing,
        LogoSrc: 'assets/Images/Projects/chehabiacademy-logo.png',
        LogoAlt: "Chehabi Academy's logo image",
        WorkDone: [
            "Implemented the 2 Client side projects using Angular.",
            "Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.",
            "Create Diwan studios' Brand website also with their projects, portfolio and careers options."
        ],
        GithubLink: 'https://github.com/orgs/TechWizzJoes/repositories',
        VisitLink: 'https://chehabi-academy.com/',
    },
    {
        Title: 'Authentication Server',
        ImgSrc: 'assets/Images/Projects/authenticationserver.png',
        ImgAlt: "Authentication Server's hero section image",
        Description: 'Centralized authentication server based on abstraction of an identity provider to handle authentication across multiple applications.',
        Type: ProjectType.BackEnd,
        Ownership: ProjectOwnership.Personal,
        // LogoSrc: 'assets/Images/Projects/chehabiacademy-logo.png',
        LogoAlt: "Authentication Server's logo image",
        WorkDone: [
            `Delegated Authentication: Offloads authentication logic from individual applications.`,
            `Supports Auth0: Integrates with Auth0 for user authentication.`,
            `User Management: Creates and stores user information in a centralized database.`,
            `API Authentication: Applications authenticate with the API using API keys and secrets.`,
            `Client applications authenticate using this auth server that connects to Identity Provider using.`,
            `offers refresh token and smaller spans access token for extra security.   `,
        ],
        GithubLink: 'https://github.com/mansouryoussef286/auth-server',
        VisitLink: '',
    },
    {
        Title: 'Dialer CRM',
        ImgSrc: 'assets/Images/Projects/dialer.png',
        ImgAlt: "Dialer CRM's hero section image",
        Description: 'Web application used to facilitate sales team campaigns.',
        Type: ProjectType.FullStack,
        Ownership: ProjectOwnership.Professional,
        LogoSrc: 'assets/Images/Projects/ultatel.png',
        LogoAlt: "Dialer CRM's logo image",
        WorkDone: [
            `Gathered essential information from the product owner to meet the business requirements and effectively translating that into successful implementation using Angular, NestJS and MariaDB.`,
            `Contributed to achieving a 10% boost in revenue through its successful development.`,
        ],
        GithubLink: '',
        VisitLink: '',
    },
    {
        Title: 'Monitor',
        ImgSrc: 'assets/Images/Projects/monitor.jpg',
        ImgAlt: "Monitor's hero section image",
        Description: 'Web application used to facilitate sales team campaigns.',
        Type: ProjectType.FullStack,
        Ownership: ProjectOwnership.Professional,
        LogoSrc: 'assets/Images/Projects/ultatel.png',
        LogoAlt: "Monitor's logo image",
        WorkDone: [
            `Optimized the performance and developed new features using Angular, Ngrx, MongoDB, Expressjs and Asterisk server events integration.`,
            `Conducted in-depth analysis of system bottlenecks and identified areas for improvement, Proposed and implemented various performance-enhancing measures, resulting in a significant increase in system speed and efficiency.     `,
        ],
        GithubLink: '',
        VisitLink: '',
    },
];

/*
 {
        Title: 'X',
        ImgSrc: 'assets/Images/Projects/Y.png',
        ImgAlt: "X's hero section image",
        Description: '',
        Type: ProjectType,
        Ownership: ProjectOwnership,
        LogoSrc: 'assets/Images/Projects/Y-logo.png',
        LogoAlt: "X's logo image",
        WorkDone: [
            ],
        GithubLink: '',
        VisitLink: '',
    },
    */