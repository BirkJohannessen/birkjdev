import cybertalent23 from '@/assets/blogs/cybertalent23.jpg'
import ipv4 from '@/assets/blogs/ipv4.webp';
import p26e23 from '@/assets/blogs/p26e23.jpg'
import aoc from '@/assets/blogs/aoc.png'

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
    },
    {
        id: 2,
        title: 'advent of code 2024',
        type: 'remote',
        date: '25.12.2024',
        contentType: 'writeup',
        remoteURL: 'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/adventofcode2024/README.md',
        contentImg: aoc,
        description: 'Advent of code 2024. Javascript + funksjonell programmering',
    },
    {
        id: 3,
        title: 'Curious case of encoding ipv4 addresses',
        type: 'remote',
        date: '09.02.2025',
        contentType: 'blog',
        remoteURL: 'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/curious-case-of-encoding-ipv4-addresses/README.md',
        contentImg: ipv4,
        description: 'In how many ways can we encode an ipv4 address?',
    }
]

export default blogs;
