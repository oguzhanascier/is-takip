<template>
<form action="">
    <h3>Giriş</h3>
    <input type="email" placeholder="Email Giriniz" v-model="email">
    <input type="password" placeholder="Password Giriniz" v-model="parola">
    <button>Giriş</button>
    <div v-if="hata" class="error">{{hata}}</div>
</form>
</template>

<script>
import useLogin from '@/composables/useLogin';
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>