import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBannerData } from '../api/index'

export const useBannerStore = defineStore('banner', () => {
    const banners = ref([])
    return {
        banners,
        getBanners: async () => {
            const data =await getBannerData()
            // setBanners(banners)
            // banners=bannerData
            banners.value = data 
        }
    }
})
