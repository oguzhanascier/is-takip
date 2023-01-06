<template>
    <h3>İş Detay</h3>
    <div v-if="hataDocument" class="error">
        {{ hataDocument }}
    </div>
    <div v-if="is" class="work-details">
        <div class="work-info">
            <div class="image">
                <img :src="is.resimUrl" alt="">
            </div>
            <div>
                <h2>{{ is.baslik }}</h2>
            </div>
            <p class="username">{{ is.kullaniciAd }}</p>
            <p class="description">{{ is.aciklama }}</p>
        </div>
        <div class="work-list">
            <h2>İş Adımları</h2>
        </div>
    </div>
</template>

<script>
import getDocument from '@/composables/getDocument';
export default {
    props: ['id'],
    setup(props) {
        const { hataDocument, belge: is } = getDocument('isler', props.id)

        return { hataDocument, is }
    }
}
</script>

<style lang="scss" scoped>

</style>