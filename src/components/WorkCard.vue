<template>
    <el-card class="work-card" shadow="hover" style="max-width: 300px">
        <template #header>
            <div class="card-header">
                <h3 class="work-title">{{ title }}</h3>
                <p class="work-description">{{ description }}</p>
            </div>
        </template>

        <img :src="image" alt="Work Image" class="work-img" />
    </el-card>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
})
</script>

<style scoped>
.work-card {
    border-radius: 5px;
    overflow: hidden;
    padding: 0;
    transition: transform 0.2s;
    width: 1200px;
    height: auto;
}

.work-card:hover {
    transform: translateY(-5px);
}

.card-header {
    max-width: 220px;
    max-height: 40px;
    text-align: center;
    margin: 0 auto;
}

.work-img {
    width: 100%;
    height: auto;
    border-radius: 4px 4px 0 0;
}

.work-info {
    padding: 1rem;
    text-align: center;
}

.work-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.work-description {
    font-size: 14px;
    color: #666;
}
</style>
