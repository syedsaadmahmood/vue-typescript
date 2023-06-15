import { defineStore } from 'pinia'

export const useSignupStore = defineStore({
    id: 'signup',
    state: () => ({
        page: 1
    }),
    actions: {
        incrementPage() {
            if (this.page < 3) this.page++
        },
        decrementPage() {
            if (this.page > 1) this.page--
        },
        setPage(page: number) {
            this.page = page
        }
    }
})
