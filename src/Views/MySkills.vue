<template>
    <section class="skills-section">
        <ContentsText title="Skills" />

        <p class="skill-text">
            主に Vue.js を用いたフロントエンド開発を得意としています。<br />
            ユーザー体験を重視したインタラクティブな UI
            の構築や、コンポーネント設計を意識した保守性・拡張性の高いコードを書くことを心がけています。<br />
            また、Git
            を活用したバージョン管理やチーム開発の経験もあり、ブランチ運用を通じてコードの品質を担保しつつ、円滑なコミュニケーションと効率的な開発をしてきました。
        </p>

        <SkillGraph />

        <div class="tip">
            <ToolTip />
            <h6>星の指標</h6>
        </div>

        <div class="skill-grid">
            <SkillCard
                v-for="(skill, index) in skills"
                :key="index"
                :title="skill.title"
                :icon="skill.icon"
                :description="skill.description"
                :rating="skill.rating"
            />
        </div>
    </section>
</template>

<script setup>
import ContentsText from '@/components/ContentsText.vue'
import SkillGraph from '@/components/SkillGraph.vue'
import ToolTip from '@/components/ToolTip.vue'
import SkillCard from '@/components/SkillCard.vue'

const skills = [
    {
        title: 'HTML',
        icon: new URL('@/assets/skills/html-icon.png', import.meta.url).href,
        description: 'HTMLの基礎知識を身につけ、簡単なwebサイトを作れます',
        rating: 4,
    },
    {
        title: 'CSS',
        icon: new URL('@/assets/skills/css-icon.png', import.meta.url).href,
        description: 'CSSの基礎知識を身につけ、簡単なwebサイトのデザインを実装できます',
        rating: 4,
    },
    {
        title: 'JavaScript',
        icon: new URL('@/assets/skills/js-icon.png', import.meta.url).href,
        description: 'JavaScriptの基礎知識を身につけ、簡単なwebアプリを作れます',
        rating: 4,
    },
    {
        title: 'BootStrap',
        icon: new URL('@/assets/skills/bootstrap-icon.png', import.meta.url).href,
        description: 'BootStrapを使用して効率的にwebアプリのデザインを実装できます',
        rating: 4,
    },
    {
        title: 'Vue.js',
        icon: new URL('@/assets/skills/vue-icon.png', import.meta.url).href,
        description:
            'Vue.jsの基礎知識を身につけ、コンポーネント設計を意識した簡単でモダンなwebアプリを作れます',
        rating: 4,
    },
    {
        title: 'MySQL',
        icon: new URL('@/assets/skills/MySQL-icon.png', import.meta.url).href,
        description: 'MySQLの基礎知識を身につけ、テーブルの作成・更新・削除などSQL操作ができます',
        rating: 1,
    },
    {
        title: 'AWS',
        icon: new URL('@/assets/skills/AWS-icon.png', import.meta.url).href,
        description: 'AWSクラウドプラクティショナーを取得しました',
        rating: 1,
    },
    {
        title: 'Git',
        icon: new URL('@/assets/skills/git-icon.png', import.meta.url).href,
        description: 'Gitの基礎知識を身につけ、ブランチ管理を行い効率的な開発ができます',
        rating: 4,
    },
    {
        title: 'Slack',
        icon: new URL('@/assets/skills/Slack-icon.png', import.meta.url).href,
        description: 'Slackを通じてコミュニケーションをとりながら作業ができます',
        rating: 5,
    },
]
</script>

<style scoped>
.skills-section {
    padding: 3rem 3rem;
    background-color: #f4fcfd;
}

.skill-text {
    padding: 2rem 20rem;
}

.tip {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 1200px;
    margin: 2rem auto 1rem auto;
    padding-left: 3rem;
}

.tip h6 {
    margin-bottom: 0;
    font-size: 12px;
}

.skill-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 20px;
    max-width: 900px;
    margin: 0 auto;
    justify-items: stretch;
    background: #F4FCFD;
    padding: 2rem 0;
}
@media (max-width: 1024px) {
    .skill-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 36px 24px;
        max-width: 650px;
    }
}
@media (max-width: 700px) {
    .skill-grid {
        grid-template-columns: 1fr;
        gap: 28px 0;
        max-width: 95vw;
    }
}
</style>
