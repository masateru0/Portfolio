<template>
    <section class="skills-section">
        <div class="skill-content">
            <div class="left-column">
                <ContentsText title="Skills" />

                <p class="skill-text">
                    主に Vue.js を用いたフロントエンド開発を得意としています。<br />
                    ユーザー体験を重視したインタラクティブな UI
                    の構築や、コンポーネント設計を意識した保守性・拡張性の高いコードを書くことを心がけています。<br />
                    また、Git
                    を活用したバージョン管理やチーム開発の経験もあり、ブランチ運用を通じてコードの品質を担保しつつ、円滑なコミュニケーションと効率的な開発をしてきました。
                </p>
            </div>

            <div class="right-column">
                <SkillGraph :width="325" :height="325" />
            </div>
        </div>

        <div class="skill-card-style">
            <div class="tip">
                <ToolTip />
                <p>星の指標</p>
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
        rating: 3,
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
        rating: 3,
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
        rating: 2,
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
    background-color: #f0f2f3;
    padding-bottom: 120px;
}

.skills-section :deep(.contents-text) {
    background-color: #f0f2f3;
}

.skill-content {
    display: flex;
    padding-top: 150px;
    padding-bottom: 40px;
}

.left-column {
    margin-left: 165px;
    width: 585px;
}

.left-column :deep(.contents-text) {
    justify-content: flex-start;
    text-align: left;
    font-size: 40px;
    margin-bottom: 40px;
}

.right-column {
    background-color: #fff;
    width: 502px;
    height: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: 57px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.skill-text {
    widows: 585px;
    height: 140px;
    margin-right: 64px;
}

.tip {
    display: flex;
    gap: 0.5rem;
    max-width: 1200px;
    margin-left: 60px;
    align-items: center;
}

.tip p {
    margin-bottom: 0;
    font-size: 16px;
}

.skill-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 20px;
    max-width: 900px;
    margin: 0 auto;
    justify-items: stretch;
    background: #fff;
    padding: 2rem 0;
}

.skill-card-style {
    width: 100%;
    max-width: 1151px;
    min-width: 904px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 3rem 4rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
