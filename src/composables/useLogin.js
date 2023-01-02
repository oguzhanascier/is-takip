import { ref } from "vue";
import { authRef } from "@/firebase/config";

const hata = ref(null) //-burada hataları tutacak

const login = async (email, parola) => { //- email i dışarıdan göndereceğiz 

    hata.value = null;
    try {
        const res = await authRef.signInWithEmailAndPassword(email, parola) /// authreften sonraki bir method giriş methodumuz tanımlanmış
        hata.value = null
    } catch (error) {
        hata.value = 'Login başarısız' + ' ' + error.message
    }


}