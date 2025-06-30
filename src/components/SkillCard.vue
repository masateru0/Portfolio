<template>
    <div class="skill-card">
        <div class="skill-header">
            <h3 class="skill-title">{{ title }}</h3>
            <img :src="icon" alt="Skill Icon" class="skill-icon" />
        </div>
        <div class="description-area">
            <p class="skill-description">{{ description }}</p>
            <div class="stars">
                <span v-for="i in 5" :key="i" class="star" :class="{ active: i <= rating }">★</span>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    icon: String,
    description: String,
    rating: Number,
})
</script>
<style scoped>
.skill-card {
    background-color: #fff;
    width: 100%;
    max-width: 320px;
    height: 250px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
    box-shadow: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
.skill-header {
    background-color: #f0f2f3;
    padding: 0.5rem 1.2rem 0 1.2rem;
    text-align: center;
}
.skill-title {
    font-size: 2rem;
    font-weight: bold;
    color: #2c2c33;
    margin-bottom: 0.2rem;
    margin-top: 0;
    text-align: center;
}
.skill-icon {
    width: 48px;
    height: 48px;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
}
.description-area {
    padding: 0.7rem 1.2rem 1.2rem 1.2rem;
    text-align: center;
}
.skill-description {
    font-size: 15px;
    color: #222;
    margin-bottom: 0.7rem;
    text-align: center;
    min-height: 4.8em;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
}
.stars {
    display: flex;
    gap: 0.2rem;
    font-size: 1.4rem;
    color: #ccc;
    margin-left: 0;
    justify-content: center;
    align-items: center;
}
.star {
    color: #ccc;
}
.star.active {
    color: #ffd700;
}

@media (max-width: 768px) {
    .skill-card {
        max-width: 280px;
        height: 220px;
    }

    .skill-title {
        font-size: 1.8rem;
    }

    .skill-icon {
        width: 40px;
        height: 40px;
    }

    .skill-description {
        font-size: 14px;
        min-height: 4.2em;
    }

    .stars {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .skill-card {
        max-width: 250px;
        height: 200px;
    }

    .skill-header {
        padding: 0.4rem 1rem 0 1rem;
    }

    .skill-title {
        font-size: 1.6rem;
    }

    .skill-icon {
        width: 36px;
        height: 36px;
        margin-bottom: 0.8rem;
    }

    .description-area {
        padding: 0.6rem 1rem 1rem 1rem;
    }

    .skill-description {
        font-size: 13px;
        min-height: 3.8em;
        line-height: 1.5;
    }

    .stars {
        font-size: 1.1rem;
        gap: 0.15rem;
    }
}
</style>