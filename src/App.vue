<template>
    <div id="app" :class="page === 3 ? 'background' : ''">
        <LayoutHeader></LayoutHeader>
        <ProgressBar :page="page"></ProgressBar>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSignupStore } from './stores/signupStore'
import { RouterView } from 'vue-router'
import LayoutHeader from './components/layout/LayoutHeader.vue'
import ProgressBar from './components/ProgressBar.vue'

export default defineComponent({
    components: {
        LayoutHeader,
        ProgressBar
    },
    setup() {
        const signupStore = useSignupStore()

        return {
            page: computed(() => signupStore.page)
        }
    }
})
</script>

<style scoped>
.background {
    background: url('src/assets/signup-background.svg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100vw;
    height: 100vh;
}
</style>
