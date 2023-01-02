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

import useSingup from '@/composables/useSingup'
import { ref } from 'vue';
export default {
    setup() {
        let { hata, singup } = useSingup()
        const email = ref('')
        const parola = ref('')
        const kullaniciAd=ref('')
        const handleSubmit = async () => {
            const res = await singup(email.value, parola.value, kullaniciAd.value)
            console.log(res);
            if (!hata.value) {
                console.log('kullanıcı üye oldu');
            }
        }
        return { email, parola, kullaniciAd, handleSubmit, hata }
    }
}
</script>

<style lang="scss" scoped>

</style>