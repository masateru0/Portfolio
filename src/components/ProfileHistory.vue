<template>
    <div class="timeline-bg">
        <div class="timeline-outer">
            <div class="timeline-center-line"></div>
            <div
                v-for="(item, idx) in timeline"
                :key="idx"
                class="timeline-row"
                :class="{ left: idx % 2 === 1, right: idx % 2 === 0 }"
            >
                <div class="timeline-content-block">
                    <div class="timeline-year">{{ item.year }}</div>
                    <div class="timeline-month">{{ item.month }}</div>
                    <div class="timeline-date-hr"></div>
                    <div class="timeline-title">{{ item.title }}</div>
                    <div class="timeline-body" v-html="item.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const timeline = [
    {
        year: '1997',
        month: '3月',
        title: '元気いっぱい明るい幼少期',
        body: '埼玉県入間市に秋山家の三男として生まれる',
    },
    {
        year: '2004',
        month: '4月',
        title: '少年野球を始めチームで協力する事を学ぶ',
        body: '小学２年の頃から少年野球を始める。野球の技術だけでなく、チームプレーを通して協力して何かを成し遂げる喜びと大切さを経験し学んだ。その後、小学５年の時に福岡に引っ越す。',
    },
    {
        year: '2009',
        month: '4月',
        title: 'ITに興味を持つ事になる「きっかけ」ができる',
        body: '中学生の頃、ハッキングを題材にしたドラマ『ブラッディ・マンデイ』（原作は漫画）を観て、PCを扱う仕事に強く憧れるようになる。ドラマの中で描かれる高度な技術や複雑なコードに魅了され、「将来はこんな風にPCを自在に操る仕事がしたい」という夢ができる。その後、システムエンジニアやプログラマーといった職業があることを知り、ITの世界に進みたいという思いが明確になる。',
    },
    {
        year: '2012',
        month: '4月',
        title: '情報処理科に興味を持ち商業高校に通う',
        body: 'エンジニアになる為の第一歩としてPCの基礎知識であるタイピング・Excel・Wordを学習できる情報処理科に惹かれて入学を決める。親の病気と家計の苦しさにより高校２年の時にSEやプログラマーになる夢を諦めて途中退学し就職する事を決める。',
    },
    {
        year: '2013',
        month: '9月',
        title: 'モノづくりの面白さを知る',
        body: '左官業に就職する。左官とはコテを使いモルタルで外壁を塗ったり土間コンクリート均しなどを行い建物の基礎となる技術職。形のないものから形あるものに自分の手で作り上げていくことに楽しさを感じてモノづくりの素晴らしさと奥深さを知る。人より先に社会に踏み出したことで、上司や別会社の人とのコミュニケーションを積極的に行って仕事を円滑に進め、納期までに施工を完了させる事で責任感とコミュニケーション能力を養うことができた。',
    },
    {
        year: '2015',
        month: '8月',
        title: '高校卒業程度認定資格試験を受験する',
        body: 'IT系の仕事に就く夢を諦めきれずに、高校卒業程度の学力がある事を証明する高卒認定資格を仕事をしながら3ヶ月間勉強し取得する。',
    },
    {
        year: '2021',
        month: '5月',
        title: '本格的にITの道に進む準備',
        body: '独学でプログラミング言語を学習していたが独学に限界を感じオンラインスクールを利用しようと考える。当時は金銭面に余裕がなかった為、短期間でお金を貯める為に派遣会社に入社しトヨタ工場で働き始める。',
    },
    {
        year: '2024',
        month: '8月',
        title: 'プログラミング言語勉強を本格始動',
        body: 'オンラインスクールを利用しようとしていたが、現エンジニアの友人に勧められて独学＋友人にメンターとして付いてもらい勉強を始めることになる。勉強していく上で一緒にweb開発を行い、リリースするまでの過程を経験した。又、web開発を通して課題を解決し効率化させることも学んだ。就職をして更に大きい規模のweb開発に携わり、もっとスキルアップさせていきたいと思い就職活動を開始した。',
    },
]
</script>

<style scoped>
.timeline-bg {
    background: #F4FCFD;
    min-height: 100vh;
    padding: 0;
    padding-bottom: 216px;
}
.timeline-outer {
    position: relative;
    width: 700px;
    margin: 0 auto;
    padding: 40px 0 40px 0;
}
.timeline-center-line {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2.5px;
    height: 100%;
    background: #bfc9cc;
    z-index: 0;
    transform: translateX(-50%);
}
.timeline-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 48px;
    position: relative;
    min-height: 80px;
}
.timeline-row.left {
    justify-content: flex-start;
}
.timeline-row.right {
    justify-content: flex-end;
}
.timeline-content-block {
    background: none;
    min-width: 260px;
    max-width: 340px;
    padding: 0 24px;
    text-align: left;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.timeline-row.left .timeline-content-block {
    align-items: flex-start;
    text-align: left;
}
.timeline-row.left .timeline-year,
.timeline-row.left .timeline-month {
    text-align: right;
    align-self: flex-end;
    width: 100%;
}
.timeline-year {
    font-size: 2.1em;
    font-weight: bold;
    color: #2C2C33;
    line-height: 1.1;
}
.timeline-month {
    font-size: 1.1em;
    color: #888;
    margin-top: 2px;
    margin-bottom: 2px;
}
.timeline-date-hr {
    border-bottom: 2px solid #bfc9cc;
    width: 100%;
    margin: 8px 0 12px 0;
}
.timeline-title {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 8px;
    color: #2C2C33;
}
.timeline-body {
    font-size: 0.98em;
    color: #2C2C33;
    line-height: 1.8;
}
@media (max-width: 900px) {
    .timeline-outer {
        width: 98vw;
        min-width: 0;
        padding: 20px 0;
    }
    .timeline-content-block {
        min-width: 0;
        max-width: 100vw;
        padding: 0 8px;
    }
}
@media (max-width: 600px) {
    .timeline-outer {
        width: 100vw;
        padding: 10px 0;
    }
    .timeline-center-line {
        display: none;
    }
    .timeline-row {
        flex-direction: column;
        align-items: flex-start;
    }
    .timeline-content-block {
        padding: 0 4px;
        min-width: 0;
        max-width: 100vw;
        align-items: flex-start !important;
        text-align: left !important;
    }
    .timeline-year,
    .timeline-month {
        text-align: left !important;
        align-self: flex-start !important;
        width: 100%;
    }
}
</style>