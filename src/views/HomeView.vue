<template>
  <div class="home">
    Anasayfa
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
export default {
  name: 'HomeView',
  setup() {
    const { belgeler, hataCollection } = getCollection()
  }
}
</script>
