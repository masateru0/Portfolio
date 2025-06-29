<template>
    <section id="contact" class="form-section">
        <el-form :model="form" label-position="top" class="contact-form card-style">
            <ContentsText title="Contact" class="contact-title" />
            
            <el-form-item>
                <div class="form-label">
                    <label>お名前</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input
                    v-model="form.name"
                    placeholder="例）山田 太郎"
                    size="large"
                    class="fixed-input"
                />
            </el-form-item>
            <hr class="divider" />

            <el-form-item>
                <div class="form-label">
                    <label>メールアドレス</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input
                    v-model="form.email"
                    placeholder="例）your-email@example.com"
                    size="large"
                    class="fixed-input"
                />
            </el-form-item>
            <hr class="divider" />

            <el-form-item>
                <div class="form-label">
                    <label>電話番号</label>
                    <span class="optional-label">任意</span>
                </div>
                <el-input
                    v-model="form.phone"
                    placeholder="例）080xxxxxxxx"
                    size="large"
                    class="fixed-input"
                />
            </el-form-item>
            <hr class="divider" />

            <el-form-item>
                <div class="form-label">
                    <label>お問い合わせ内容</label>
                    <span class="optional-label">任意</span>
                </div>
                <el-input
                    v-model="form.message"
                    type="textarea"
                    rows="5"
                    placeholder="例）お問い合わせ内容を200文字以内でご記入ください。"
                    class="fixed-textarea"
                />
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
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.contact-form {
    margin-top: 2rem;
}

:deep(.contact-title) {
    background-color: #fff;
}

.contact-form.card-style {
    width: 1150px;
    height: 900px;
    background-color: #fff;
    border-radius: 10px;
    padding: 3rem 4rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.el-input,
.el-textarea {
    font-size: 16px;
}

.divider {
    border: none;
    border-top: 1px solid #999;
    margin: 1.5rem 0;
    width: 540px;
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
    width: 40px;
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

.fixed-input, .fixed-textarea {
    width: 540px
}

.fixed-input {
    height: 56px;
}

.fixed-textarea {
    height: 170px;
}
</style>
