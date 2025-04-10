<script setup>
    import { ref, onMounted, onUnmounted  } from 'vue'; 
    import Timeline from '@/components/Timeline.vue';

    const cards = ref(false);
    const timeline = ref(false);
    const sectionCards = ref(null);
    const sectionTimeline = ref(null);

    const icons = ref([
        { filename: '/icons/java.svg', name: 'Java'}, { filename: '/icons/js.svg', name: 'Javascript'}, { filename: '/icons/ts.svg', name: 'Typescript'},
        { filename: '/icons/bash.svg', name: 'Bash'}, { filename: '/icons/csharp.svg', name: 'C#'}, { filename: '/icons/py.svg', name: 'Python'},
        { filename: '/icons/php.svg', name: 'Php'}, { filename: '/icons/css.svg', name: 'CSS'}, { filename: '/icons/html.svg', name: 'HTML'},
        { filename: '/icons/psql.svg', name: 'PostgreSQL'}, { filename: '/icons/mariadb.svg', name: 'MariaDB'}, { filename: '/icons/jquery.svg', name: 'Jquery'},
        { filename: '/icons/backbonejs.svg', name: 'Backbone'}, { filename: '/icons/react.svg', name: 'React'}, { filename: '/icons/vue.svg', name: 'Vue'},
        { filename: '/icons/git.svg', name: 'Git'}, { filename: '/icons/linux.svg', name: 'Linux'}, { filename: '/icons/nvim.svg', name: 'Neovim'},
        { filename: '/icons/vim.svg', name: 'Vim'}
    ]);

    const observer = new IntersectionObserver(entries => {
                entries.filter(o => o.isIntersecting).forEach(entry => {
                    if (entry.target.id === 'section-cards') cards.value = true;
                    if (entry.target.id === 'section-timeline') timeline.value = true;
                });
            },
            { threshold: 0.35 }
        );

    onMounted(() => {
        [sectionCards, sectionTimeline]
            .forEach(el => observer.observe(el.value));
    });

    onUnmounted(() => {
        observer.disconnect();
    });
</script>

