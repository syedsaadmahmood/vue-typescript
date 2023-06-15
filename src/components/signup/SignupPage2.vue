<template>
    <v-container fluid>
        <v-row class="pt-4">
            <v-col cols="2" sm="2" class="d-flex align-center justify-center">
                <v-icon color="grey200" class="icon-left" @click="handleBack">mdi-arrow-left</v-icon>
            </v-col>
            <v-col cols="8" sm="8">
                <h1>What's your name!</h1>
                <h5 class="text-grey200 text-md-body-2">Please enter your full name as it appears on your Driver's License or Passport</h5>
                <v-row class="pt-6">
                    <v-col cols="12" sm="6">
                        <TextField v-model="firstName" :error-messages="errors.firstName" label="First name"> </TextField>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <TextField v-model="lastName" :error-messages="errors.lastName" label="Last name"> </TextField>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center">
                        <v-btn @click="handleEnter" variant="plain" class="button" append-icon="mdi-arrow-right-circle">
                            <p class="font-weight-bold">Press Enter</p>
                            <template v-slot:append>
                                <v-icon class="icon-right" color="grey200"></v-icon>
                            </template>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" sm="2"></v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import TextField from '../input/TextField.vue'
import { useSignupStore } from '../../stores/signupStore'

export default defineComponent({
    name: 'YourComponentName',
    components: {
        TextField
    },
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        const signupStore = useSignupStore()

        const rules = computed(() => ({
            firstName: { required },
            lastName: { required }
        }))

        const v$ = useVuelidate(rules, { firstName, lastName })

        const errors = computed(() => ({
            firstName: v$.value.firstName.$error ? ['Provide first name...'] : [],
            lastName: v$.value.lastName.$error ? ['Provide last name...'] : []
        }))

        const handleEnter = () => {
            v$.value.firstName.$touch()
            v$.value.lastName.$touch()

            if (v$.value.firstName.$error || v$.value.lastName.$error) {
                return
            }

            signupStore.incrementPage()
        }

        const handleBack = () => {
            signupStore.decrementPage()
        }

        return {
            firstName,
            lastName,
            errors,
            handleEnter,
            handleBack
        }
    }
})
</script>

<style lang="scss" scoped>
.button {
    text-transform: none;
}
.icon-right {
    font-size: 40px;
}
.icon-left {
    font-size: 30px;
}
</style>
