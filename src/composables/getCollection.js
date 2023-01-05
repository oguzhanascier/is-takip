import { ref } from "vue";
import { firestoreRef } from "@/firebase/config";

const getCollection = (koleksiyon) => {
    const belgeler = ref(null)
    const hataColletion = ref(null)

    let koleksiyonRef = firestoreRef.collection(koleksiyon).orderBy('olusturulmaTarihi', 'desc')

    // / OnSnapshot() methodu, veritabanı verilerini gerçek zamanlı olarak izlemek ve bu veriler üzerinde işlem yapmak için kullanılır. Bu method, Firebase veritabanlarında veri yönetimi için önemli bir araçtır.
    koleksiyonRef.onSnapshot(span => {

    })
}