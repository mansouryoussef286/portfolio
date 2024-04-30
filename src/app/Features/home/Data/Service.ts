export class Service {
    Title!: string;
    SubServices!: string[];
}

export const Services: Service[] = [
    {
        Title: 'Frontend Development',
        SubServices: [
            'Building user interfaces',
            'Implementing responsive design'
        ]
    },
    {
        Title: 'Backend Development',
        SubServices: [
            'Building APIs (RESTful)',
            'Database management',
            'Server-side logic implementation'
        ]
    },
    {
        Title: 'Full-Stack Development',
        SubServices: [
            'Full project lifecycle management',
            'Integration of frontend and backend',
            'Deployment and hosting'
        ]
    },
];