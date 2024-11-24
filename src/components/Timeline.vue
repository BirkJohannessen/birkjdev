<template>
    <div class="timeline-wrapper">
        <div class="center-padding"></div>
        <div class="time">
        </div>
        <div class="time-object-wrapper">
            <div v-for="(timeobj, idx) in timeline">
                <div :class="idx % 2 === 1 ? 'left' : ''" class="time-object">
                    <div class="point" :class="idx % 2 === 1 ? 'pleft' : 'pright'"></div>
                    <h3 v-if="timeobj.title">{{timeobj.title}}</h3>
                    <h3>{{timeobj.time}}</h3>
                    <p>{{timeobj.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Timeline',
    data() {
        return {
            timeline: [
                {
                    time: '2020 / August',
                    title: '',
                    description: 'Første Hello world program.',
                    ghostcription: 'public static void Main(String Args[]) {\n     System.out.println("Hello World!");\n}'
                },
                /*
                {
                    time: '2022/Januar',
                    title: '',
                    description: 'Første sideprosjekt, ROOMBOT, et python program for å automatisk booke grupperom på høyskolen',
                    ghostcription: '{\nbackend: ["php", "MySql", "nginx", "Python", "Crontab", "Ubuntu server"],    \nfrontend: ["php"]    \n}'
                },
                */
                {
                    time: '2022/November',
                    title: '',
                    description: 'Ansatt som Systemutvikler @Machina, deltid',
                    ghostcription: '{\n    backend: ["Java", "PostGreSQL"],    \n    frontend: ["Backbone.js"]    \n}'
                },
                {
                    time: '2022/Desember',
                    title: '',
                    description: 'Fullført internship @ Link utvikling',
                    ghostcription: ''
                },
                {
                    time: '2023/April',
                    title: '',
                    description: 'Prosjekt Kodeplattform for utviklerkandidater.\n (Lignende leetcode).',
                    ghostcription: '{\nbackend: ["C#", ".ASP.NET", "SignalR", "Hangfire", "Entity framework", "PostGreSQL"],     \nfrontend: ["React.js"]     \n}'
                },
                {
                    time: '2023/Mai',
                    title: '',
                    description: 'Ansatt som Fullstackutvikler @Machina, heltid',
                    ghostcription: '{\n    backend: ["Java", "PostGreSQL"],\n    frontend: ["backbone.js", "jquery.js"]\n}'
                },
                {
                    time: '2023/Juni',
                    title: '',
                    description: 'Uteksaminert fra HVL som Dataingeniør',
                    ghostcription: '{\nnull: "🎓"    \n}'
                },
                /*
                {
                    time: '2023/2024',
                    title: '',
                    description: 'Synkronisere serverstate med utgående meldinger\n som epost, SMS og andre forsendelser som SvarUt.',
                    ghostcription: '{\n    project: "Meldingskø",\n    omfang: "Stor refactor for ny kodesti for samtlige forsendelser for 29~ kunder"\n    tags: ["legacy", "refactor", "mimemessage", "FIFO queue"]\n}'
                },
                {
                    time: '2024',
                    title: '',
                    description: 'Utviklet nytt beslutningssystem på saker, og dokumenter.',
                    ghostcription: '{\n    project: "Decision",     \ntags: ["backend"]     \n}'
                },
                {
                    time: '2024/Mai',
                    title: '',
                    description: 'Betalingsløsning for FBT knyttet Machinas løsning for dem.\nIntegrasjon mot NETS.',
                    ghostcription: '{\n    project: "NETS integration",     \ntags: ["Integration", "API", "NETS"]     \n}'
                },
                {
                    time: '2024/August',
                    title: '',
                    description: 'Utviklet Ny kilde til å generere smarte dokumenter',
                    ghostcription: '{\n    project: "Docengine",     \ntags: ["Backend", "Java", "Documents", "Engine"]     \n}'
                },
                {
                    time: '2024/November',
                    title: '',
                    description: 'Dokumentmotor for å håndtere tilstanden til dokumenter i ulike faser',
                    ghostcription: '{\n    project: "Docengine",     \ntags: ["Backend", "Java", "Documents", "Engine"]     \n}'
                },
                {
                    time: '2024/Desember',
                    title: '',
                    description: 'Godkjennings fase knyttet til dokumenter (Bakgrunn for dokumentmotor)',
                    ghostcription: '{\n    project: "Docengine",     \ntags: ["Fullstack", "Documents", "Approval"]     \n}'
                },
                */
            ].reverse()
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';

    .timeline-wrapper {
        display: flex; flex-direction: row;
        justify-content: center;
    }

    .time {
        width: $spacing-0;
        background-color: $tetriary;
    }

    .left {
        text-align: right;
        transform: translateX(-100%);
    }

    .time-object-wrapper {
        position: relative;
        width: 50%;
    }

    .center-padding {
        width: 50%;
    }

    .time-object {
        padding: 0 $spacing-3; margin: $spacing-4 0;
        max-width: 650px;
        white-space: pre-wrap;
        position: relative;
    }

    .point {
        width: 11px; height: 11px;
        position: absolute;
        border-radius: 24px;
        background-color: $tetriary;
        &.pleft {
            right: -4px; top: 16px;
        }
        &.pright {
            left: -7px; top: 16px;
        }
    }

    @media (max-width: $mobile-size) {
        .point {
            &.pleft {
                left: -7px; top: 16px;
            }
        }

        .time-object-wrapper {
            width: 80vw;
        }

        .time-object {
            width: 100%;
        }

        .left {
            text-align: inherit;
            transform: inherit;
        }

        .center-padding {
            display: none;
        }
    }
</style>
