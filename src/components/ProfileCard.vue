<template>
    <div class="profile-card">
        <div class="left-column">
            <div class="profile-image">
                <img :src="profileIcon" alt="Profile" class />
            </div>
        </div>
        <div class="right-column">
            <div class="profile-text">
                <h1 class="name">Akiyama Masateru</h1>
                <p class="title">フロントエンジニア / バックエンドエンジニア</p>
                <p class="description">
                    映画・アニメ・漫画・ゲームが好きで、休日は2歳になる娘と過ごす時間に癒されています。<br />
                    もともと好奇心旺盛な性格で、漫画が原作の『ブラッディ・マンディ』というドラマに影響を受けて、
                    PCでコードを書く仕事に憧れるようになりました。<br />
                    そこからITやプログラミングの世界に興味を持ち、学びを通じて少しずつ夢に近づいています。<br />
                    日々の成長を楽しみながら、これからも前向きに取り組んでいきたいと思っています。
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import profileIcon from '@/assets/profile/profile-icon.png'
</script>

<style scoped>
.profile-card {
    width: 100%;
    max-width: 1150px;
    height: 399px;
    background-color: #d6f2f8;
    display: flex;
    margin: 0 auto;
}

.left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 59px;
}

.right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 57px;
}

.profile-image {
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
}

.profile-image img {
    width: 114px;
    height: 114px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.profile-text {
    max-width: 600px;
    color: #333;
    margin-top: 75px;
}

.name {
    font-size: 40px;
    font-weight: bold;
}

.title {
    font-size: 14px;
    margin-top: 24px;
    margin-bottom: 20px;
    color: #555;
}

.description {
    font-size: 14px;
    width: 409px;
    height: 216px;
}

@media (max-width: 1024px) {
    .profile-card {
        height: auto;
        min-height: 399px;
    }

    .left-column {
        margin-left: 30px;
    }

    .right-column {
        margin-right: 30px;
    }

    .description {
        width: 100%;
        height: auto;
    }
}

@media (max-width: 768px) {
    .profile-card {
        flex-direction: column;
        height: auto;
        padding: 2rem 1rem;
    }

    .left-column {
        margin-left: 0;
        margin-bottom: 2rem;
    }

    .right-column {
        margin-right: 0;
        align-items: flex-start;
    }

    .profile-image {
        margin-top: 0;
        margin-right: 0;
    }

    .profile-text {
        margin-top: 0;
        text-align: center;
    }

    .name {
        font-size: 32px;
    }

    .description {
        font-size: 13px;
        line-height: 1.6;
    }
}

@media (max-width: 480px) {
    .profile-card {
        padding: 1.5rem 0.5rem;
    }

    .profile-image img {
        width: 90px;
        height: 90px;
    }

    .name {
        font-size: 28px;
    }

    .title {
        font-size: 13px;
        margin-top: 20px;
        margin-bottom: 15px;
    }

    .description {
        font-size: 12px;
    }
}
</style>