<template>
    <div class="wrapper">
        <section id="section-intro">
            <div class="flex intro">
                <div class="headshot">
                    <div class ="image-wrapper">
                        <div class="border"></div>
                        <div class ="image-circle">
                            <img alt="" src="../assets/birk.jpg" />
                        </div>
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
        <section class ="timeline extended" id="section-timeline" ref="sectionTimeline">
            <div v-if="timeline">
                <p class="introduction">$ timeline --short</p>
                <Timeline class="tl" />
            </div>
        </section>
        <section class="extended flex" id="section-cards" ref="sectionCards">
            <div v-if="cards">
                <p class="introduction">$ more</p>
                <div class="flex cards">
                    <div class ="card">
                        <div class="header">
                            <h3>Fullstack utvikler</h3>
                        </div>
                        <p><span class="hl">Elsker faget</span>, og jobben som lar meg praktisere det hver dag.</p>
                        <p>Interessert å utvide vertøykassa samtidig som jeg spisser de skarpeste redskapene der. Samarbeider godt i lag og er veldig mottakelig til diskusjon. Sier meningen min, og spør når jeg lurer på noe.</p>
                    </div>
                    <div class ="card">
                        <div class="header">
                            <h3>Machina</h3>
                        </div>
                        <p>Effektiviserer saksbehandling og tilskuddsløsninger for flere titalls kunder hos Machina. Daglig arbeid med de <span class="hl">fremste featurene</span> i produktet inklusivt flere integrasjoner. Som regel ansvarlig for hele funksjonaliteter, fra spec til master merge.</p>
                    </div>
                    <div class ="card">
                        <div class="header">
                            <h3>Effektiv</h3>
                        </div>
                        <p>Lidenskapelig opptatt av å være rask! Enten det er å redigere tekst med <span class="hl">vim</span>, scripte vekk kjedelige oppgaver, tillære shortcuts til programvarer, utnytte tekstgenererende AI, meste touchtyping eller prøve å få over 115wpm på racetyping. </p>
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
                            <div v-for="icon in icons" :id="name">
                                <figure class="tooltip-holder">
                                    <img class="icon" :alt="icon.name" :src="`${icon.filename}`" />
                                    <span class="tooltip ttop">Java</span>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/_tooltip.scss' as tt;
    @use '@/assets/stylesheets/vars.scss' as vars;

    section {
        height: 100dvh;
        margin-bottom: 30dvh;
        padding: 0 vars.$spacing-2;
        overflow: hidden;
        &.extended { min-height: 100dvh; height: auto; }
    }

    .image-wrapper {
        animation: fadeInDelay 7s;
        min-width: 250px; width: 100%; max-width: 360px; aspect-ratio: 1;
        position: relative;
        .border {
            position: absolute; top: -7px; left: -7px;
            width: calc(100% + 10px); height: calc(100% + 10px);
            border-radius: 1500vw; border: 2px solid vars.$tetriary;
        }
        .image-circle {
            img { width: 100%; filter: grayscale(1) contrast(1) brightness(.9); }
            aspect-ratio: 1;
            position: absolute; top: 1px;
            overflow: hidden;
            border-radius: 1500vw;
        }
    }

    .headshot {
        flex: 0 1 360px;
    }

    .intro {
        position: relative; top: 50%;
        transform: translateY(-50%)
    }

    .flex {
        display: flex; flex-direction: row; justify-content: center; align-items: center; gap: vars.$spacing-3; flex-wrap: wrap; 
    }

    .about {
        min-width: 300px;
        padding: 0 vars.$spacing-2;
        h1 { padding: 0; animation: fadeInDelay 2s; }
        h3 { animation: fadeInDelay 4s; }
        p { animation: fadeInDelay 4s; }
        .introduction {
            animation: write 1s ease-in-out forwards;
            margin: 0;
        }
    }

    .introduction {
        clip-path: inset(0 0 0 0);
        animation: write 1s ease-in-out forwards;
        color: vars.$tetriary;
        max-width: 250px;
        margin-left: 17%;
        margin-bottom: vars.$spacing-3;
    }

    .cards {  
        clip-path: inset(0 0 0 0);
        animation: writeDelay 2.4s;
        .card {
            background-color: vars.$primary-offset;
            padding: vars.$spacing-5; 
            max-width: 400px;
            min-height: 300px;
            width: 100%;
            .material-symbols-outlined {
                font-size: var(--step-2);
                position: relative;
                top: vars.$spacing-1;
                margin-right: vars.$spacing-1;
                color: vars.$tetriary;
            }
            .header, ul, p {
                text-align: center;
            }
        }
    }

    .icons {
        gap: vars.$spacing-3 vars.$spacing-4;
        .icon {
            filter: grayscale(1) contrast(1) brightness(1);
            width: 40px;
        }
    }

    .timeline {
        margin: 400px 0;
        .introduction {
            text-align: center;
            margin: vars.$spacing-4 auto;
        }
        .tl {
            clip-path: inset(0 0 0 0);
            animation: writeDownDelay 3s ease-in-out forwards;
        }
    }

    .hl {
        color: vars.$tetriary;
    }

    @media (max-width: vars.$mobile-size) {
        section { margin-bottom: vars.$spacing-2; }

        h1, h2, h3, h4, p, li { text-align: center; margin: vars.$spacing-2 0; }

        .intro { 
            position: relative; top: vars.$spacing-2; transform: translateY(0);
            &.flex { flex-wrap: wrap-reverse; }
            .headshot { flex: 0 1 300px; }
            .image-wrapper { min-width: 250px; max-width: 300px; }
            .about {
                text-align: center;
                .introduction { max-width: 100%; width: 150px; margin: auto; }
            }
        }

        .timeline { margin: vars.$spacing-4 0 100px 0;  }

        .cards {
            .card { padding: vars.$spacing-1; }
        }
    }
</style>
