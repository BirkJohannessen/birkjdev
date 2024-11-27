import cybertalent23 from '@/assets/blogs/cybertalent23.jpg'
import p26e23 from '@/assets/blogs/p26e23.jpg'
const blogs = [
    {
        id: 0,
        title: 'p26e 2023',
        type: 'remote',
        date: '08.01.2024',
        contentType: 'writeup',
        contentImg: p26e23,
        remoteURL: 'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/p26e-julekalender-2023/README.md',
        description: 'Writeup av Politiets sikkerhets tjeneste sin adventskalender-CTF, julen 2023.',
    },
    {
        id: 1,
        title: 'cybertalent 2023',
        type: 'remote',
        date: '14.01.2024',
        contentType: 'writeup',
        remoteURL: 'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/cybertalent23/README.md',
        contentImg: cybertalent23,
        description: 'E-tjenesten\'s CTF tilhørende sitt talentprogram, desember/januar 2023',
    }
]

export default blogs;
