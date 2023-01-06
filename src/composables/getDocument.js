import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";


const getDocument = (koleksiyon, id) => {
    let belge = ref(null)
    let hataDocument = ref(null)

    let belgeRef = firestoreRef.collection(koleksiyon).doc(id)

    belgeRef.onSnapshot(doc => {
        if (doc.data()) {
            belge.value = { ...doc.data(), id: doc.id }
            hataDocument.value = null
        } else {
            hataDocument.value = 'Belge Bulunamadı.'

        }
    }, err => {
        hataDocument.value = 'Veriye Erişelemedi'
        console.log(err);
    })
    return { hataDocument, belge }

}

export default getDocument