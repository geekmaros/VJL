import { defineStore, acceptHMRUpdate } from 'pinia'
import productData from '../api/productData.json'

export const useProduct = defineStore('module/product', {
    state: () => ({
        products: []
    }),
    getters: {
        getAllProducts: (state) => state.products,
    },
    actions: {
        fetchProducts() {
            this.products =  productData;
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProduct, import.meta.hot))
}
