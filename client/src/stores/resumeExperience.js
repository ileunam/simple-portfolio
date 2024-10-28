// Utilities
import {defineStore} from 'pinia'
import {experience} from "@/assets/data/experience";

export const useResumeExperienceStore = defineStore('resumeExperience', {
  state: () => ({
    experienceInfo: experience
  }),
})
