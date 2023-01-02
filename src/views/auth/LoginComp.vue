<template>
    <form  @submit.prevent="handleSubmit">
        <h3>Giriş</h3>
        <input type="email" placeholder="Email Giriniz" v-model="email">
        <input type="password" placeholder="Password Giriniz" v-model="parola">
        <button>Giriş</button>
        <div v-if="hata" class="error">{{ hata }}</div>
    </form>
</template>

<script>
import useLogin from '@/composables/useLogin';
import { ref } from 'vue';
export default {
    setup() {
        let { hata, login } = useLogin()
        const email = ref('')
        const parola = ref('')
        const handleSubmit = async () => {
            const res = await login(email.value, parola.value)
            if (!hata.value) {
                console.log('kullanıcı giriş yaptı');
            }
        }
        return { email, parola, handleSubmit, hata }
    }
}
</script>

<style lang="scss" scoped>

</style>