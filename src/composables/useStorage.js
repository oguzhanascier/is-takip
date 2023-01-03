import { ref } from "vue";
import { storageRef } from "@/firebase/config";
import getUser from './getUser'

const {kullanici}=getUser()