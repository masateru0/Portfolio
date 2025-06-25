<template>
    <section class="profile-section">
        <div class="my-profile">
            <ContentsText title="Profile" class="profile-title" />
            <ProfileCard />
        </div>
    </section>
</template>

<script setup>
import ContentsText from '@/components/ContentsText.vue'
import ProfileCard from '@/components/ProfileCard.vue'
</script>

<style scoped>
.profile-section {
    background-color: #f4fcfd;
}

.profile-title {
    padding: 3rem 2rem;
    background-color: #f4fcfd;
}
</style>
