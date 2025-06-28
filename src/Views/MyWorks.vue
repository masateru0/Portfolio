<template>
    <section class="works-section">
        <ContentsText title="Works" class="works-title" />
        <div class="works-grid">
            <WorkCard
                v-for="(work, index) in works"
                :key="index"
                :title="work.title"
                :description="work.description"
                :image="work.image"
                @click="openDialog(work)"
            />
        </div>
        <WorksDialog
            v-model:visible="dialogVisible"
            :title="selectedWork.title"
            :dialogText="selectedWork.dialogText"
            :image="selectedWork.image"
            :tags="selectedWork.tag"
            :images="selectedWork.images"
        />
    </section>
</template>
<script setup>
import { ref } from 'vue'
import ContentsText from '@/components/ContentsText.vue'
import WorkCard from '@/components/WorkCard.vue'
import WorksDialog from '@/components/WorksDialog.vue'

import webSiteImage from '@/assets/web-site.png';
import fortuneAppImage from '@/assets/fortune-app.png';
import questionAppImage from '@/assets/question-app.png';
import calculatorAppImage from '@/assets/calculator-app.png';
import todoListAppImage from '@/assets/todo-list-app.png';
import portfolioAppImage from '@/assets/portfolio-app.png';

import websiteView from '@/assets/website-view.svg';
import websiteAbout from '@/assets/website-about.png';
import websiteBlog from '@/assets/website-blog.png';
import websiteContact from '@/assets/website-contact.png';
import websiteFooter from '@/assets/website-footer.png';

import fortuneView from '@/assets/fortune-view.svg';
import fortune1 from '@/assets/fortune-1.png';
import fortune2 from '@/assets/fortune-2.png';
import fortune3 from '@/assets/fortune-3.png';
import fortune4 from '@/assets/fortune-4.png';

import questionView from '@/assets/question-view.svg';
import question1 from '@/assets/question-1.png';
import question2 from '@/assets/question-2.png';
import question3 from '@/assets/question-3.png';
import question4 from '@/assets/question-4.png';

import calculatorView from '@/assets/calculator-view.svg';
import calculator1 from '@/assets/calculator-1.png';
import calculator2 from '@/assets/calculator-2.png';
import calculator3 from '@/assets/calculator-3.png';
import calculator4 from '@/assets/calculator-4.png';

import todoView from '@/assets/todo-view.svg';
import todo1 from '@/assets/todo-1.png';
import todo2 from '@/assets/todo-2.png';
import todo3 from '@/assets/todo-3.png';
import todo4 from '@/assets/todo-4.png';
import todo5 from '@/assets/todo-5.png';

import portfolioView from '@/assets/portfolio-view.svg';

