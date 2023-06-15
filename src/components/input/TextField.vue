<template>
    <v-text-field
        v-model="internalValue"
        :class="classField"
        dense
        flat
        solo
        filled
        hide-details="auto"
        :error-messages="errorMessages"
        :placeholder="placeholder"
        :label="label"
    />
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
    name: 'TextField',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        errorMessages: {
            type: Array as () => Array<string>,
            default: () => []
        },
        classField: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const internalValue = ref(props.modelValue)

        watch(internalValue, (newVal) => {
            emit('update:modelValue', newVal)
        })

        return {
            internalValue
        }
    }
})
</script>

<style scoped>
::v-deep .v-text-field__slot > input {
    font-style: italic;
}
.flex-row-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.flex-row-item {
    flex-grow: 1;
}
::v-deep .v-input__control {
    border: 1px solid black;
    border-radius: 5px;
}

::v-deep .v-input__control:focus-within {
    border: 1px solid #ca8a4b;
    border-radius: 5px;
}
::v-deep .v-field--variant-filled .v-field__overlay {
    background-color: white;
}
::v-deep .v-field--variant-filled .v-field__outline::before {
    border: none;
}
</style>
