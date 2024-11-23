<template>
    <div class="controller">
        <HoverText class="text" :class="this.idxLevel([0]) ? 'visible' : ''" type="5" subText="" header="Scroll ned!" />
        <HoverText class="text" :class="this.idxLevel([5]) ? 'visible' : ''" type="3" subText="Av Birk Johannessen" header="PrimeSpiral" />
        <HoverText class="text" :class="this.idxLevel([7]) ? 'visible' : ''" type="1" subText="... i polarkoordinater" header="Visualisering av primtall" />
        <HoverText class="text" :class="this.idxLevel([9]) ? 'visible' : ''" type="2" subText="Hver prikk representerer et primtall" header="Hmm?" />
        <HoverText class="text" :class="this.idxLevel([11]) ? 'visible' : ''" type="1" subText="... Som er sin egen lengde fra sentrum ..." header="Hmm?" />
        <HoverText class="text" :class="this.idxLevel([13]) ? 'visible' : ''" type="2" subText="... og vinklet i sin egen radian." header="Hmm?" />
        <HoverText class="text" :class="this.idxLevel([15]) ? 'visible' : ''" type="4" subText="... Former mønsteret" header="2, 3, 5, 7, 13, 17, 19, 23, 29" />
        <HoverText class="text" :class="this.idxLevel([17]) ? 'visible' : ''" type="4" subText="(17, 9 øverst) Er antall primtall du ser akkurat nå. (høyeste med verdi 524.287)" header="43.390" />
        <HoverText class="text" :class="this.idxLevel([18]) ? 'visible' : ''" type="2" subText="Er ganske kult. Det er 2^19-1 og derfor binært 0b1111111111111111111" header="Primtallet 524.287" />
        <HoverText class="text" :class="this.idxLevel([20]) ? 'visible' : ''" type="1" subText="Originalt et python script generete statiske bilder ..." header="PrimeSpiral" />
        <HoverText class="text" :class="this.idxLevel([21]) ? 'visible' : ''" type="5" subText="... transformert dette interaktive webprosjektet!" header="PrimeSpiral" />
    </div>
  
</template>

<script>
import HoverText from './HoverText.vue'
export default {
    name: 'HoverController',
    components: {
        HoverText
    },
    props: {
        zoomLevel: Number,
        indexLevel: Number,

    },
    methods: {
        idxLevel(range) {
            return range.includes(this.indexLevel);
        }
    }
}
</script>

<style lang="css">
.text {
    transition: opacity 0.8s ease-in-out;
    opacity: 0;
    &.visible {
        opacity: 1;
    }
}
</style>
