import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";


const getDocument = (koleksiyon, id) => {
    let belge = ref(null)
    let hataDocument = ref(null)

    let belgeRef = firestoreRef.collection(koleksiyon).doc(id)

    belgeRef.onSnapshot(doc => {
        if (doc.data()) { ///buradaki datayı method olarak kullanmazsak hata verir
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