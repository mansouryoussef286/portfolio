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
            'Managing project lifecycle',
            'Integration of frontend and backend',
            // 'Deployment and hosting'
        ]
    },
    {
        Title: 'Infrastructure',
        SubServices: [
            'Deployment and hosting',
            'Domain management'
        ]
    },
];