<template>
  <div class="home">
    <div class="home">
      <div v-if="hataCollection" class="error">
        {{ hataCollection }}
      </div>
      <div v-if="belgeler">
        <is-listesi-vue :isler="isler" />
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import isListesiVue from '@/components/isListesi.vue'
export default {
  name: 'HomeView',
  components: { isListesiVue },
  setup() {
    const { belgeler, hataCollection } = getCollection('isler')

    return { hataCollection, belgeler }
  }
}
</script>
