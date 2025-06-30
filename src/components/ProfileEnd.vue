<template>
    <div class="profile-end">
        <div class="profile-end-card">
            <div class="end-title">
                <h1>エンジニアリングへの想い</h1>
            </div>
            <div class="end-description">
                <p>
                    体験価値を届けられるようなエンジニアになりたい。
                    私自身が抱えている課題や周りの身近な人が抱えている問題をエンジニアリングで解決できるようになりたいと考えています。<br />
                    ものづくりが好きなので、生涯エンジニアとして社会に貢献し続けたいとも思っています。<br />
                    将来的にはバックエンドやインフラの技術も身につけ、フルスタックエンジニアとして幅広く活躍できるようになりたいです。<br />
                    技術だけでなく様々なIT業界に関わる資格も取得していこうと考えています。<br />
                    まだまだ至らない点はたくさんありますが、時代に合わせた技術を追いかけつつ、クライアントに寄り添ったエンジニアリングができるよう、心がけていきます。
                </p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.profile-end {
    background-color: #f4fcfd;
    display: flex;
    justify-content: center;
}

.profile-end-card {
    width: 1150px;
    height: 399px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 53px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: 36px;
    margin-bottom: 72px;
}

.end-description {
    width: 668px;
    height: 227px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

@media (max-width: 1024px) {
    .profile-end-card {
        width: 90%;
        height: auto;
        min-height: 399px;
        margin-bottom: 40px;
    }

    .end-description {
        width: 90%;
        height: auto;
        padding: 0 20px;
    }
}

@media (max-width: 768px) {
    .profile-end-card {
        width: 95%;
        margin-bottom: 30px;
        padding: 1rem;
    }

    h1 {
        font-size: 32px;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .end-description {
        width: 100%;
        font-size: 13px;
        line-height: 1.6;
    }
}

@media (max-width: 480px) {
    .profile-end-card {
        width: 98%;
        margin-bottom: 20px;
        padding: 0.5rem;
    }

    h1 {
        font-size: 28px;
        margin-top: 15px;
        margin-bottom: 30px;
    }

    .end-description {
        font-size: 12px;
        line-height: 1.5;
    }
}
</style>