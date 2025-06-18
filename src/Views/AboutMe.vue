<template>
    <section class="about-me">
        <ContentsText title="About me" />

        <div class="content">
            <img class="about-img" src="@/assets/about-me-img.jpg" alt="AboutMe写真" />

            <div class="text-block">
                <p>
                    はじめまして。秋山将輝と申します。<br />
                    未経験からWebエンジニアを目指して学習を進めており、特にHTML/ CSS / JavaScript /
                    Vue.js を中心に取り組んでいます。<br />
                    頭に浮かんだ構想を具体的な成果物として表現できるWeb開発に強く魅力を感じています。<br />
                    将来的にはバックエンドの技術も身につけ、フルスタックエンジニアとして幅広く活躍できるようになりたいと考えています。<br />
                    新しい技術や課題に対して前向きに取り組み、日々成長していきます。
                </p>

                <div class="my-tag">
                    <MyTag label="GitHub" />
                </div>

                <a href="https://github.com/masateru0" target="_blank">
                    https://github.com/masateru0
                </a>

                <CustomButton
                    tag="RouterLink"
                    :to="'/profile'"
                    label="Profile"
                    customClass="profile-btn"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import ContentsText from '@/components/ContentsText.vue'
import MyTag from '@/components/MyTag.vue'
import CustomButton from '@/components/CustomButton.vue'
</script>

<style scoped>
.about-me {
    padding: 4rem 2rem;
    background-color: #e5e5e5;
}

.content {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.about-img {
    width: 440px;
    height: 295px;
    /* border-radius: 50%; */
    object-fit: cover;
}

.text-block {
    flex: 1;
    min-width: 250px;
    color: #583c27;
    font-size: 16px;
    line-height: 1.8;
}

a {
    color: #583c27;
    word-break: break-all;
    text-decoration: underline;
}

.my-tag {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

.profile-btn {
    margin-top: 1rem;
    background-color: #73d1e8;
    color: white;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    display: inline-block;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3 ease;
}

.profile-btn:hover {
    background-color: #5bb8cc;
}
</style>
