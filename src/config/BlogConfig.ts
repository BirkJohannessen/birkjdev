import cybertalent23 from '@/assets/blogs/cybertalent23.jpg'
import ipv4 from '@/assets/blogs/ipv4.webp';
import p26e23 from '@/assets/blogs/p26e23.jpg'
import aoc from '@/assets/blogs/aoc.png'

export const blogs: Blog[] = [
    new Blog(
        0,
        'p26e 2023',
        'remote',
        new Date('2024-01-08'),
        'writeup',
        p26e23,
        'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/p26e-julekalender-2023/README.md',
        'Writeup av Politiets sikkerhets tjeneste sin adventskalender-CTF, julen 2023.',
    ),
    new Blog(
        1,
        'cybertalent 2023',
        'remote',
        new Date('2024-01-14'),
        'writeup',
        'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/cybertalent23/README.md',
        cybertalent23,
        'E-tjenesten\'s CTF tilhørende sitt talentprogram, desember/januar 2023',
    ),
    new Blog(
        2,
        'advent of code 2024',
        'remote',
        new Date('2024-12-25'),
        'writeup',
        'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/adventofcode2024/README.md',
        aoc,
        'Advent of code 2024. Javascript + funksjonell programmering',
    ),
    new Blog(
         3,
        'Curious case of encoding ipv4 addresses',
        'remote',
        new Date('2024-02-09'),
        'blog',
        'https://raw.githubusercontent.com/BirkJohannessen/writeups/refs/heads/master/curious-case-of-encoding-ipv4-addresses/README.md',
        ipv4,
        'In how many ways can we encode an ipv4 address?',
    )
]
