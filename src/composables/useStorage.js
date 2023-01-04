import { ref } from "vue";
import { storageRef } from "@/firebase/config";
import getUser from './getUser'

const { kullanici } = getUser()

const useStorage = () => {
    const hata = ref(null)
    const url = ref(null)
    const fileYol = ref(null)

    const resimYukle = async (file) => { //-resim yüklemek için gerekli fonksiyon
        fileYol.value = `isler/${kullanici.value.uid}/${file.name}` /// burada dosya yolu seçildi
        const storage = storageRef.ref(fileYol.value) ///dosya yolu burada referansa atıldı

        try {
            const res = await storage.put(file) ///storage yukarıda oluşturduğumuz sabit
            url.value = await res.ref.getDownloadURL() ///tanımlanmış fonksiyonla burada url oluşturuldu
        } catch (error) {
            hata.value = error;
        }
    }

    return { resimYukle, url, fileYol, hata }
}


export default useStorage