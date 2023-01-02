<template>
    <form  @submit.prevent="handleSubmit">
        <h3>İş Takip App Üye Olma Sayfası</h3>
        <input type="text" placeholder="Kullanıcı Adı Giriniz" v-model="kullaniciAd">
        <input type="email" placeholder="Email Giriniz" v-model="email">
        <input type="password" placeholder="Password Giriniz" v-model="parola">
        <button>Üye Ol</button>
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
            console.log(res);
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