<template>
    <div class="controller">
        <HoverText v-if="this.idxLevel([0])" type="5" subText="" header="Scroll ned!" />
        <HoverText v-if="this.idxLevel([5])" type="3" subText="Av Birk Johannessen" header="PrimeSpiral" />
        <HoverText v-if="this.idxLevel([7])" type="1" subText="... i polarkoordinater" header="Visualisering av primtall" />
        <HoverText v-if="this.idxLevel([9])" type="2" subText="Hver prikk representerer et primtall" header="Hmm?" />
        <HoverText v-if="this.idxLevel([11])" type="1" subText="... Som er sin egen lengde fra sentrum ..." header="Hmm?" />
        <HoverText v-if="this.idxLevel([13])" type="2" subText="... og vinklet i sin egen radian." header="Hmm?" />
        <HoverText v-if="this.idxLevel([15])" type="4" subText="... Former mønsteret" header="2, 3, 5, 7, 13, 17, 19, 23, 29" />
        <HoverText v-if="this.idxLevel([17])" type="4" subText="(17, 9 øverst) Er antall primtall du ser akkurat nå. (høyeste med verdi 524.287)" header="43.390" />
        <HoverText v-if="this.idxLevel([18])" type="2" subText="Er ganske kult. Det er 2^19-1 og derfor binært 0b1111111111111111111" header="Primtallet 524.287" />
        <HoverText v-if="this.idxLevel([20])" type="1" subText="Originalt et python script generete primespiral bilder ..." header="PrimeSpiral" />
        <HoverText v-if="this.idxLevel([21])" type="3" subText="... transformert dette interaktive webprosjektet!" header="PrimeSpiral" />
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
