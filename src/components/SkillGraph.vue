<template>
    <div :style="{ width: `${width}px`, height: `${height}px`, margin: '40px auto', background: '#fff' }">
        <canvas
        ref="radarRef"
        :width="props.width"
        :height="props.height"
        style="width: 100%; height: 100%;"
        ></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
    width: {
        type: Number,
        default: 324,
    },
    height: {
        type: Number,
        default: 237
    }
})

const radarRef = ref(null)

onMounted(() => {
    const ctx = radarRef.value.getContext('2d')
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'BootStrap', 'AWS', 'MySQL', 'Git'],
            datasets: [
                {
                    data: [8, 8, 7.5, 7.5, 7, 1, 1, 9],
                    backgroundColor: 'rgba(54, 162, 235, 0.3)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                },
            ],
        },
        options: {
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: { stepSize: 2 },
                },
            },
            plugins: {
                legend: {
                    display: true,
                },
                tooltip: {
                    enabled: true,
                }
            },
            layout: {
                padding: 10,
            },
            backgroundColor: '#F4FCFD',
        },
    })
})
</script>