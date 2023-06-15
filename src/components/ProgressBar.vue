<template>
    <div :style="{ height: '5px', width: progressWidth }" class="bg-brown500"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ProgressBar',
    props: {
        page: {
            type: Number,
            required: true
        }
    },
    computed: {
        progressWidth() {
            switch (this.page) {
                case 1:
                    return '20%'
                case 2:
                    return '30%'
                case 3:
                    return '100%'
                default:
                    return '0%'
            }
        }
    }
})
</script>

<style lang="scss" scoped></style>
