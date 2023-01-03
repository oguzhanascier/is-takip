import { ref } from "vue";
import { authRef } from "@/firebase/config";

const kullanici= ref (authRef.currentUser) ///tanımlanmış fonksiyonla mevcut giriş yapmış kullanıcı bilgisini çektik