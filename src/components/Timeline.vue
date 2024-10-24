<template>
    <div class="timeline-wrapper">
        <div class="left">
            <div v-for="(timeobj, idx) in timeline">
                <div v-if="idx % 2 === 0" class="time-object">
                    <div class="point pleft"></div>
                    <h2 v-if="timeobj.title">{{timeobj.title}}</h2>
                    <h3>{{timeobj.time}}</h3>
                    <p>{{timeobj.description}}</p>
                </div>
                <div class="time-object-reflect roleft" v-if="idx % 2 === 1">
                    <p>{{timeobj.ghostcription}}</p>
                </div>
            </div>
        </div>
        <div class="time">
        </div>
        <div class="right">
            <div v-for="(timeobj, idx) in timeline">
                <div v-if="idx % 2 === 1" class="time-object">
                    <div class="point pright"></div>
                    <h2 v-if="timeobj.title">{{timeobj.title}}</h2>
                    <h3>{{timeobj.time}}</h3>
                    <p>{{timeobj.description}}</p>
                </div>
                <div class="time-object-reflect roright" v-if="idx % 2 === 0">
                    <p>{{timeobj.ghostcription}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    components: {
    },
    methods: {
        bar() {
        }
    },
    computed: {
        foo(){
        }
    },
    data() {
        return {
            baz: 0,
            timeline: [
                {
                    time: '2020 / August',
                    title: '',
                    description: 'Første Hello world program.',
                    ghostcription: 'public static void Main(String Args[]) {\n     System.out.println("Hello World!");\n}'
                },
                {
                    time: '2022/Januar',
                    title: '',
                    description: 'Første sideprosjekt, ROOMBOT, et python program for å automatisk booke grupperom på høyskolen',
                    ghostcription: '{\nbackend: ["php", "MySql", "nginx", "Python", "Crontab", "Ubuntu server"],    \nfrontend: ["php"]    \n}'
                },
                {
                    time: '2022/November',
                    title: '',
                    description: 'Ansatt som Systemutvikler @Machina, deltid',
                    ghostcription: '{\n    backend: ["Java", "PostGreSQL"],    \n    frontend: ["Backbone.js"]    \n}'
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
                {
                    time: '2023/2024',
                    title: '',
                    description: 'Synkronisere serverstate med utgående meldinger\n som epost, SMS og andre forsendelser som SvarUt.',
                    ghostcription: '{\n    project: "Meldingskø",\n    omfang: "Stor refactor for ny kodesti for samtlige forsendelser for 29~ kunder"\n    tags: ["legacy", "refactor", "mimemessage", "FIFO queue"]\n}'
                },
                {
                    time: '2024/Mai',
                    title: '',
                    description: 'Betalingsløsning for FBT knyttet Machinas løsning for dem.\nIntegrasjon mot NETS.',
                    ghostcription: '{\n    project: "NETS integration",     \ntags: ["Integration", "API", "NETS"]     \n}'
                },
            ]
        }
    },
}
</script>

<style scoped>
    .timeline-wrapper {
        width: 100%;
        padding: 16px 0;
        display: flex; flex-direction: row;
    }
    .time {
        width: 3px;
        background-color: gold;
    }
    .left {
        width: 50%;
        text-align: right;
    }
    .right {
        width: 50%;
    }
    .time-object-reflect {
        height: 110px;
        padding: 0 16px; margin: 20px 0;
        &.roright {
            p {
                color: #77727D;
                white-space: pre-wrap;
            }
        }
        &.roleft {
            p {
                color: #77727D;
                white-space: pre-wrap;
            }
        }
    }
    .time-object {
        height: 110px;
        padding: 0 16px; margin: 20px 0;
        white-space: pre-wrap;
    }
    .point {
        width: 11px; height: 11px;
        border-radius: 24px;
        background-color: gold;
        &.pleft {
            position: relative;
            right: -23px; top: 12px;
            float: right;
        }
        &.pright {
            position: relative;
            left: -23px; top: 12px;
            float: left;
        }
    }
</style>
