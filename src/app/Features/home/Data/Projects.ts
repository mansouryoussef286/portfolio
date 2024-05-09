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
        ImgAlt: "Amr diwan's hero section image",
        Description: 'Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.',
        Type: ProjectType.FrontEnd,
        Ownership: ProjectOwnership.Freelancing,
        LogoSrc: 'assets/Images/Projects/diwanstudios-logo.png',
        LogoAlt: "Amr diwan's logo image",
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
        ImgAlt: "Amr diwan's hero section image",
        Description: 'Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.',
        Type: ProjectType.FrontEnd,
        Ownership: ProjectOwnership.Freelancing,
        LogoSrc: 'assets/Images/Projects/chehabiacademy-logo.png',
        LogoAlt: "Amr diwan's logo image",
        WorkDone: [
            "Implemented the 2 Client side projects using Angular.",
            "Represented the personal portfolio of the graffiti artist Amr Diwan showcasing his best projects and art works.",
            "Create Diwan studios' Brand website also with their projects, portfolio and careers options."
        ],
        GithubLink: '',
        VisitLink: 'https://chehabi-academy.com/',
    },
];