<template>
    <el-dialog
        v-model="internalVisible"
        width="1180px"
        class="works-dialog"
        :close-on-click-modal="false"
        @close="handleClose"
    >
        <div class="dialog-content">
            <div class="left-column">
                <LeftContentsText :title="title" class="dialog-title" />
                <p class="dialog-text">{{ dialogText }}</p>
                <div class="tags">
                    <MyTag v-for="(tag, index) in tags" :key="index" :label="tag" />
                </div>
            </div>

            <div class="right-column">
                <div class="thumbnails">
                    <img
                        v-for="(imgSrc, index) in images"
                        :key="index"
                        :src="imgSrc"
                        class="thumbnail"
                        :class="{ selected: selectedImage === imgSrc }"
                        @click="selectImage(imgSrc)"
                    />
                </div>
                <ImageOut :src="selectedImage" class="main-image" />
            </div>
        </div>

        <template #footer>
            <el-button @click="handleClose">閉じる</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import LeftContentsText from '@/components/LeftContentsText.vue'
import MyTag from '@/components/MyTag.vue'
import ImageOut from '@/components/ImageOut.vue'

const props = defineProps({
    visible: Boolean,
    title: String,
    description: String,
    dialogText: String,
    image: String,
    tags: Array,
    images: Array,
})

const emit = defineEmits(['update:visible'])

const internalVisible = ref(props.visible)
const selectedImage = ref(props.image)

watch(
    () => props.visible,
    (val) => {
        internalVisible.value = val

        selectedImage.value =
            Array.isArray(props.images) && props.images.length > 0
            ? props.images[0]
            : ''
    },
)

watch(internalVisible, (val) => {
    emit('update:visible', val)
})

const handleClose = () => {
    internalVisible.value = false
}

const selectImage = (img) => {
    selectedImage.value = img
}
</script>

<style scoped>
.works-dialog {
    border-radius: 12px;
    padding: 1rem;
}

.dialog-content {
    display: flex;
    gap: 2rem;
    padding: 1rem 0;
    margin-top: 23px;
}

.dialog-title {
    background-color: transparent;
}


.left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 59px;
}

.dialog-text {
    font-size: 14px;
    line-height: 1.8;
    color: #333;
    margin: 48px 0;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 120px;
}

.right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 57px;
}

.thumbnails {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.thumbnail {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid transparent;
}

.thumbnail.selected {
    border-color: #73d1e8;
}
</style>
