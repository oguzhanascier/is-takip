<template>
    <div class="navbar">
        <nav>
            <img src="@/assets/work.png" alt="">
            <h1>
                <router-link :to="{name:'Home'}">İş Takip</router-link>
            </h1>
            <div class="links">
                <button @click="handleClick">Çıkış</button>
                <router-link class="btn" :to="{name:'SingUp'}">Üye Ol</router-link>
                <router-link class="btn" :to="{name:'Login'}">Giriş</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser;'
export default {
    setup() {
        const {logout} = useLogout()
        const router = useRouter()

        const handleClick=async()=>{
            await logout();
            router.push({name:'Home'})
        }

        return {handleClick}
    }
}
</script>

<style lang="scss" scoped>

</style>