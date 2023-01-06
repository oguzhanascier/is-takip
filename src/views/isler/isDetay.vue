<template>
    <h3>İş Detay</h3>
    <p>iş id - {{ id }}</p>
</template>

<script>
import getDocument from '@/composables/getDocument';
export default {
    props: ['id'],
    setup(props) {
        const { hataDocument, belge: is } = getDocument('isler', props.id)

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>