<template>
    <section class="about-me-section">
        <ContentsText title="About me" />

        <div class="content">
            <img class="about-img" src="@/assets/about-me-img.jpg" alt="AboutMe写真" />

            <div class="text-block">
                <p>
                    はじめまして。秋山将輝と申します。<br />
                    未経験からWebエンジニアを目指して学習を進めており、特にHTML / CSS / JavaScript /
                    Vue.js を中心に取り組んでいます。<br />
                    頭に浮かんだ構想を具体的な成果物として表現できるWeb開発に強く魅力を感じています。<br />
                    将来的にはバックエンドの技術も身につけ、フルスタックエンジニアとして幅広く活躍できるようになりたいと考えています。<br />
                    新しい技術や課題に対して前向きに取り組み、日々成長していきます。
                </p>

                <div class="link-row">
                    <MyTag label="GitHub" />
                    <a
                        href="https://github.com/masateru0"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="github-link"
                    >
                        https://github.com/masateru0
                    </a>
                </div>

                <div class="last-btn">
                    <CustomButton
                        tag="router-link"
                        :to="{ name: 'ProfilePage' }"
                        label="Profile"
                        customClass="profile-btn"
                    />
                </div>
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
.about-me-section {
    padding: 3rem 2rem;
    background-color: #F4FCFD;
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
    object-fit: cover;
    margin-left: 200px;
    margin-top: 7px;
    border-radius: 10px;
}

.text-block {
    flex: 1;
    min-width: 250px;
    color: #583c27;
    font-size: 16px;
    line-height: 1.8;
    margin-left: 120px;
    margin-right: 150px;
}

.link-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
}

.github-link {
    font-size: 14px;
    color: #583c27;
    text-decoration: underline;
    word-break: break-all;
}
</style>
