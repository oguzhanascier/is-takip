import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";

const getCollection = (koleksiyon) => {
    const belgeler = ref(null)
    const hataColletion = ref(null)

    let koleksiyonRef = firestoreRef.collection(koleksiyon).orderBy('olusturulmaTarihi', 'desc')
}