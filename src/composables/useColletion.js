import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";

const useColletion = (koleksiyon) => {
    const hataColletion = ref(null)
    const belgeEkle = async (belge) => {
        hataColletion.value = null
        try {
            const res = await firestoreRef.collection(koleksiyon).add(belge)
            return res ///id zaten bu belgelerin içinde oldugu için res.id dediğimizde içindeki idye de erişmiş olacağız
        } catch (error) {
            hataColletion.value = 'Belge eklerken bir hata oluştu'
        }
    }

    return { hataColletion, belgeEkle }
}


export default useColletion