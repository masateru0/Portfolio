<template>
    <section id="contact" class="form-section">
        <el-form :model="form" label-position="top" class="contact-form card-style" @submit.prevent>
            <ContentsText title="Contact" class="contact-title" />

            <el-form-item class="form-row">
                <div class="form-label-col">
                    <label>お名前</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input
                    v-model="form.name"
                    placeholder="例）山田 太郎"
                    size="large"
                    class="fixed-input"
                    @blur="validateName"
                />
            </el-form-item>
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            <hr class="divider" />

            <el-form-item class="form-row">
                <div class="form-label-col">
                    <label>メールアドレス</label>
                    <span class="required-label">必須</span>
                </div>
                <el-input
                    v-model="form.email"
                    placeholder="例）your-mail@exsample.com"
                    size="large"
                    class="fixed-input"
                    @blur="validateEmail"
                />
            </el-form-item>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            <hr class="divider" />

            <el-form-item class="form-row">
                <div class="form-label-col">
                    <label>電話番号</label>
                    <span class="optional-label">任意</span>
                </div>
                <el-input
                    v-model="form.phone"
                    placeholder="例）080xxxxxxxx (ハイフンなし)"
                    size="large"
                    class="fixed-input"
                    @blur="validatePhone"
                />
            </el-form-item>
            <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
            <hr class="divider" />

            <el-form-item class="form-row">
                <div class="form-label-col">
                    <label>お問い合わせ内容</label>
                    <span class="optional-label">任意</span>
                </div>
                <el-input
                    v-model="form.message"
                    type="textarea"
                    rows="5"
                    placeholder="例）お問い合わせ内容を200文字以内でご記入ください。"
                    class="fixed-textarea"
                    @blur="validateMessage"
                />

            </el-form-item>
            <p v-if="errors.message" class="error-message">{{ errors.message }}</p>

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

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import ContentsText from '@/components/ContentsText.vue'
import CustomButton from '@/components/CustomButton.vue'

const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
})

const errors = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
})

const validateName = () => {
    if (!form.name.trim()) {
        errors.name = '名前は必須入力です。'
    } else {
        errors.name = ''
    }
}

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
        errors.email = 'メールアドレスは必須入力です。'
    } else if (!emailRegex.test(form.email)) {
        errors.email = 'メールアドレスの形式が正しくありません。'
    } else {
        errors.email = ''
    }
}

const validatePhone = () => {
    const phoneRegex = /^0\d{9,10}$/
    if (form.phone.trim() && !phoneRegex.test(form.phone)) {
        errors.phone = '電話番号は正しい形式で入力してください。'
    } else {
        errors.phone = ''
    }
}

const validateMessage = () => {
    if (form.message.trim().length > 200) {
        errors.message = '200文字以内で入力してください。'
    } else {
        errors.message = ''
    }
}

const validateForm = () => {
    let isValid = true

    if (!form.name.trim()) {
        errors.name = '名前は必須入力です。'
        isValid = false
    } else {
        errors.name = ''
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
        errors.email = 'メールアドレスは必須入力です。'
        isValid = false
    } else if (!emailRegex.test(form.email)) {
        errors.email = 'メールアドレスの形式が正しくありません。'
        isValid = false
    } else {
        errors.email = ''
    }

    const phoneRegex = /^0\d{9,10}$/
    if (form.phone.trim() && !phoneRegex.test(form.phone)) {
        errors.phone = '電話番号は正しい形式で入力してください。'
        isValid = false
    } else {
        errors.phone = ''
    }

    if (form.message.trim().length > 200) {
        errors.message = '200文字以内で入力してください。'
        isValid = false
    } else {
        errors.message = ''
    }

    return isValid
}

const handleSubmit = (event) => {
    if (event) {
        event.preventDefault()
    }

    if (!validateForm()) {
        ElMessage.error('必須項目が入力されていません。')
        return
    }

    ElMessage.success('送信しました。')

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

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 0.5rem;
    margin-left: 277px;
}

.contact-form {
    margin-top: 2rem;
}

:deep(.contact-title) {
    background-color: #fff;
}

.contact-form.card-style {
    width: 100%;
    max-width: 900px;
    min-width: 350px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 3rem 4rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

.el-input,
.el-textarea {
    font-size: 16px;
}

.divider {
    border: none;
    border-top: 1px solid #ccc;
    background: #ccc;
    color: #ccc;
    margin: 1.5rem 0;
    width: 100%;
    max-width: 700px;
}

.el-form-item {
    margin-bottom: 2.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-row {
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 700px;
    margin: 0 auto 0.5rem auto;
    gap: 2rem;
}

.form-label-col {
    min-width: 240px;
    max-width: 240px;
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: normal;
    font-size: 14px;
    color: #222;
    letter-spacing: 0.02em;
    justify-content: flex-start;
    margin-top: 8px;
}

.fixed-input {
    flex: 1;
    height: 56px;
    font-size: 16px;
    color: #222;
    box-sizing: border-box;
    transition: border-color 0.2s;
    margin-left: 0;
    margin-right: 0;
    width: 540px;
}

.fixed-input:focus {
    border-color: #73d1e8;
    outline: none;
}

.fixed-textarea {
    flex: 1;
    height: 170px;
    font-size: 16px;
    color: #222;
    box-sizing: border-box;
    transition: border-color 0.2s;
    resize: none;
    margin-left: 0;
    margin-right: 0;
    width: 540px;
}

.fixed-textarea:focus {
    border-color: #73d1e8;
    outline: none;
}

.fixed-input::placeholder,
.fixed-textarea::placeholder {
    font-size: 14px;
    color: #bbb;
}

.required-label {
    background-color: #eb8787;
    color: #fff;
    display: inline-block;
    padding: 0.18rem 0.7rem 0.18rem 0.7rem;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1;
    font-weight: normal;
    letter-spacing: 0.05em;
}

.optional-label {
    background-color: #cbc5c5;
    color: #fff;
    display: inline-block;
    padding: 0.18rem 0.7rem 0.18rem 0.7rem;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1;
    font-weight: normal;
    letter-spacing: 0.05em;
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

@media (max-width: 900px) {
    .contact-form.card-style {
        padding: 2rem 1rem;
    }
    .form-row {
        flex-direction: column;
        gap: 0.5rem;
        max-width: 100%;
    }
    .form-label-col {
        min-width: unset;
        max-width: unset;
        font-size: 16px;
        margin-bottom: 0.2rem;
    }
}
</style>
