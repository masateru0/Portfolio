<template>
    <section class="about-me-section">
        <div class="content">
            <img class="about-img" src="@/assets/about-me-img.jpg" alt="AboutMe写真" />

            <div class="text-block">
                <ContentsText title="About me" />

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
                        :to="'/profile'"
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
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: #fff;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 52px;
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 1200px;
}

.about-img {
    width: 534px;
    height: 445px;
    object-fit: cover;
    border-radius: 10px;
}

.text-block {
    flex: 1;
    min-width: 300px;
    color: #2c2c33;
    font-size: 16px;
    line-height: 1.8;
}

.text-block :deep(.contents-text) {
    margin-bottom: 31px;
    justify-content: flex-start;
    text-align: left;
    font-size: 40px;
    background-color: #fff;
}

p {
    font-size: 16px;
    width: 565px;
    height: 215px;
    margin: 0;
}

.link-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 45px;
    margin-bottom: 35px;
}

.github-link {
    font-size: 14px;
    color: #2c2c33;
    text-decoration: underline;
    word-break: break-word;
}

@media (max-width: 1024px) {
    .content {
        margin-left: 50px;
        margin-right: 50px;
        gap: 40px;
    }

    .about-img {
        width: 400px;
        height: 334px;
    }

    p {
        width: 100%;
        height: auto;
    }
}

@media (max-width: 768px) {
    .about-me-section {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .content {
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        gap: 30px;
    }

    .about-img {
        width: 100%;
        height: auto;
        max-width: 400px;
    }

    .text-block :deep(.contents-text) {
        font-size: 32px;
        text-align: center;
        justify-content: center;
    }

    p {
        font-size: 15px;
        line-height: 1.7;
    }

    .link-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}

@media (max-width: 480px) {
    .about-me-section {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .content {
        margin-left: 15px;
        margin-right: 15px;
        gap: 20px;
    }

    .text-block :deep(.contents-text) {
        font-size: 28px;
    }

    p {
        font-size: 14px;
    }
}
</style>