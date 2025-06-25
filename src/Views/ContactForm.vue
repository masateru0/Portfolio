<template>
    <section id="contact" class="form-section">
        <ContentsText title="Contact" />

        <el-form :model="form" label-position="top" class="contact-form">
            <el-form-item>
                <div class="form-label">
                    <label>お名前</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item>
                <div class="form-label">
                    <label>メールアドレス</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input v-model="form.email" />
            </el-form-item>

            <el-form-item>
                <div class="form-label">
                    <label>電話番号</label>
                    <span class="optional-label">任意</span>
                </div>
                <el-input v-model="form.phone" />
            </el-form-item>

            <el-form-item>
                <div class="form-label">
                    <label>お問い合わせ内容</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input v-model="form.message" type="textarea" rows="5" />
            </el-form-item>

            <div class="submit-btn-wrapper">
                <CustomButton
                    tag="button"
                    label="送信"
                    customClass="submit-btn"
                    @click="handleSubmit"
                />
            </div>
        </el-form>
    </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import ContentsText from '@/components/ContentsText.vue'
import CustomButton from '@/components/CustomButton.vue'

const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
})

const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
        alert('必須項目が入力されていません。')
        return
    }

    alert('送信しました。')

    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
}
</script>

<style scoped>
.form-section {
    background-color: #f4fcfd;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-form {
    width: 100%;
    max-width: 600px;
    margin-top: 2rem;
}

.el-form-item {
    margin-bottom: 2rem;
}

.form-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 14px;
    color: #333;
}

.required-label,
.optional-label {
    color: white;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background-color: #f4fcfd;
    border-radius: 4px;
    font-size: 12px;
    line-height: 1;
}

.required-label {
    background-color: #eb8787;
}

.optional-label {
    background-color: #cbc5c5;
}

.submit-btn-wrapper {
    text-align: center;
    margin-top: 1rem;
}

.submit-btn {
    background-color: #73d1e8;
    color: black;
    font-weight: bold;
    padding: 0.7rem 3rem;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3 ease;
}

.submit-btn:hover {
    background-color: #5bb8cc;
}
</style>
