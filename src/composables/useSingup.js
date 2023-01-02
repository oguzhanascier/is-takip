import { ref } from "vue";
import { authRef } from "@/firebase/config";

const hata = ref(null)

const singup = async (email, parola, kullaniciAd) => {
    hata.value = null;
    try {
        const res = await authRef.createUserWithEmailAndPassword(email, parola)

        if(!res){
            throw new Error('Üye olma işlemi gerçekleşmedi.')
        }

        hata.value=null
        return res

    } catch (error) {
        hata.value = error.message
    }


}


const useLogin = () => {
    return { hata, login }
}

export default useLogin