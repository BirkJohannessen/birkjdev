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
                    <h2>Fullstack utvikler</h2>
                    <p>Effektiviserer saksbehandling og tilskudd for flere titalls kunder hos Machina. Daglig arbeid med de fremste featurene i produktet inklusivt flere integrasjoner. Som regel ansvarlig for hele funksjonaliteter, fra spec til master merge.</p>
                    <p>Elsker faget, og elsker jobben som lar meg praktisere det hver dag.</p>
                    <p>Interessert å utvide vertøykassa samtidig som jeg spisser de skarpeste redskapene der. Samarbeider godt i lag og er veldig mottakelig til diskusjon. Sier meningen min, og spør når jeg lurer på noe.-</p>
                </div>
            </div>
            <div class ="content">
                <div class ="infobox">
                    <h2>Techstack</h2>
                </div>
                <div class ="infobox">
                    <h2>Fullstack utvikler</h2>
                    <p>- av yrke, men ikke eksklusivt. Sitter på en bred teknisk interrese. Spør meg om hjemmeserverene mine, Linux configen min eller hacking!</p>
                    <h2>Effetiv</h2>
                    <p>Lidenskapelig opptatt av å være rask! Enten det er å redigere tekst med vim, scripte vekk kjedelige oppgaver, lære shortcuts til programvarer, utnytte tekstgenererende AI, meste touchtyping eller prøve å få over 115wpm på racetyping. </p>
                </div>
                <div class ="infobox">
                    <h2>Dev miljø</h2>
                    <p>Linux / ubuntu 22.04 LTS
                        i3 window manager
                        tmux
                        NeoVim / IntelliJ + Ideavim
                        Single monitor setup
                        ISO 105 NO qwerty TKL keyboard
                        Varmilo VEA88M MX Pink
                        Capslock -> Escape
                        Lenovo Thinkpad E14 G5
                    </p>
                    <h2>Kvalifikasjoner</h2>
                    <p>Utdannet Dataingeniør fra HVL
                        1 år i bransjen
                    </p>
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
    p { font-size: 20px; color: #77727D; white-space: pre-wrap; }
    h2 { font-size: 24px; color: #AFA5BB;}
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
            .image-circle {
                height: 440px; width: 440px;
                position: relative; top: 10px;
                margin: auto;
                overflow: hidden;
                border-radius: 450px;
            }
        }
        .about {
            width: 650px; height: auto; margin: auto 0;
        }
    }
    .content {
        padding: 16px 0;
        height: auto; width: 100%;
        display: flex; flex-direction: row; gap: 10px; justify-content: center; 
        .infobox {
            padding: 12px;
            max-width: 480px;
        }
    }
    .timeline {
        margin: 400px 0;
        h2 { text-align: center; }
    }
</style>
