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
//  ######################################################## 
//  #                      METHODS                            #
//  ########################################################  
        const handleSubmit = () => {
            console.log(baslik.value, aciklama.value, basTarih.value);
        }

        const handleChange=(e)=>{
            let secilen= e.target.files[0]
            console.log(secilen);
        }

//  ######################################################## 
//  #                      RETURN                          #
//  ########################################################  
        return {handleSubmit, baslik, aciklama,basTarih}
    }
}
</script>

<style lang="scss" scoped>
input [type='file']{
    border: 0;
    padding: 0;
}
label{
    font-size: 17px;
    display: block;
    margin-top: 30px;
}

form{
    margin-top: 30px;
}

</style>