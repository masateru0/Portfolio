<template>
    <el-tooltip placement="top" popper-class="my-tooltip">
        <template #content>
            ・★☆☆☆☆（星1）:未習得<br />
            　まだ学習を始めていない／知識がほとんどない状態。<br />
            ・★★☆☆☆（星2）:基礎学習中<br />
            　基本用語や使い方を学び始めた段階。簡単なことなら理解できる程度。<br />
            ・★★★☆☆（星3）:初級レベル<br />
            　基本的な操作や文法を理解し、自力で試すこともあるが、実務には不安が残る。<br />
            ・★★★★☆（星4）:中級レベル<br />
            　調べながら実務に活かせるレベル。ある程度の課題なら自分で解決できる。<br />
            ・★★★★★（星5）:実務レベル<br />
            　安定して自力で対応可能。人に教えたり、設計・実装を一通り任されるレベル。
        </template>
        <img src="@/assets/tip.png" alt="tip logo" class="tooltip-img" />
    </el-tooltip>
</template>

<style>
.tooltip-img {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.my-tooltip {
    padding: 15px;
    min-width: 480px !important;
    max-width: 480px !important;
    width: 480px !important;
}
</style>
