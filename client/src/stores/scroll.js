// Utilities
import {defineStore} from 'pinia'

const sections = {
  'resume-title': 0,
  'resume-experience': 1,
  'resume-about-me': 2
}
export const useScrollStore = defineStore('scroll', {
  state: () => ({
    currentSection: sections['resume-title']
  }),
  actions: {
    setCurrentSection(section) {
      this.currentSection = sections[section]
    }
  }
})
