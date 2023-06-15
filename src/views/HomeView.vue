<template>
    <v-container fluid class="fill-height center">
        <v-row dense no-gutters justify="center" align="center">
            <v-col cols="12" sm="8" md="6" lg="6">
                <SignupPage1 v-if="page === 1"></SignupPage1>
                <SignupPage2 v-if="page === 2"></SignupPage2>
                <SignupPage3 v-if="page === 3"></SignupPage3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSignupStore } from '../stores/signupStore'
import SignupPage1 from '../components/signup/signupPage1.vue'
import SignupPage2 from '../components/signup/signupPage2.vue'
import SignupPage3 from '../components/signup/signupPage3.vue'

export default defineComponent({
    components: {
        SignupPage1,
        SignupPage2,
        SignupPage3
    },
    setup() {
        const signupStore = useSignupStore()

        return {
            page: computed(() => signupStore.page)
        }
    }
})
</script>

<style lang="scss" scoped>
.center {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}
</style>
