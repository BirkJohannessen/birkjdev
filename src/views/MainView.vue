<template>
    <div class="wrapper" id="wrapper">
        <section class="flex intro">
            <div class="flex">
                <div class ="image-wrapper">
                    <div class ="image-circle">
                        <img alt="" src="../assets/birk.jpg" />
                    </div>
                </div>
                <div class ="about">
                    <p class="introduction">$ whoami</p>
                    <h1>Birk Johannessen</h1>
                    <h3>Utvikler, hacker, nerd</h3>
                    <p>... generelt over gjennomsnittet interessert i programvare.</p>
                </div>
            </div>
        </section>
        <section class="flex">
            <div v-if="this.cards">
                <p class="introduction">$ more</p>
                <div class="flex cards">
                    <div class ="card">
                        <div class="header">
                            <h3>Fullstack utvikler</h3>
                        </div>
                        <p>- av yrke, men ikke eksklusivt. Sitter på en bred teknisk interrese. Spør meg om hjemmeserverene mine, Linux configen min eller hacking!</p>
                        <p>Elsker faget, og elsker jobben som lar meg praktisere det hver dag.</p>
                        <p>Interessert å utvide vertøykassa samtidig som jeg spisser de skarpeste redskapene der. Samarbeider godt i lag og er veldig mottakelig til diskusjon. Sier meningen min, og spør når jeg lurer på noe.</p>
                    </div>
                    <div class ="card">
                        <div class="header">
                            <h3>Machina</h3>
                        </div>
                        <p>Effektiviserer saksbehandling og tilskuddsløsninger for flere titalls kunder hos Machina. Daglig arbeid med de fremste featurene i produktet inklusivt flere integrasjoner. Som regel ansvarlig for hele funksjonaliteter, fra spec til master merge.</p>
                    </div>
                    <div class ="card">
                        <div class="header">
                            <h3>Effektiv</h3>
                        </div>
                        <p>Lidenskapelig opptatt av å være rask! Enten det er å redigere tekst med vim, scripte vekk kjedelige oppgaver, tillære shortcuts til programvarer, utnytte tekstgenererende AI, meste touchtyping eller prøve å få over 115wpm på racetyping. </p>
                    </div>
                    <div class ="card">
                        <div class="header">
                            <h3>Kvalifikasjoner</h3>
                        </div>
                        <ul>
                            <li><span class="material-symbols-outlined">school</span> Dataingeniør bachelor</li>
                            <li><span class="material-symbols-outlined">public</span> 2 år fartstid i bransjen</li>
                            <li><span class="material-symbols-outlined">psychology</span> 5 år med konstant læring</li>
                        </ul>
                    </div>
                    <div class ="card">
                        <div class="header">
                            <h3>Dev miljø</h3>
                        </div>
                            <ul>
                                <li><span class="material-symbols-outlined">developer_board</span>Linux / ubuntu 22.04 LTS</li>
                                <li><span class="material-symbols-outlined">tile_large</span>i3 window manager</li>
                                <li><span class="material-symbols-outlined">terminal</span>kitty + tmux</li>
                                <li><span class="material-symbols-outlined">code</span>NeoVim / IntelliJ + Ideavim</li>
                                <li><span class="material-symbols-outlined">keyboard</span>ISO 105 NO qwerty TKL keyboard</li>
                                <li><span class="material-symbols-outlined">laptop_windows</span>Lenovo Thinkpad E14 G5</li>
                            </ul>
                    </div>
                    <div class="card">
                        <div class="header">
                            <h3>
                                Techstack
                            </h3>
                        </div>
                        <div class="icons flex">
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Java" src="../assets/icons/java.svg" />
                                <span class="tooltip ttop">Java</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Javascript" src="../assets/icons/js.svg" />
                                <span class="tooltip ttop">Javascript</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Typescript" src="../assets/icons/ts.svg" />
                                <span class="tooltip ttop">Typescript</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Bash" src="../assets/icons/bash.svg" />
                                <span class="tooltip ttop">Bash</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="C#" src="../assets/icons/csharp.svg" />
                                <span class="tooltip ttop">C#</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Python" src="../assets/icons/py.svg" />
                                <span class="tooltip ttop">Python</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Php" src="../assets/icons/php.svg" />
                                <span class="tooltip ttop">Php</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="CSS" src="../assets/icons/css.svg" />
                                <span class="tooltip ttop">CSS</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="HTML" src="../assets/icons/html.svg" />
                                <span class="tooltip ttop">HTML</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="PostgreSQL" src="../assets/icons/psql.svg" />
                                <span class="tooltip ttop">PostgreSQL</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="MariaDB" src="../assets/icons/mariadb.svg" />
                                <span class="tooltip ttop">MariaDB</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Jquery" src="../assets/icons/jquery.svg" />
                                <span class="tooltip ttop">Jquery</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Backbone" src="../assets/icons/backbonejs.svg" />
                                <span class="tooltip ttop">Backbone</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="React" src="../assets/icons/react.svg" />
                                <span class="tooltip ttop">React</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Vue" src="../assets/icons/vue.svg" />
                                <span class="tooltip ttop">Vue</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Git" src="../assets/icons/git.svg" />
                                <span class="tooltip ttop">Git</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Linux" src="../assets/icons/linux.svg" />
                                <span class="tooltip ttop">Linux</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Neovim" src="../assets/icons/nvim.svg" />
                                <span class="tooltip ttop">Neovim</span>
                            </figure>
                            <figure class="tooltip-holder">
                                <img class="icon" alt="Vim" src="../assets/icons/vim.svg" />
                                <span class="tooltip ttop">Vim</span>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class ="timeline" v-if="this.timeline">
            <p class="introduction">$ timeline</p>
            <Timeline class="tl" />
        </section>
    </div>
