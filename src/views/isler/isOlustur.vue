<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h4>İş Oluştur</h4>
            <input type="text" placeholder="İşe Başlığı" v-model="baslik">
            <textarea placeholder="Açıklama Ekle" v-model="aciklama"></textarea>
            <label> Tanıtıcı Fotoğraf</label>
            <input type="file" @change="handleChange">
            <input type="datetime-local" v-model="basTarih">
            <div class="error"></div>
            <button>Oluştur</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useStorage from '@/composables/useStorage';
import useColletion from '@/composables/useColletion'
import getUser from '@/composables/getUser'; // işi yükleyenlerin bilgileri de olacağı için bunu eklemeliyiz
export default {
    setup() {
        //  ######################################################## 
        //  #                      DATA                            #
        //  ########################################################        
        const baslik = ref('')
        const aciklama = ref('')
        const basTarih = ref('')
        const file = ref(null)
        const fileHata = ref(null)
        const gecerliTipler = ['image/png', 'image/jpeg']
        const { resimYukle, url, fileYol, hata }= useStorage()
        const {hataColletion, belgeEkle}=useColletion('isler')
        const {kullanici}=getUser()
        //  ######################################################## 
        //  #                      METHODS                            #
        //  ########################################################  
        const handleSubmit = async () => {
            if(file.value){
                await resimYukle(file.value)
                // console.log(url.value); //dosya urlesi artık bu yolun içinde
                await belgeEkle({
                    baslik:baslik.value,
                    aciklama:aciklama.value,
                })
                if(!hataColletion.value){
                    console.log('iş eklendi'+ kullanici);
                }
            }
        }

        const handleChange = (e) => {
            let secilen = e.target.files[0]
            if (secilen && gecerliTipler.includes(secilen.type)) {
                file.value=secilen
                fileHata.value=null
            }else{
                file.value=null
                fileHata.value='Lütfen jpeg veya png uzantılı dosya seçin'
            }
        }

        //  ######################################################## 
        //  #                      RETURN                          #
        //  ########################################################  
        return { handleSubmit, baslik, aciklama, basTarih, handleChange,url, fileYol, hata }
    }
}
</script>

<style lang="scss" scoped>
input [type='file'] {
    border: 0;
    padding: 0;
}

label {
    font-size: 17px;
    display: block;
    margin-top: 30px;
}

form {
    margin-top: 30px;
}
</style>