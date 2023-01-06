import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";


const useDocument = (koleksiyon, id) => {
    const hata = ref(null)
    let belgeRef = firestoreRef.collection(koleksiyon).doc(id) /// bununla belgelere eriştik collectionun içine 'işler'i yazsak da olurdu ama parametre olarak göndereceğiz daha güzel hoş ınmmm

    const belgeSil = async () => {
        hata.value = null
    }
}


export default useDocument