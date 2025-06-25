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
        body: '埼玉県入間市に秋山家の三男として生まれる。',
    },
    {
        year: '2004',
        month: '4月',
        title: '少年野球を始めチームで協力する事を学ぶ',
        body: '小学校2年の時から少年野球を始める。<br>野球の技術だけでなく、チームプレーを通して協力して何かを成し遂げる喜びと大切さを経験し学んだ。<br>その後、小学5年の時に静岡に引っ越す。',
    },
    {
        year: '2009',
        month: '4月',
        title: 'ITに興味をもつきっかけができる',
        body: '中学校の頃、ハッカーが登場したドラマ『ブラッディ・マンデイ』の影響を強く受け、PCを使う仕事に強く憧れるようになる。<br>ドラマの中で市内全域を監視する映像管理シーンに釘付けされ、「将来はこんな風にPCを駆使できる仕事に就きたい」という夢ができる。<br>その後、システムエンジニアやプログラマーという言葉を知ることとなり、ITの世界に進みたいという思いが明確になる。',
    },
    {
        year: '2012',
        month: '4月',
        title: '情報技術に興味を持ち商業高校に進む',
        body: 'エンジニアになる為の第一歩としてPCの基礎知識であるタイピング・Excel・Word等々を習得できる商業高校に進み大学を決める。<br>高校の授業の中に新しく追加された2年生の5月でプログラマーになる為に本格的に情報技術を学ぶ事を決意する。',
    },
    {
        year: '2013',
        month: '9月',
        title: 'モノづくりの面白さを知る',
        body: '生徒が作成した簡単な業務システムを学校の上田コンピュータ室で実際に運用する機会があり、初めて自分の作ったものが誰かの役に立つ喜びを感じる。<br>周りの友人にも感謝されることが自分の手で作り上げていくことに楽しさを感じてモノづくりの楽しさを強く実感できた。<br>人と力を合わせて達成した仕事として、日常的な他人とのコミュニケーションや協力の大切さも同時に再認識。<br>人前が苦手な自分でもITを通じてコミュニケーション能力を高めることができた。',
    },
    {
        year: '2015',
        month: '8月',
        title: '高度な資格取得と資格勉強を実務に繋げる',
        body: 'IT系の仕事に就く事を意識する中で、高度な情報処理の分かる事を証明する基本情報技術者を作業をしながら3ヶ月間勉強し取得する。',
    },
    {
        year: '2021',
        month: '5月',
        title: '本格的にITの道に進む準備',
        body: '独学でプログラミング言語を学習していたが挫折。再度市販のオンラインスクールを利用しようと考える。<br>実務経験を積むために、転職活動を開始し客先常駐の会社へ派遣就職し社内SEとして3年で働き始める。',
    },
    {
        year: '2024',
        month: '8月',
        title: 'プログラミング言語勉強を本格始動',
        body: 'オンラインスクールを利用し挫折しようとしていたが、現エンジニアの友人と勉強会を行なったり本人へメンターとして付いてもらい勉強を始めることに決意。<br>加速していくIT一社でWeb開発を行い、リリースするまでの経験を積むため、次の職場探しとして派遣就職は必要性はないと考え始めた。<br>効率良く学習するための環境の整備に取り組み、もっとスキルアップさせていきたいと意識し積極的に勉強を開始した。',
    },
]
</script>

<style scoped>
.timeline-bg {
    background: #F4FCFD;
    min-height: 100vh;
    padding: 0;
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
    color: #583C27;
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
    color: #583C27;
}
.timeline-body {
    font-size: 0.98em;
    color: #583C27;
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