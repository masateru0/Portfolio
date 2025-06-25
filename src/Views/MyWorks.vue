<template>
    <section class="works-section">
        <ContentsText title="Works" class="works-title"/>

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
        images: ['']
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/tip.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: ['']
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: ['']
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/about-me-img.jpg', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: ['']
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: ['']
    },
    {
        title: 'ポートフォリオサイト',
        description: '文章が入る',
        image: new URL('@/assets/works/portfolio1.png', import.meta.url).href,
        tag: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        images: ['']
    },
]

const dialogVisible = ref(false)

const selectedWork = ref({
    title: '',
    description: '',
    image: '',
    tag: []
})

const openDialog = (work) => {
    selectedWork.value = { ...work }
    dialogVisible.value = true
}
</script>

<style scoped>
.works-title {
    background-color: #d6f2f8;
}

.works-section {
    background-color: #d6f2f8;
    padding: 3rem 3rem;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0; /* グリッドアイテム同士の余白をなくす */
    justify-items: center;
    padding: 0; /* グリッド全体の内側の余白もなくす */
    max-width: 1200px;
    margin: 0 auto;
}
</style>
