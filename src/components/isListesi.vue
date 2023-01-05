<template>
    <div v-for="is in isler" :key="is.id">
        <router-link :to="{ name: 'isDetay', params: { id: is.id } }">
            <div class="single">
                <div class="thumbnail">
                    <img :src="is.resimUrl" alt="">
                </div>
                <div class="info">
                    <h3>{{ is.baslik }}</h3>
                    <p>Oluşturan : {{ is.kullaniciAd }}</p>
                </div>
                <div class="work-number">
                    <p>{{ is.isAdimlar.length }} tane iş adımı bulunuyor.</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['isler'],
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>