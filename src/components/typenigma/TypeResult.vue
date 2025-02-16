<template>
    <div class="header">
        <div class="wpm item">
            <h3>wpm</h3>
            <h1>{{this.engine.calculateFinalWPM()}}</h1>
        </div>
        <div class="percent item">
            <h1>{{this.engine.calculateCorrectPercentage()}}%</h1>
            <h3>acc</h3>
        </div>
    </div>
    <div class="result-wrapper">
        <Line :data="data" :options="options" class="chart" />
    </div>
</template>

<script>

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
ChartJS.defaults.backgroundColor = '#292736';
ChartJS.defaults.borderColor = 'rgba(0,0,0,0.15)';
ChartJS.defaults.color = '#77727D';

export default {
    name: 'TypeResult',
    props: {
        engine: Object,
    },
    components: {
        Line 
    },
    mounted() {
    },
    methods: {
        foo() {
        },
    },
    data() {
        return {
            data: {
                labels: this.engine.gameInfo.timeIntervals,
                datasets: [
                    {
                        label: 'WPM',
                        backgroundColor: 'gold',
                        borderColor: 'gold',
                        data: this.engine.gameInfo.wpmIntervals
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }  
                },
                scales: {
                    y: {
                        min: 0,
                        ticks: {
                            maxTicksLimit: 4
                        }
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';
    .chart {
        height: 300px;
    }
    .result-wrapper {
        min-width: 450px;
        width: 80vw;
        animation: fadeIn 2s;
    }
    .header {
        display: flex; gap: $spacing-4; justify-content: center;
        .item {
            display: flex; align-items: bottom; min-width: 250px;
            gap: $spacing-1;
            h1, h3 { color: inherit }
        }
    }
    .wpm {
        color: $color-secondary; justify-content: right;
    }
    .percent {
        color: $color-primary;
    }
    .miss {
        color: red;
    }
    @media (max-width: $mobile-size) {
        .header {
            .item {
                min-width: 0; width: 100px;
                h1 { color: inherit; font-size: var(--step-4); }
                h3 { color: inherit; font-size: var(--step-2); }
            }
        }
        .result-wrapper { min-width: 0; width: 100vw; }
    }
</style>
