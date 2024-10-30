// Utilities
import {defineStore} from 'pinia'
import {social, title} from "@/assets/data/title";

export const useResumeTitleStore = defineStore('resumeTitle', {
  state: () => ({
    titleInfo: title,
    titleSocial: social
  }),
})
