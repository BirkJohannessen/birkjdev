<template>
    <div class="wrapper">
        <div class="content">
            <div class ="main">
                <div class ="top">
                    <div class ="image-wrapper">
                        <div class ="image-circle">
                            <img alt="" src="../assets/birk.jpg" />
                        </div>
                    </div>
                    <div class ="about">
                        <h1>Birk Johannessen</h1>
                        <p>Effektiviserer saksbehandling og tilskuddsløsninger for flere titalls kunder hos Machina. Daglig arbeid med de fremste featurene i produktet inklusivt flere integrasjoner. Som regel ansvarlig for hele funksjonaliteter, fra spec til master merge.</p>
                        <p>Elsker faget, og elsker jobben som lar meg praktisere det hver dag.</p>
                        <p>Interessert å utvide vertøykassa samtidig som jeg spisser de skarpeste redskapene der. Samarbeider godt i lag og er veldig mottakelig til diskusjon. Sier meningen min, og spør når jeg lurer på noe.</p>
                    </div>
                </div>
                <div class ="info">
                    <div class ="infobox">
                        <h3>Techstack<span class="material-symbols-outlined pointer" @click="console.log(';)')">help</span></h3>
                        <div class="icons">
                            <img class="icon" alt="Java" src="../assets/icons/java.svg" />
                            <img class="icon" alt="Javascript" src="../assets/icons/js.svg" />
                            <img class="icon" alt="Typescript" src="../assets/icons/ts.svg" />
                            <img class="icon" alt="Bash" src="../assets/icons/bash.svg" />
                            <img class="icon" alt="C#" src="../assets/icons/csharp.svg" />
                            <img class="icon" alt="Python" src="../assets/icons/py.svg" />
                            <img class="icon" alt="Php" src="../assets/icons/php.svg" />
                            <img class="icon" alt="CSS" src="../assets/icons/css.svg" />
                            <img class="icon" alt="HTML" src="../assets/icons/html.svg" />
                            <img class="icon" alt="PostgreSQL" src="../assets/icons/psql.svg" />
                            <img class="icon" alt="MariaDB" src="../assets/icons/mariadb.svg" />
                            <img class="icon" alt="Jquery" src="../assets/icons/jquery.svg" />
                            <img class="icon" alt="Backbone" src="../assets/icons/backbonejs.svg" />
                            <img class="icon" alt="React" src="../assets/icons/react.svg" />
                            <img class="icon" alt="Vue" src="../assets/icons/vue.svg" />
                            <img class="icon" alt="Git" src="../assets/icons/git.svg" />
                            <img class="icon" alt="Linux" src="../assets/icons/linux.svg" />
                            <img class="icon" alt="Neovim" src="../assets/icons/nvim.svg" />
                            <img class="icon" alt="Vim" src="../assets/icons/vim.svg" />
                        </div>
                    </div>
                    <div class ="infobox">
                        <h3>Fullstack utvikler</h3>
                        <p>- av yrke, men ikke eksklusivt. Sitter på en bred teknisk interrese. Spør meg om hjemmeserverene mine, Linux configen min eller hacking!</p>
                        <h3>Effektiv</h3>
                        <p>Lidenskapelig opptatt av å være rask! Enten det er å redigere tekst med vim, scripte vekk kjedelige oppgaver, tillære shortcuts til programvarer, utnytte tekstgenererende AI, meste touchtyping eller prøve å få over 115wpm på racetyping. </p>
                    </div>
                    <div class ="infobox">
                        <h3>Dev miljø</h3>
                            <ul>
                                <li>Linux / ubuntu 22.04 LTS</li>
                                <li>i3 window manager</li>
                                <li>kitty + tmux</li>
                                <li>NeoVim / IntelliJ + Ideavim</li>
                                <li>ISO 105 NO qwerty TKL keyboard</li>
                                <li>Lenovo Thinkpad E14 G5</li>
                            </ul>
                        <h3>Kvalifikasjoner</h3>
                        <ul>
                            <li>Utdannet Dataingeniør fra HVL</li>
                            <li>1 år i bransjen</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class ="timeline">
                <h1>Highlights</h1>
                <Timeline/>
            </div>
        </div>
    </div>
</template>

<script>
import Timeline from '../components/Timeline'
export default {
    name: 'MainView',
    components: {
        Timeline
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
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';

    img { width: 360px; filter: grayscale(1) contrast(1) brightness(.9); }

    .image-wrapper {
        animation: fadeInDelay 2s;
        min-height: 372px; min-width: 372px; margin: auto 0;
        border-radius: 1500vw; border: 2px solid white;
            .image-circle {
                height: 360px; width: 360px;
                position: relative; top: $spacing-1;
                margin: auto;
                overflow: hidden;
                border-radius: 1500vw;
            }
    }

    .main {
        max-width: 1500px; height: auto;
        margin: auto;
    }

    .top {
        width: 100%;
        margin: 50px 0;
        display: flex; flex-direction: row; gap: 50px; justify-content: center; flex-wrap: wrap;
        .about {
            animation: fadeInDelay 1s;
            width: 650px; height: auto; margin: auto 0;
        }
    }

    .info {
        padding: $spacing-3 0;
        height: auto; width: 100%;
        display: flex; flex-direction: row; gap: $spacing-2; justify-content: center; flex-wrap: wrap;
        .infobox {
            padding: $spacing-2;
            max-width: 480px;
            animation: fadeInDelay 3s;
        }
    }

    .timeline {
        margin: 400px 0;
        h1 { 
            text-align: center;
            margin-bottom: $spacing-4;
        }
    }

    .icons {
        width: 300px;
        display: flex;
        flex-wrap: wrap;
        gap: $spacing-3 $spacing-4;
    }
    .icon {
        filter: grayscale(1) contrast(1) brightness(1);
        width: 40px;
    }

    .material-symbols-outlined {
        font-size: var(--step--1);
        display: inline-block;
        margin: var(--step--1) auto;
        margin: 0 $spacing-1;
    }

    @media (max-width: $mobile-size) {
        .about {
            text-align: center;
        }
    }
</style>
