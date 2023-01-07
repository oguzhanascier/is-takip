<template>
    <h3>İş Detay</h3>
    <div v-if="hataDocument" style="font-size:32px" class="error">
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
            <button v-if="kullaniciIs" @click="handleDelete">İşi Sil</button>
        </div>
    </div>
</template>

<script>
import getDocument from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useStorage from '@/composables/useStorage';
import useDocument from '@/composables/useDocument';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
    props: ['id'],
    setup(props) {
        const { hataDocument, belge: is } = getDocument('isler', props.id)
        const { kullanici } = getUser()
        const kullaniciIs = computed(() => {

            return is.value && kullanici.value && kullanici.value.uid == is.value.kullaniciId ///işi ekleyenle kullanıcının aynı kişi oldugunu kontrol ediyoruz
        })
        const { belgeSil } = useDocument('isler', props.id)
        const {resimSil}=useStorage()
        const router=useRouter()
        const handleDelete = async () => {
            await resimSil(is.value.file)
            await belgeSil()
            hataDocument.value='İş Silindi'
        }

        return { hataDocument, is, kullaniciIs, handleDelete }
    }
}
</script>

<style lang="scss" scoped>

</style>