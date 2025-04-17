<script setup lang="ts">
    import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, type ChartOptions, type ChartData } from 'chart.js';
    import { Line } from 'vue-chartjs';
    import type TypenigmaEngine from '@/typenigma/TypenigmaEngine';

    ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    ChartJS.defaults.backgroundColor = '#292736';
    ChartJS.defaults.borderColor = 'rgba(0,0,0,0.15)';
    ChartJS.defaults.color = '#77727D';

    const props = defineProps<{
        engine: TypenigmaEngine 
    }>();

    const data: ChartData<'line', (number | null)[], string[]> = {
        labels: props.engine.gameInfo.timeIntervals,
        datasets: [
            {
                label: 'WPM',
                backgroundColor: 'gold',
                borderColor: 'gold',
                data: props.engine.gameInfo.wpmIntervals
            }
        ]
    };

    const options: ChartOptions<'line'> = {
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
    };
</script>

<template>
    <div class="header">
        <div class="wpm item">
            <h3>wpm</h3>
            <h1>{{engine.calculateFinalWPM()}}</h1>
        </div>
        <div class="percent item">
            <h1>{{engine.calculateCorrectPercentage()}}%</h1>
            <h3>acc</h3>
        </div>
    </div>
    <div class="result-wrapper">
        <Line :data="data" :options="options" class="chart" />
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/vars.scss' as vars;

    .chart {
        height: 300px;
    }

    .result-wrapper {
        min-width: 450px;
        width: 80vw;
        animation: fadeIn 2s;
    }

    .header {
        display: flex; gap: vars.$spacing-4; justify-content: center;
        .item {
            display: flex; align-items: bottom; min-width: 250px;
            gap: vars.$spacing-1;
            h1, h3 { color: inherit }
        }
    }

    .wpm {
        color: vars.$color-secondary; justify-content: right;
    }

    .percent {
        color: vars.$color-primary;
    }

    .miss {
        color: red;
    }

    @media (max-width: vars.$mobile-size) {
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
