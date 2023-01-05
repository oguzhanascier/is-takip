<template>
  <div class="home">
    <div class="home">
      <div v-if="hataCollection" class="error">
        {{ hataCollection }}
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
export default {
  name: 'HomeView',
  setup() {
    const { belgeler, hataCollection } = getCollection()

    return { hataCollection, belgeler }
  }
}
</script>
