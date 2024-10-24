<template>
    <div class="wrapper">
        <div class ="main">
            <div class ="top">
                <div class ="image-wrapper">
                    <div class ="image-circle">
                        <img src="../assets/birk.jpg" />
                    </div>
                </div>
                <div class ="about">
                    <h1>Birk Johannessen</h1>
                    <p>Effektiviserer saksbehandling og tilskuddsløsninger for flere titalls kunder hos Machina. Daglig arbeid med de fremste featurene i produktet inklusivt flere integrasjoner. Som regel ansvarlig for hele funksjonaliteter, fra spec til master merge.</p>
                    <p>Elsker faget, og elsker jobben som lar meg praktisere det hver dag.</p>
                    <p>Interessert å utvide vertøykassa samtidig som jeg spisser de skarpeste redskapene der. Samarbeider godt i lag og er veldig mottakelig til diskusjon. Sier meningen min, og spør når jeg lurer på noe.</p>
                </div>
            </div>
            <div class ="content">
                <div class ="infobox">
                    <h2>Techstack</h2>
                    <div class="icons">
                        <img class="icon" src="../assets/icons/java.svg" />
                        <img class="icon" src="../assets/icons/js.svg" />
                        <img class="icon" src="../assets/icons/ts.svg" />
                        <img class="icon" src="../assets/icons/bash.svg" />
                        <img class="icon" src="../assets/icons/csharp.svg" />
                        <img class="icon" src="../assets/icons/py.svg" />
                        <img class="icon" src="../assets/icons/php.svg" />
                        <img class="icon" src="../assets/icons/css.svg" />
                        <img class="icon" src="../assets/icons/html.svg" />
                        <img class="icon" src="../assets/icons/psql.svg" />
                        <img class="icon" src="../assets/icons/mariadb.svg" />
                        <img class="icon" src="../assets/icons/jquery.svg" />
                        <img class="icon" src="../assets/icons/backbonejs.svg" />
                        <img class="icon" src="../assets/icons/react.svg" />
                        <img class="icon" src="../assets/icons/vue.svg" />
                        <img class="icon" src="../assets/icons/git.svg" />
                        <img class="icon" src="../assets/icons/linux.svg" />
                        <img class="icon" src="../assets/icons/nvim.svg" />
                        <img class="icon" src="../assets/icons/vim.svg" />
                    </div>
                </div>
                <div class ="infobox">
                    <h2>Fullstack utvikler</h2>
                    <p>- av yrke, men ikke eksklusivt. Sitter på en bred teknisk interrese. Spør meg om hjemmeserverene mine, Linux configen min eller hacking!</p>
                    <h2>Effektiv</h2>
                    <p>Lidenskapelig opptatt av å være rask! Enten det er å redigere tekst med vim, scripte vekk kjedelige oppgaver, tillære shortcuts til programvarer, utnytte tekstgenererende AI, meste touchtyping eller prøve å få over 115wpm på racetyping. </p>
                </div>
                <div class ="infobox">
                    <h2>Dev miljø</h2>
                        <ul>
                            <li>Linux / ubuntu 22.04 LTS</li>
                            <li>i3 window manager</li>
                            <li>kitty + tmux</li>
                            <li>NeoVim / IntelliJ + Ideavim</li>
                            <li>ISO 105 NO qwerty TKL keyboard</li>
                            <li>Lenovo Thinkpad E14 G5</li>
                        </ul>
                    <h2>Kvalifikasjoner</h2>
                    <ul>
                        <li>Utdannet Dataingeniør fra HVL</li>
                        <li>1 år i bransjen</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class ="timeline">
            <h2>Highlights</h2>
            <Timeline/>
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

<style scoped>
    img { width: 450px; }
    p  { font-size: 20px; color: #77727D; word-wrap: break-word; }
    li { font-size: 20px; color: #77727D; list-style-type: none;  word-wrap: break-word; }
    ul { padding: 5px 0 5px 0; margin: 0; }
    h2 { font-size: 24px; color: white;}
    .span-gold { color: gold; }
    .wrapper {
        width: 100%; height: 100vh;
        background-color: #292736; color: white;
        overflow-y: scroll;
    }
    .main {
        max-width: 1500px; height: auto;
        margin: auto;
    }
    .top {
        width: 100%; height: 508px;
        margin: 50px 0;
        display: flex; flex-direction: row; gap: 50px; justify-content: center;
        .image-wrapper {
            min-height: 460px; min-width: 460px; margin: auto 0;
            border-radius: 450px; border: 2px solid white;
            animation: fadeInDelay 2s;
                .image-circle {
                    filter: grayscale(1) contrast(1) brightness(.9);
                    height: 440px; width: 440px;
                    position: relative; top: 10px;
                    margin: auto;
                    overflow: hidden;
                    border-radius: 450px;
                }
        }
        .about {
            animation: fadeInDelay2 1s;
            width: 650px; height: auto; margin: auto 0;
        }
    }
    @keyframes fadeInDelay {
        0% {
            opacity: 0;
            transform: translate(-120px, 0%);
        }
        50% {
            opacity: 0;
            transform: translate(-120px, 0%);
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeInDelay2 {
        0% {
            opacity: 0;
            transform: translate(120px, 0%);
        }
        20% {
            opacity: 0;
            transform: translate(120px, 0%);
        }
        100% { 
            opacity: 1;
        }
    }
    @keyframes fadeInDelay3 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% { 
            opacity: 1;
        }
    }
    .content {
        padding: 16px 0;
        height: auto; width: 100%;
        display: flex; flex-direction: row; gap: 10px; justify-content: center; 
        .infobox {
            padding: 12px;
            max-width: 480px;
            word-break: break-all;
            animation: fadeInDelay3 4s;
        }
    }
    .timeline {
        margin: 400px 0;
        h2 { text-align: center; }
    }
    .icons {
        width: 300px;
        display: flex;
        flex-wrap: wrap;
        gap: 2px 20px;
        filter: grayscale(1) contrast(1) brightness(1);
        .icon {
            width: 40px;
            height: 60px;
        }
    }
</style>
