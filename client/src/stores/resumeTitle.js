// Utilities
import { defineStore } from 'pinia'
import {title} from "@/assets/data/title";

export const useResumeTitleStore = defineStore('resumeTitle', {
  state: () => ({
    titleInfo: title
  }),
})
