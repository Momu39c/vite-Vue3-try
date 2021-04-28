<template></template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
    setup() {
        axios
            .get('/user/XPoet')
            .then((res) => {
                console.info('res:', res)
            })
            .catch((err) => {
                console.info('err', err)
            })
    },
})
</script>

<style lang="stylus" scoped>

</style>