</template>

<script>
import Timeline from '../components/Timeline'
export default {
    name: 'MainView',
    components: {
        Timeline
    },
    mounted() {
        const wrapper = document.getElementById("wrapper");
        wrapper.addEventListener('scroll', this.onObserve);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onObserve);
    },
    methods: {
        onObserve() {
            const wrapper = document.getElementById("wrapper");
            if (wrapper.scrollTop > 500) {
                this.cards = true;
            }
            if (wrapper.scrollTop > 1700) {
                this.timeline = true;
            }
        }
    },
    data() {
        return {
            cards: false,
            timeline: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';

    section {
        height: 100vh;
        margin-bottom: 30vh;
    }

    .image-wrapper {
        img { width: 360px; filter: grayscale(1) contrast(1) brightness(.9); }
        animation: fadeInDelay 7s;
        min-height: 372px; min-width: 372px;
        border-radius: 1500vw; border: 2px solid $tetriary;
        .image-circle {
            height: 360px; width: 360px;
            position: relative; top: $spacing-1;
            margin: auto;
            overflow: hidden;
            border-radius: 1500vw;
        }
    }

    .flex {
        display: flex; flex-direction: row; justify-content: center; flex-wrap: wrap; align-items: center;
        gap: $spacing-3;
        &.intro { gap: $spacing-5; }
        &.cards { gap: $spacing-3; }
    }

    .about {
        h1 { padding: 0; animation: fadeInDelay 2s; }
        h3 { animation: fadeInDelay 4s; }
        p { animation: fadeInDelay 4s; }
        .introduction {
            clip-path: inset(0 0 0 0);
            animation: write 1s ease-in-out forwards;
            color: $tetriary;
            max-width: auto;
            margin-left: 0;
            margin-bottom: 0;
        }
    }

    .introduction {
        clip-path: inset(0 0 0 0);
        animation: write 1s ease-in-out forwards;
        color: $tetriary;
        max-width: 150px;
        margin-left: 17%;
        margin-bottom: $spacing-3;
    }

    .cards {  
        clip-path: inset(0 0 0 0);
        animation: writeDelay 2.4s;
        .card {
            background-color: $primary-offset;
            padding: $spacing-5; 
            width: 400px; height: 400px;
            .material-symbols-outlined {
                font-size: var(--step-2);
                position: relative;
                top: $spacing-1;
                margin-right: $spacing-1;
                color: $tetriary;
            }
            .header, ul, p {
                text-align: center;
            }
        }
    }

    .icons {
        gap: $spacing-3 $spacing-4;
        .icon {
            filter: grayscale(1) contrast(1) brightness(1);
            width: 40px;
        }
    }

    .timeline {
        margin: 400px 0;
        .introduction {
            text-align: center;
            margin: $spacing-4 auto;
        }
        .tl {
            clip-path: inset(0 0 0 0);
            animation: writeDownDelay 3s ease-in-out forwards;
        }
    }

    @media (max-width: $mobile-size) {
        .about {
            text-align: center;
        }

        h1, h2, h3, h4, p, li { text-align: center; margin: $spacing-2 0; }
    }
</style>
