<template>
    <section class="works-section">
        <ContentsText title="Works" />

        <div class="works-grid">
            <WorkCard
                v-for="(work, index) in works"
                :key="index"
                :title="work.title"
                description="work.description"
                :image="work.image"
            />
        </div>
    </section>
</template>

<script setup>
import ContentsText from '@/components/ContentsText.vue'
import WorkCard from '@/components/WorkCard.vue'

const works = [
    {
        title: 'ポートフォリオサイト',
        description: 'Desine / Coding',
        image: new URL('@/assets/about-me-img.jpg', import.meta.url).href
    },
    {
        title: 'ポートフォリオサイト',
        description: 'Desine / Coding',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href
    },
    {
        title: 'ポートフォリオサイト',
        description: 'Desine / Coding',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href
    },
    {
        title: 'ポートフォリオサイト',
        description: 'Desine / Coding',
        image: new URL('@/assets/about-me-img.jpg', import.meta.url).href
    },
    {
        title: 'ポートフォリオサイト',
        description: 'Desine / Coding',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href
    },
    {
        title: 'ポートフォリオサイト',
        description: 'Desine / Coding',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href
    },
]
</script>

<style scoped>
.works-section {
    background-color: #D6F2F8;
    padding: 4rem 2rem;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin-inline: auto;
    margin-bottom: 2rem;
    margin-top: 3rem;
}
</style>