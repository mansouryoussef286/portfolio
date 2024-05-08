export class Education {
    Degree!: string;
    Institution!: string;
    Description!: string;
    From!: string;
    To!: string;
    ImgSrc!: string;
    Link!: string;
}

export const Educations: Education[] = [
    {
        Degree: 'Professional full stack development track',
        Institution: 'Information Technology Institute (ITI)',
        Description: '',
        From: '2021',
        To: '2022',
        ImgSrc: 'assets/Images/Education/iti.png',
        Link: 'https://iti.gov.eg/home',
    },
    {
        Degree: 'Bachelor of Engineering',
        Institution: 'Alexandria University',
        Description: 'Ranked 2nd, <br>GPA 3.77 / 4, with overall grade excellent with honor.',
        From: '2014',
        To: '2019',
        ImgSrc: 'assets/Images/Education/foe.png',
        Link: 'https://eng.alexu.edu.eg/index.php/en/',
    },
];