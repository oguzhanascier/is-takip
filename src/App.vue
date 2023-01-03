<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import NavbarCompVue from './components/NavbarComp.vue';
export default {
  components:{NavbarCompVue},
  setup() {

  },
}
</script>

<style lang="scss">
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
