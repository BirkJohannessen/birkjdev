import NavbarPath from '@/models/NavbarPath';

export const navbarpaths: NavbarPath[] = [
    new NavbarPath(
        'birk',
        '/',
        'person',
        []
    ),
    new NavbarPath(
        'blogs',
        '/blogs',
        'rss_feed',
        ['^/blog/\\d+$']
    ),
    new NavbarPath(
        'prime_spiral',
        '/projects/primes',
        'blur_on',
        []
    ),
    new NavbarPath(
        'tetris',
        '/projects/tetris',
        'grid_view',
        []
    ),
    new NavbarPath(
        'typenigma',
        '/projects/typenigma',
        'keyboard',
        []
    )
]
