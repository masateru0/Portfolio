<template>
    <div class="profile-section">
        <div class="my-profile">
            <LeftContentsText title="Profile" class="profile-title" />
            <ProfileCard class="profile-card" />
        </div>
    </div>
</template>

<script setup>
import LeftContentsText from '@/components/LeftContentsText.vue'
import ProfileCard from '@/components/ProfileCard.vue'
</script>

<style scoped>
.profile-section {
    background-color: #f4fcfd;
}

.profile-title {
    padding: 68px 0;
    background-color: #f4fcfd;
}

.my-profile {
    max-width: 1150px;
    margin: 0 auto;
    padding: 2rem 2rem 118px 2rem;
    display: flex;
    flex-direction: column;
}

.my-profile :deep(.contents-text) {
    background-color: #f4fcfd;
}

@media (max-width: 768px) {
    .profile-title {
        margin-top: 60px;
        padding: 50px 0;
    }

    .my-profile {
        padding: 1.5rem 1rem 80px 1rem;
    }
}

@media (max-width: 480px) {
    .profile-title {
        padding: 40px 0;
    }

    .my-profile {
        padding: 1rem 0.5rem 60px 0.5rem;
    }
}
</style>