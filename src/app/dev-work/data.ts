import { WorkCard } from '../interfaces';

export enum tech {
    JS = 'JavaScript',
    ANG = 'Angular',
    RCT = 'React',
    RDX = 'Redux',
    NgRx = 'NgRx',
    Node = 'Node',
    MDB = 'Mongo',
    SQL = 'SQL',
    AWS = 'AWS',
    MAZ = 'Azure'

}

export const ProjectData: WorkCard[] = [
    {title: 'Order Management System (OMS)',
    techUsed: [tech.ANG, tech.NgRx, tech.SQL, tech.MAZ ],
    description: 'Worked as part of an agile development team that created and maintained the primary ordering system for Food Servivces of America. OMS processed over $200,000 in orders monthly.',
    contributions: ['Led re-theming effort which allowed app to dynamically apply 5 different company themes.',
                    'Co-created the MS Azure failover and disaster recovery environments and scripts'],
    imageUrl: 'assets/images/tech.png'
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },
    {title: '',
    techUsed: [],
    description: '',
    contributions: [],
    imageUrl: ''
    },

];
