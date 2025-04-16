import Timeline from '@/models/about/Timeline';

export const timeline: Timeline[] = [ 
    new Timeline(
        '2020 / August',
        '',
        'Første Hello world program.',
        'public static void Main(String Args[]) {\n     System.out.println("Hello World!");\n}'
    ),
    new Timeline(
        '2022/November',
        '',
        'Ansatt som Systemutvikler @Machina, deltid',
        '{\n    backend: ["Java", "PostGreSQL"],    \n    frontend: ["Backbone.js"]    \n}'
    ),
    new Timeline(
        '2022/Desember',
        '',
        'Fullført internship @Link utvikling',
        ''
    ),
    new Timeline(
        '2023/April',
        '',
        'Bachelorprosjekt - utviklet leetcode lignende applikasjon @wa.works fra scratch.',
        '{\nbackend: ["C#", ".ASP.NET", "SignalR", "Hangfire", "Entity framework", "PostGreSQL"],     \nfrontend: ["React.js"]     \n}'
    ),
    new Timeline(
        '2023/Mai',
        '',
        'Ansatt som Fullstackutvikler @Machina, heltid',
        '{\n    backend: ["Java", "PostGreSQL"],\n    frontend: ["backbone.js", "jquery.js"]\n}'
    ),
    new Timeline(
        '2023/Juni',
        '',
        'Uteksaminert fra HVL som Dataingeniør',
        '{\nnull: "🎓"    \n}'
    )
]
