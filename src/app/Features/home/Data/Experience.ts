export class ExpProject {
    Title!: string;
    Description!: string;
    Duties!: string[];
}

export class Experience {
    Title!: string;
    Company!: string;
    Logo!: string;
    Role!: string;
    Description!: string;
    From!: string;
    To!: string;
    Country!: string;
    Duties!: string[];
    Projects!: ExpProject[];
}

export const Experiences: Experience[] = [
    {
        Title: 'one',
        Company: 'Ultatel',
        Logo: 'assets/Images/ultatel.png',
        Role: 'Full stack software engineer',
        Description: 'Telecommunication company specialized in VOIP services',
        From: '08/2022',
        To: '03/2024',
        Country: 'Egypt',
        Duties: [
            `Contributed to the development of new projects to expand the company's offerings and increase its competitiveness in the market.`,
            `Enhanced and implemented new features into existing projects to improve functionality and user experience.`,
            `Maintained the operation of multiple projects, including troubleshooting and resolving support issues to ensure optimal system performance.`
        ],
        Projects: [{
            Title: 'Dialer CRM',
            Description: '',
            Duties: [
                'Gathered essential information from the product owner to meet the business requirements and effectively translating that into successful implementation using Angular, NestJS and MariaDB.',
                'Contributed to achieving a 10% boost in revenue through its successful development.'
            ]
        }]
    },
    {
        Title: 'two',
        Company: 'TPS',
        Logo: 'assets/Images/tps.jpg',
        Role: 'Software engineer',
        Description: 'Software house company subsidiary of AZM KSA specialized in fintech solutions.',
        From: '03/2024',
        To: 'Present',
        Country: 'KSA',
        Duties: [
            `Troubleshooted and resolved support issues to ensure optimal system running performance.`,
        ],
        Projects: [{
            Title: 'Tahseel',
            Description: 'Api handling requests from Edaat and Saudi Sadad ',
            Duties: [
                'Worked on production issues in the integration between Tahseel, Edaat and MOJ systems.',
                'Supported in the MsSql database, .Net core Web api and HangFire jobs communicating between multiple services in the background.'
            ]
        }]
    }
];