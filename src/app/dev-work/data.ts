import { WorkCard } from '../interfaces';

export enum tech {
    JS = 'JavaScript',
    ANG = 'Angular',
    NGM = 'Material',
    RCT = 'React',
    RDX = 'Redux',
    NgRx = 'NgRx',
    Node = 'Node',
    MDB = 'Mongo',
    SQL = 'SQL',
    FB = 'FireBase',
    AWS = 'AWS',
    MAZ = 'Azure'

}

export const ProjectData: WorkCard[] = [
    {title: 'Order Management System (OMS)',
    techUsed: [tech.ANG, tech.NgRx, tech.SQL, tech.MAZ ],
    description: 'Member of an agile development team that created and maintained the primary ordering system for Food Servivces of America. OMS processed over $200,000 in orders monthly.',
    contributions: ['Led re-theming effort which allowed app to dynamically apply 5 different company themes.',
                    'Co-created the MS Azure failover and disaster recovery environments and scripts'],
    imageUrl: 'assets/images/omscls.png'
    },
    {title: 'Master List Management',
    techUsed: [tech.ANG, tech.RDX, tech.SQL, tech.AWS],
    description: 'The application allows national sales representatives to manage product lists for their accounts. ',
    contributions: ['Lead front-end developer.',
                    'Removed dependencies on unneeded libraries using es2015 features.'],
    imageUrl: 'assets/images/lms.png'
    },
    {title: 'Fleet Inbound Cost Management',
    techUsed: [tech.ANG, tech.Node, tech.SQL, tech.AWS],
    description: 'Application to automate pulling logistics data and calculating route profit / loss. The system automates work being processed in Excel spreadsheets.',
    contributions: ['Took up role as lead developer on the project.',
                    'Generated a weekly time savings of one FTE.'],
    imageUrl: 'assets/images/ficmcls.png'
    },
    {title: 'iSubscribe',
    techUsed: [tech.RCT, tech.Node, tech.MDB],
    description: 'With businesses increasingly moving to monthly fees and reoccurring micro transactions it\'s easy to ‘nickel and dime’ our paychecks away. iSubscribe empowers users to manage their digital subscriptions and easily see their monthly spending patterns.',
    contributions: ['REST API, User Authentication, User Profile Page'],
    imageUrl: 'assets/images/isubscribe.png'
    },
    {title: 'CSQ Generator',
    techUsed: [tech.ANG, tech.NGM],
    description: 'Proof of concept I developed for a Cysco Voice Engineer. The application generates XML files for Cisco UCCX Contact Service Queues (CSQs)',
    contributions: ['Application Architecture', 'Front End', 'Export functionality'],
    imageUrl: 'assets/images/CSQGenerator.png'
    },
    {title: 'To The Table',
    techUsed: [tech.RCT, tech.RDX, tech.FB],
    description: 'To the Table allows users to create game night events, invite attendees, and vote on games to play. As an avid board gamer I frequently host game nights and we spend an extrordinary amount of time deciding which games to play. I am developing this app in order to allow my friends and fellow gamers to spend less time choosing and more time playing. The application integrates with Board Game Geek (BGG) and allows users to share access their collection.',
    contributions: ['Front End (Work in progress)', 'Firebase Integration', 'Redux implementation', 'Ingegration with BGG API and Google Auth'],
    imageUrl: 'assets/images/ttt.png'
    }
];
