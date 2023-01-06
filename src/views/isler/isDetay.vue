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
            <button v-if="kullaniciIs">İşi Sil</button>
        </div>
    </div>
</template>

<script>
import getDocument from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '@/composables/useDocument';
import { computed } from 'vue';
export default {
    props: ['id'],
    setup(props) {
        const { hataDocument, belge: is } = getDocument('isler', props.id)
        const { kullanici } = getUser()
        const kullaniciIs = computed(() => {

            return is.value && kullanici.value && kullanici.value.uid == is.value.kullaniciId ///işi ekleyenle kullanıcının aynı kişi oldugunu kontrol ediyoruz
        })

        return { hataDocument, is, kullaniciIs }
    }
}
</script>

<style lang="scss" scoped>

</style>