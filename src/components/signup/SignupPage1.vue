<template>
    <div>
        <h1 class="text-center">Lets get you set up!</h1>
        <v-row class="pt-4">
            <v-col cols="12" sm="8">
                <v-row v-for="(step, index) in steps" :key="index">
                    <v-col cols="2" class="d-flex align-start justify-center mt-1">
                        <div class="circle font-weight-bold" :class="index === 0 ? 'bg-brown500' : 'bg-brown100 text-brown300'">
                            {{ step.number }}
                        </div>
                    </v-col>
                    <v-col cols="10" class="text-md-body-2">
                        <p class="font-weight-medium">{{ step.title }}</p>
                        <p class="text-grey200">{{ step.description }}</p>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center justify-center pt-5">
                    <v-btn rounded @click="nextPage" color="brown500" class="button font-weight-bold">Let's get started</v-btn>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" class="text-center">
                <img src="src/assets/welcome.svg" class="image pt-3" alt="welcome" />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSignupStore } from '../../stores/signupStore'

export default defineComponent({
    data() {
        return {
            steps: [
                {
                    number: 1,
                    title: 'Add your personal details',
                    description: 'Let us get to know you better for a personalized experience.'
                },
                {
                    number: 2,
                    title: 'Add your employment details',
                    description: 'These details will help us provide you with opportunities relevant to your field.'
                },
                {
                    number: 3,
                    title: 'Complete your profile',
                    description: 'Give us a comprehensive view of your skills and experiences to tailor your opportunities even more.'
                }
            ]
        }
    },
    setup() {
        const signupStore = useSignupStore()

        const nextPage = () => {
            signupStore.incrementPage()
        }

        return {
            nextPage
        }
    }
})
</script>

<style lang="scss" scoped>
.circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
}
.image {
    width: 12em;
}
.button {
    text-transform: none;
}
</style>
