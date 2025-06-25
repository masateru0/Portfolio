<template>
    <section class="works-section">
        <ContentsText title="Works" class="works-title" />
        <div class="works-grid">
            <WorkCard
                v-for="(work, index) in works"
                :key="index"
                :title="work.title"
                :description="work.description"
                :image="work.image"
                @click="openDialog(work)"
            />
        </div>
        <WorksDialog
            v-model:visible="dialogVisible"
            :title="selectedWork.title"
            :description="selectedWork.description"
            :image="selectedWork.image"
        />
    </section>
</template>
<script setup>
import { ref } from 'vue'
import ContentsText from '@/components/ContentsText.vue'
import WorkCard from '@/components/WorkCard.vue'
import WorksDialog from '@/components/WorksDialog.vue'
const works = [
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/about-me-img.jpg', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: [''],
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/tip.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: [''],
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: [''],
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/about-me-img.jpg', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: [''],
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: [''],
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: [''],
    },
]
const dialogVisible = ref(false)
const selectedWork = ref({
    title: '',
    description: '',
    image: '',
    tag: [],
})
const openDialog = (work) => {
    selectedWork.value = { ...work }
    dialogVisible.value = true
}
</script>
<style scoped>
.works-section,
.works-title {
    background-color: #d6f2f8;
}

.works-section {
    padding-bottom: 4rem;
}

.works-title {
    padding: 3rem 2rem;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 20px;
    max-width: 900px;
    margin: 0 auto;
    justify-items: center;
}
@media (max-width: 1024px) {
    .works-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 36px 24px;
        max-width: 650px;
    }
}
@media (max-width: 700px) {
    .works-grid {
        grid-template-columns: 1fr;
        gap: 28px 0;
        max-width: 95vw;
    }
}
</style>
