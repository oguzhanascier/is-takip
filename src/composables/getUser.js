import { ref } from "vue";
import { authRef } from "@/firebase/config";

const kullanici = ref(authRef.currentUser) ///tanımlanmış fonksiyonla mevcut giriş yapmış kullanıcı bilgisini çektik


authRef.onAuthStateChanged(k => { /// durumun değişip değişmediğini yakalayacağız
    kullanici.value = k //- çıkış yapmışsa k null olacak
})

const getUser = () => {
    return {kullanici} //* parantez içine almazsak hata veriyor
}



export default getUser