const works = [
    {
        title: 'Webサイト',
        description: 'Cording / HTML・CSS',
        dialogText:'HTMLとCSSを用いて、CS2という世界的に有名なオンラインFPSゲームに関する仮想Webサイトを作成しました。特に余白やフォントサイズ、配色のバランスにこだわり、シンプルで見やすい設計を意識しました。また、レスポンシブ対応にも取り組み、PC・スマートフォンの両方で閲覧できるようにしています。',
        image: webSiteImage,
        tag: ['HTML', 'CSS'],
        images: [ websiteView, websiteAbout, websiteBlog, websiteContact, websiteFooter ],
    },
    {
        title: '占いアプリ',
        description: 'Cording / Vue.js・CSS',
        dialogText:'CSSとVue.jsを用いて、占いアプリを制作しました。Vue.jsのリアクティブな特性を活かし、占い結果の表示や状態管理をシンプルに実装してコンポーネントを分離して設計することで、再利用性や保守性の高いコード構成を学習しました。スタイルはCSSで細かく調整し、シンプルで分かりやすいインターフェースに仕上げました。',
        image: fortuneAppImage,
        tag: ['CSS', 'Vue.js'],
        images: [ fortuneView, fortune1, fortune2, fortune3, fortune4 ],
    },
    {
        title: 'クエスチョンアプリ',
        description: 'Cording / Vue.js・BootStrap',
        dialogText:'Vue.js と Bootstrap を使って、4択形式で全10問のクエスチョンアプリを作成しました。コンポーネント設計を意識し、質問文・選択肢・回答処理をそれぞれ分離して管理することで、保守性を高めました。正解・不正解時には即座にフィードバックが表示され、スムーズなユーザー体験を意識して実装しています。また、単純なCSSではなくBootStrap を活用してUI/UXを意識したデザインを心がけました。',
        image: questionAppImage,
        tag: [ 'Vue.js', 'BootStrap'],
        images: [ questionView, question1, question2, question3, question4 ],
    },
    {
        title: '電卓アプリ',
        description: 'Cording / Vue.js・CSS',
        dialogText:'Vue.jsとCSSで作成した電卓アプリでは、コンポーネント設計にこだわりました。表示部とボタン部を分離し、それぞれの役割を明確にすることでコードの可読性と保守性を高めています。ボタンは汎用コンポーネント化し、数字や演算子を動的に扱えるようにしました。また、CSSでボタンのサイズや配置を柔軟に調整し、ユーザー体験を向上させています。さらに、計算処理はVueのリアクティブ機能を活用して即時反映を実現。直感的で使いやすい電卓を目指しました。',
        image: calculatorAppImage,
        tag: ['CSS', 'Vue.js'],
        images: [ calculatorView, calculator1, calculator2, calculator3, calculator4 ],
    },
    {
        title: 'TODOリスト',
        description: 'Cording / Vue.js・CSS',
        dialogText:'Vue.jsとCSSで作成したTODOリストアプリでは、ユーザーの操作性を重視して設計しました。タスクの追加・削除・編集機能を作成し、入力と画面表示でコンポーネントを分けて実装しています。入力フォームにはバリデーションを実装し、誤入力を防止。また、完了済みタスクの視覚的区別やフィルタリング機能を搭載し、一覧が見やすくなるよう工夫しました。CSSはシンプルかつ直感デザインを心がけ、ボタンやタスクのホバー・クリック時にアニメーションを加えました。さらに、ローカルストレージへの保存機能を実装し、ページを再読み込みしてもタスクが保持されるようにしています。これにより、日常的に使いやすく、快適なTODO管理アプリに仕上げました。',
        image: todoListAppImage,
        tag: ['CSS', 'Vue.js'],
        images: [ todoView, todo1, todo2, todo3, todo4, todo5 ],
    },
    {
        title: 'ポートフォリオサイト',
        description: 'Cording / CSS・Vue.js・ElementPlus',
        dialogText:'Vue.js、CSS、そしてElement Plusを組み合わせたポートフォリオアプリでは、見やすいUI設計にこだわりました。Element Plusの豊富なコンポーネントを活用し、一貫性のあるデザインと操作性を実現。また、コンポーネントの再利用性を意識して設計し、メンテナンス性を向上。アニメーションやホバー効果で視覚的なアクセントを加え、閲覧者に印象的な体験を提供しています。さらに、動的なデータバインディングを活用して、作品情報やスキルを柔軟に管理できるよう工夫しました。',
        image: portfolioAppImage,
        tag: ['CSS', 'Vue.js', 'ElementPlus',],
        images: [ portfolioView ],
    },
]
const dialogVisible = ref(false)
const selectedWork = ref({
    title: '',
    description: '',
    image: '',
    tag: [],
})
const openDialog = (work) => {
    selectedWork.value = { ...work }
    dialogVisible.value = true
}
</script>
<style scoped>
.works-section,
.works-title {
    background-color: #d6f2f8;
}

.works-section {
    padding-bottom: 4rem;
}

.works-title {
    padding: 3rem 2rem;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 20px;
    max-width: 900px;
    margin: 0 auto;
    justify-items: center;
}
@media (max-width: 1024px) {
    .works-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 36px 24px;
        max-width: 650px;
    }
}
@media (max-width: 700px) {
    .works-grid {
        grid-template-columns: 1fr;
        gap: 28px 0;
        max-width: 95vw;
    }
}
</style>
