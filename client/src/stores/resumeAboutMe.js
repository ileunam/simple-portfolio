// Utilities
import {defineStore} from 'pinia'
import {aboutMe} from "@/assets/data/aboutMe";

export const useResumeAboutMeStore = defineStore('resumeAboutMe', {
  state: () => ({
    aboutMeInfo: aboutMe
  }),
})
