<template>
    <div class="controller">
        <Transition>
            <HoverText v-if="this.indexLevel == 0 && this.zoomLevel == 0" type="5" subText="" header="Scroll ned!" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 1 && this.zoomLevel > 0" type="3" subText="Av Birk Johannessen" header="PrimeSpiral" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 2 && this.zoomLevel > 4" type="1" subText=".. i polarkoordinater" header="Visualisering av Primtall" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 3 && this.zoomLevel > 4" type="2" subText="Hver prikk representerer et primtall" header="Hmm?" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 4 && this.zoomLevel > 4" type="1" subText=".. Som er primtallets lengde fra sentrum .." header="" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 4 && this.zoomLevel > 4" type="2" subText=".. og vinklet i primtallets radian!" header="" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 5 && this.zoomLevel > 4" type="4" subText="Det former dette kule mønsteret!!" header="1, 3, 5, 7, 9, 13" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 8 && this.zoomLevel > 4" type="1" subText="Er hvor mange primtall du ser akkurat nå! (høyeste primtallet her er 524.287)" header="43.390" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 9 && this.zoomLevel > 4" type="2" subText="Originalt et python script som bare laget bilde du ser .." header="" />
        </Transition>
        <Transition>
            <HoverText v-if="this.indexLevel == 10 && this.zoomLevel > 4 && this.zoomLevel < 10" type="3" subText=".. Omgjort til et webskaleringsprosjekt!" header="" />
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