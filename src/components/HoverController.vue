<template>
    <div class="controller">
        <Transition>
            <HoverText v-if="this.indexLevel == 0 && this.zoomLevel == 0" type="5" subText="" header="Scroll ned!" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 5 && this.zoomLevel > 0" type="3" subText="Av Birk Johannessen" header="PrimeSpiral" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 7 && this.zoomLevel > 0" type="1" subText="... i polarkoordinater" header="Visualisering av primtall" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 9 && this.zoomLevel > 0" type="2" subText="Hver prikk representerer et primtall" header="Hmm?" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 11 && this.zoomLevel > 0" type="1" subText="... Som er sin egen lengde fra sentrum ..." header="Hmm?" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 13 && this.zoomLevel > 0" type="2" subText="... og vinklet i sin egen radian." header="Hmm?" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 15 && this.zoomLevel > 0" type="4" subText="... Former mønsteret" header="2, 3, 5, 7, 13, 17, 19, 23, 29" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 17" type="4" subText="(17, 9 øverst) Er antall primtall du ser akkurat nå. (høyeste med verdi 524.287)" header="43.390" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 18" type="2" subText="Er ganske kult. Det er 2^19-1 og derfor binært 0b1111111111111111111" header="Primtallet 524.287" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 19 && this.zoomLevel > 0" type="1" subText="Originalt et python script generete primespiral bilder ..." header="PrimeSpiral" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 20 && this.zoomLevel > 0" type="3" subText="... transformert dette interaktive webprosjektet!" header="PrimeSpiral" />
        </Transition>
    </div>
  
</template>

<script>
import HoverText from '../components/HoverText.vue'
export default {
    name: 'HoverController',
    props: {
        zoomLevel: Number,
        indexLevel: Number,

    },
    components: {
        HoverText
    },
}
</script>

<style>
.v-enter-active{
    transition: all 1s ease-out;
}
.v-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

</style>
