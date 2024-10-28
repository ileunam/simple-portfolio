// Utilities
import {defineStore} from 'pinia'

//TODO: refactor this using element index
const sections = {
  'resume-title': 0,
  'resume-experience': 1,
  'resume-skills': 2,
  'resume-about-me': 3,
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
