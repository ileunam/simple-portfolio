// Utilities
import {defineStore} from 'pinia'
import {skills} from "@/assets/data/skills";

export const useResumeSkillsStore = defineStore('resumeSkills', {
  state: () => ({
    skillsInfo: skills
  }),
})
