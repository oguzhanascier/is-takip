<template>
    <h3>İş Detay</h3>
    <div v-if="hataDocument" class="error">
        {{ hataDocument }}
    </div>
</template>

<script>
import getDocument from '@/composables/getDocument';
export default {
    props: ['id'],
    setup(props) {
        const { hataDocument, belge: is } = getDocument('isler', props.id)

        return { hataDocument, is }
    }
}
</script>

<style lang="scss" scoped>

</style>