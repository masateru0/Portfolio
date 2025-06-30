<template>
    <section id="contact" class="form-section">
        <el-form :model="form" label-position="top" class="contact-form card-style" @submit.prevent>
            <ContentsText title="Contact" class="contact-title" />

            <el-form-item class="form-row" style="position: relative">
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
                <div v-if="showNameError" class="error-message">名前は必須入力です。</div>
            </el-form-item>
            <hr class="divider" />

            <el-form-item class="form-row" style="position: relative">
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
                <div v-if="showEmailError" class="error-message">
                    <template v-if="!form.email">メールアドレスは必須入力です。</template>
                    <template v-else>メールアドレスの形式が正しくありません。半角英数字で入力してください。</template>
                </div>
            </el-form-item>
            <hr class="divider" />

            <el-form-item class="form-row" style="position: relative">
                <div class="form-label-col">
                    <label>電話番号</label>
                    <span class="optional-label">任意</span>
                </div>
                <el-input
                    v-model="form.phone"
                    placeholder="例）080xxxxxxxx"
                    size="large"
                    class="fixed-input"
                    @blur="validatePhone"
                />
                <div v-if="showPhoneError" class="error-message">
                    電話番号の形式が正しくありません。半角数字で入力してください。
                </div>
            </el-form-item>
            <hr class="divider" />

            <el-form-item class="form-row" style="position: relative">
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
                <div v-if="showMessageError" class="error-message">
                    <template v-if="!form.message">お問い合わせ内容は必須入力です。</template>
                    <template v-else>200文字以内で入力してください。</template>
                </div>
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

<script setup>
import { reactive, computed, ref } from 'vue'
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

const isSubmitted = ref(false)
const isNameTouched = ref(false)
const isEmailTouched = ref(false)
const isPhoneTouched = ref(false)
const isMessageTouched = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^0\d{9,10}$/

const showNameError = computed(() => (isSubmitted.value || isNameTouched.value) && !form.name)
const showEmailError = computed(() => {
    if (!(isSubmitted.value || isEmailTouched.value)) return false
    if (!form.email) return true
    if (!emailRegex.test(form.email)) return true
    return false
})
const showPhoneError = computed(() => {
    if (!(isSubmitted.value || isPhoneTouched.value)) return false
    if (!form.phone) return false
    if (!phoneRegex.test(form.phone)) return true
    return false
})
const showMessageError = computed(() => {
    if (!(isSubmitted.value || isMessageTouched.value)) return false
    if (!form.message) return false
    if (form.message.length > 200) return true
    return false
})

const validateName = () => {
    isNameTouched.value = true
    if (!form.name.trim()) {
        errors.name = '名前は必須入力です。'
    } else {
        errors.name = ''
    }
}

const validateEmail = () => {
    isEmailTouched.value = true
    if (!form.email.trim()) {
        errors.email = 'メールアドレスは必須入力です。'
    } else if (!emailRegex.test(form.email)) {
        errors.email = 'メールアドレスの形式が正しくありません。半角英数字で入力してください。'
    } else {
        errors.email = ''
    }
}

const validatePhone = () => {
    isPhoneTouched.value = true
    if (form.phone.trim() && !phoneRegex.test(form.phone)) {
        errors.phone = '電話番号の形式が正しくありません。半角数字で入力してください。'
    } else {
        errors.phone = ''
    }
}

const validateMessage = () => {
    isMessageTouched.value = true
    if (form.message.trim().length > 200) {
        errors.message = '200文字以内で入力してください。'
    } else {
        errors.message = ''
    }
}

const handleSubmit = () => {
    isSubmitted.value = true
    if (
        !form.name ||
        !form.email ||
        !emailRegex.test(form.email) ||
        (form.phone && !phoneRegex.test(form.phone)) ||
        (form.message && form.message.length > 200)
    ) {
        ElMessage.error('必須項目が入力されていません。')
        return
    }
    ElMessage.success('送信しました。')
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    isSubmitted.value = false
    isNameTouched.value = false
    isEmailTouched.value = false
    isPhoneTouched.value = false
    isMessageTouched.value = false
}
</script>

<style scoped>
.form-section {
    background-color: #f4fcfd;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.error-message {
    position: absolute;
    left: 240px;
    bottom: -2.2em;
    color: #eb8787;
    font-size: 13px;
    font-weight: normal;
    width: 540px;
    text-align: left;
    z-index: 2;
    pointer-events: none;
}

.contact-form {
    margin-top: 2rem;
}

.contents-text.contact-title {
    margin-bottom: 60px;
    background-color: #fff;
}

.contact-form.card-style {
    width: 100%;
    max-width: 1151px;
    min-width: 904px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 3rem 4rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    flex-direction: column;
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
    margin: 1.5rem auto;
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
    margin: 0 auto 2.8rem auto;
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

:deep(.fixed-textarea .el-textarea__inner) {
    height: 170px !important;
    min-height: 170px !important;
    max-height: 170px !important;
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
    .error-message {
        left: 0;
        width: 100%;
        position: static;
        margin-top: 0.2em;
        bottom: auto;
    }
}

@media (max-width: 768px) {
    .form-section {
        padding: 60px 0;
        min-height: auto;
    }

    .contact-form.card-style {
        min-width: unset;
        max-width: 100%;
        margin: 0 20px;
        padding: 1.5rem;
    }

    .form-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    .form-label-col {
        margin-bottom: 0.5rem;
        min-width: unset;
        max-width: unset;
        width: 100%;
    }
    .fixed-input,
    .fixed-textarea {
        width: 100%;
    }

    .form-label-col {
        font-size: 15px;
    }

    .required-label,
    .optional-label {
        font-size: 13px;
        padding: 0.15rem 0.6rem;
    }
}

@media (max-width: 480px) {
    .form-section {
        padding: 40px 0;
    }

    .contact-form.card-style {
        margin: 0 15px;
        padding: 1rem;
    }

    .form-label-col {
        font-size: 14px;
        gap: 10px;
    }

    .fixed-input,
    .fixed-textarea {
        font-size: 14px;
    }

    .required-label,
    .optional-label {
        font-size: 12px;
        padding: 0.12rem 0.5rem;
    }

    .submit-btn {
        padding: 0.6rem 2rem;
        font-size: 13px;
    }
}
</style>