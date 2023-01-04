import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";

const useColletion = (koleksiyon) => {
    const hataColletion = ref(null)
    const belgeEkle = async (belge) => {
        hataColletion.value = null
        try {
            await firestoreRef.collection(koleksiyon).add(belge)
        } catch (error) {
            hataColletion.value = 'Belge eklerken bir hata oluştu'
        }
    }

    return {hataColletion, belgeEkle}
}


export default useColletion