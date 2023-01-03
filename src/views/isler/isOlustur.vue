<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h4>İş Oluştur</h4>
            <input type="text" placeholder="İşe Başlığı" v-model="baslik">
            <textarea placeholder="Açıklama Ekle" v-model="aciklama"></textarea>
            <label> Tanıtıcı Fotoğraf</label>
            <input type="file">
            <input type="datetime-local" v-model="basTarih">
            <div class="error"></div>
            <button>Oluştur</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const baslik = ref('')
        const aciklama = ref('')
        const basTarih = ref('')

        const handleSubmit = () => {
            console.log(baslik.value, aciklama.value, basTarih.value);
        }


        return {handleSubmit, baslik, aciklama,basTarih}
    }
}
</script>

<style lang="scss" scoped>

</style>