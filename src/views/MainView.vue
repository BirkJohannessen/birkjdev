<script setup lang="ts">
    import { ref, onMounted, onUnmounted  } from 'vue'; 
    import type { Ref } from 'vue'; 
    import Timeline from '@/components/Timeline.vue';
    import { icons } from '@/config/AboutConfig';
    import type LanguageIcon from '@/models/about/LanguageIcon';

    const cards: Ref<boolean> = ref(false);
    const timeline: Ref<boolean> = ref(false);

    const timelineIntro: Ref<boolean> = ref(false);

    const sectionCards: Ref<HTMLElement | null> = ref(null);
    const sectionTimeline: Ref<HTMLElement | null> = ref(null);

    const langIcons: Ref<LanguageIcon[]> = ref(icons);

    const observer = new IntersectionObserver(entries => {
                entries.filter(o => o.isIntersecting).forEach(entry => {
                    if (entry.target.id === 'section-cards') cards.value = true;
                    if (entry.target.id === 'section-timeline') {
                        timelineIntro.value = true;
                        setTimeout(() => { timeline.value = true; }, 1000);
                    }
                });
            },
            { threshold: 0.35 }
        );

    onMounted(() => {
        [sectionCards, sectionTimeline].forEach((el: Ref<HTMLElement | null>) => {
            if (el.value) observer.observe(el.value);
        });
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
                            <img alt="" src="../assets/birk.jpg" loading="lazy" />
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
            <p v-if="timelineIntro" class="introduction">$ timeline --short</p>
            <Timeline v-if="timeline" />
        </section>
        <section class="extended flex" id="section-cards" ref="sectionCards">
            <div v-if="cards">
                <p class="introduction">$ more</p>
                <div class="flex cards">
                    <div class ="card card-0">
                        <div class="header">
                            <h3>Fullstack utvikler</h3>
                        </div>
                        <p><span class="hl">Elsker faget</span>, og jobben som lar meg praktisere det hver dag.</p>
                        <p>Interessert å utvide vertøykassa samtidig som jeg spisser de skarpeste redskapene der. Samarbeider godt i lag og er veldig mottakelig til diskusjon. Sier meningen min, og spør når jeg lurer på noe.</p>
                    </div>
                    <div class ="card card-1">
                        <div class="header">
                            <h3>Machina</h3>
                        </div>
                        <p>Effektiviserer saksbehandling og tilskuddsløsninger for flere titalls kunder hos Machina. Daglig arbeid med de <span class="hl">fremste featurene</span> i produktet inklusivt flere integrasjoner. Som regel ansvarlig for hele funksjonaliteter, fra spec til master merge.</p>
                    </div>
                    <div class ="card card-2">
                        <div class="header">
                            <h3>Effektiv</h3>
                        </div>
                        <p>Lidenskapelig opptatt av å være rask! Enten det er å redigere tekst med <span class="hl">vim</span>, scripte vekk kjedelige oppgaver, tillære shortcuts til programvarer, utnytte tekstgenererende AI, meste touchtyping eller prøve å få over 115wpm på racetyping. </p>
                    </div>
                    <div class ="card card-3">
                        <div class="header">
                            <h3>Kvalifikasjoner</h3>
                        </div>
                        <div class="ul-wrapper">
                            <ul>
                                <li><span class="material-symbols-outlined">school</span> Dataingeniør bachelor</li>
                                <li><span class="material-symbols-outlined">public</span> 2 år fartstid i bransjen</li>
                                <li><span class="material-symbols-outlined">psychology</span> 5 år med konstant læring</li>
                            </ul>
                        </div>
                    </div>
                    <div class ="card card-4">
                        <div class="header">
                            <h3>Dev miljø</h3>
                        </div>
                        <div class="ul-wrapper">
                            <ul>
                                <li><span class="material-symbols-outlined">developer_board</span>Linux / ubuntu 22.04 LTS</li>
                                <li><span class="material-symbols-outlined">tile_large</span>i3 window manager</li>
                                <li><span class="material-symbols-outlined">terminal</span>kitty + tmux</li>
                                <li><span class="material-symbols-outlined">code</span>NeoVim / IntelliJ + Ideavim</li>
                                <li><span class="material-symbols-outlined">keyboard</span>ISO 105 NO qwerty TKL keyboard</li>
                                <li><span class="material-symbols-outlined">laptop_windows</span>Lenovo Thinkpad E14 G5</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card card-5">
                        <div class="header">
                            <h3>
                                Techstack
                            </h3>
                        </div>
                        <div class="icons flex">
                            <div v-for="icon in langIcons">
                                <figure class="tooltip-holder">
                                    <img class="icon" :alt="icon.name" :src="`${icon.filename}`" />
                                    <span class="tooltip ttop">{{icon.name}}</span>
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
        .card {
            animation: fadeIn 1s forwards; opacity: 0;
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
            .header, p {
                text-align: center;
            }
            .ul-wrapper {
                margin: auto;
                display: flex; width: fit-content;
            }

            &.card-0 { animation-delay: .7s }
            &.card-1 { animation-delay: .85s }
            &.card-2 { animation-delay: 1s }
            &.card-3 { animation-delay: 1.15s }
            &.card-4 { animation-delay: 1.3s }
            &.card-5 { animation-delay: 1.45s }
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
    }

    .hl {
        color: vars.$tetriary;
    }

    @media (max-width: vars.$mobile-size) {
        section { margin-bottom: vars.$spacing-2; }

        h1, h2, h3, h4, p { text-align: center; margin: vars.$spacing-2 0; }

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
