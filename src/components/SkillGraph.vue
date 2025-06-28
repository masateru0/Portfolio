<template>
    <div style="width: 350px; margin: 40px auto; background: #f4fcfd">
        <canvas ref="radarRef" width="300" height="300"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const radarRef = ref(null)

onMounted(() => {
    const ctx = radarRef.value.getContext('2d')
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'BootStrap', 'AWS', 'MySQL', 'Git'],
            datasets: [
                {
                    label: 'スキルレベル',
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