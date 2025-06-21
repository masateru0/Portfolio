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

        <SkillCard />
    </section>
</template>

<script setup>
import ContentsText from '@/components/ContentsText.vue'
import SkillGraph from '@/components/SkillGraph.vue'
import ToolTip from '@/components/ToolTip.vue'
import SkillCard from '@/components/SkillCard.vue'
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
}

.tip h6 {
    margin-bottom: 0;
    font-size: 12px;
}
</style>
