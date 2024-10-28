<script setup>
import {useResumeSkillsStore} from "@/stores/resumeSkills";

const skillsStore = useResumeSkillsStore()
</script>

<template>
  <section id="resume-skills">
    <v-card class="mt-16" variant="text">
      <v-card-title class="d-flex flex-nowrap align-center justify-center">
        <v-icon class="mr-3">mdi-code-tags</v-icon>
        <span class="text-h5 font-weight-bold">Habilidades Principales</span>
      </v-card-title>
      <v-card-text>
        <div class="d-flex flex-wrap justify-center">
          <v-chip
            v-for="skill in skillsStore.skillsInfo"
            class="ma-2"
            :color="skill.color"
            variant="flat"
            :prepend-icon="skill.icon"
          ><span class="font-weight-bold">{{
              skill.title
            }}</span></v-chip>
        </div>
      </v-card-text>
    </v-card>
  </section>
</template>

<style scoped lang="sass">

</style>
