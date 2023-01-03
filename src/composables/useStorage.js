import { ref } from "vue";
import { storageRef } from "@/firebase/config";
import getUser from './getUser'

const { kullanici } = getUser()

const useStorage = () => {
    const hata = ref(null)
    const url = ref(null)
    const fileYol = ref(null)

    const resimYükle = async (file) => { //-resim yüklemek için gerekli fonksiyon
        fileYol.value=`isler/${kullanici.value.uid}/{file.name}`
        const storage=storageRef.ref(fileYol.value)

        try {
            const res= await storage.put(file) ///storage yukarıda oluşturduğumuz sabit
            url.value= await res.ref.getDownloadURL() ///tanımlanmış fonksiyonla dosya yolu oluşturuldu
        } catch (error) {
            
        }
    }
}