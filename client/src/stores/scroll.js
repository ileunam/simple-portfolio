// Utilities
import {defineStore} from 'pinia'

//TODO: refactor this using element index
const sections = ['resume-title', 'resume-experience', 'resume-about-me']

export const useScrollStore = defineStore('scroll', {
  state: () => ({
    currentSection: 0
  }),
  actions: {
    setCurrentSection(section) {
      this.currentSection = sections.indexOf(section)
    }
  }
})
