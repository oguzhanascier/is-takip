<template>
    <div class="navbar">
        <nav>
            <img src="@/assets/work.png" alt="">
            <h1>
                <router-link :to="{name:'Home'}">İş Takip</router-link>
            </h1>
            <div class="links">
                <button>Çıkış</button>
                <router-link class="btn" :to="{name:'SingUp'}">Üye Ol</router-link>
                <router-link class="btn" :to="{name:'Login'}">Giriş</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const {logout} = useLogout()
        const router = useRouter()

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>