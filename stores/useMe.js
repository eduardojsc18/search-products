import {defineStore} from 'pinia'
import { useHelpers } from "~/composables/useHelpers.js";

export const useMe = defineStore('me', {
    state: () => ({
        me: {},
    }),
    actions: {
        async get() {
            const { customFetch } = useHelpers()
            const {data: response} = await useAsyncData('ME',
                () => customFetch(`/users/me`),
            );
            this.me = response.value
        }
    },
})
