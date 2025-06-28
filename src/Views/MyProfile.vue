<template>
    <div class="profile-section">
        <div class="my-profile">
            <LeftContentsText title="Profile" class="profile-title" />
            <ProfileCard class="profile-card"/>
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
</style>
