<template>
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
                labels: ['1', '6', '11', '16', '21', '26', '29'],
                datasets: [
                    {
                        label: 'WPM',
                        backgroundColor: 'gold',
                        borderColor: 'gold',
                        data: this.engine.gameInfo.wpmHistory
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
        width: 80vw;
        height: 300px;
    }
    .result-wrapper {
        animation: fadeIn 2s;
    }
</style>
