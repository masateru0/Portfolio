<template>
    <el-card class="skill-card" shadow="hover">
        <div class="skill-header">
            <h3 class="skill-title">{{ title }}</h3>
            <img :src="icon" alt="Skill Icon" class="skill-icon" />
        </div>

        <div class="description-area">
            <p class="skill-description">{{ description }}</p>
            <div class="stars">
                <el-icon v-for="i in 5" :key="i" class="star" :class="{ active: i <= rating }">
                    <Star />
                </el-icon>
            </div>
        </div>
    </el-card>
</template>

<script setup>
import { Star } from '@element-plus/icons-vue'

defineProps({
    title: String,
    icon: String,
    description: String,
    rating: Number,
})
</script>

<style scoped>
.skill-card {
    background-color: #d6f2f8;
    width: 280px;
    height: 250px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
}

.skill-header {
    background-color: #73d1e8;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.skill-title {
    font-size: 32px;
    font-weight: bold;
    color: #583c27;
    margin-bottom: 0.5rem;
}

.skill-icon {
    width: 46px;
    height: 46px;
}

.description-area {
    height: 50%;
    background-color: #d6f2f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    text-align: center;
}

.skill-description {
    font-size: 14px;
    color: #000;
    margin-bottom: 0.5rem;
}

.stars {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
}

.star {
    font-size: 20px;
    color: #ccc;
}

.star.active {
    color: #FFD700;
}
</style>
