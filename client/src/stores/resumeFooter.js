// Utilities
import {defineStore} from 'pinia'
import {social} from "@/assets/data/footer";

export const useResumeFooterStore = defineStore('resumeFooter', {
  state: () => ({
    footerSocial: social
  }),
})
