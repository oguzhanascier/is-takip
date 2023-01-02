import { ref } from "vue";
import { authRef } from "@/firebase/config";

const hata = ref(null)

const singup = async (email, parola, kullaniciAd) => { //- üye olmak için ayrıca kullaniciad ekledik
    hata.value = null;
    try {
        const res = await authRef.createUserWithEmailAndPassword(email, parola)

        if (!res) {
            throw new Error('Üye olma işlemi gerçekleşmedi.')
        }
        await res.user.updateProfile({ /// burada nameyi kullanici ad olarak belirledik
            displayName: kullaniciAd
        })
        hata.value = null
        return res

    } catch (error) {
        hata.value = error.message
    }


}


const useSingup = () => {
    return { hata, singup }
}

export default useSingup