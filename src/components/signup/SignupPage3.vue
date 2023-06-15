<template>
    <div class="flex-container text-center">
        <img src="src/assets/Liwa-logo-dark.png" class="image" alt="liwa" />
        <h2 class="pt-5">Congratulations.</h2>
        <h2>Welcome to Liwa Capital Advisors.</h2>
        <p class="text-grey">We are excited to embark on this journey together</p>
        <v-btn rounded color="brown500" class="button font-weight-bold mt-8" @click="goToFirstPage">View your dashboard</v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSignupStore } from '../../stores/signupStore'

export default defineComponent({
    setup() {
        const signupStore = useSignupStore()

        const goToFirstPage = () => {
            signupStore.setPage(1)
        }

        return {
            goToFirstPage
        }
    }
})
</script>

<style scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.image {
    width: 6em;
}
.button {
    text-transform: none;
}
</style>
