import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";

const getCollection = (koleksiyon) => {
    const belgeler = ref(null)
    const hataCollection = ref(null)

    let koleksiyonRef = firestoreRef.collection(koleksiyon).orderBy('olusturulmaTarihi', 'desc')

    // / OnSnapshot() methodu, veritabanı verilerini gerçek zamanlı olarak izlemek ve bu veriler üzerinde işlem yapmak için kullanılır. Bu method, Firebase veritabanlarında veri yönetimi için önemli bir araçtır.
    koleksiyonRef.onSnapshot(snap => {
        let sonuclar = []
        snap.docs.forEach(doc => {
            doc.data().olusturulmaTarihi && sonuclar.push(///oluşturulma tarihi yoksa puş olayı gerçekleşmeyecek
                { ...doc.data(), id: doc.id }
            )
        })
        belgeler.value = sonuclar
        hataCollection.value = null

    }, err => {
        console.log(err.message);
        belgeler.value=null
        hataCollection.value='Verilere erişilemedi'
    })
}


export default getCollection