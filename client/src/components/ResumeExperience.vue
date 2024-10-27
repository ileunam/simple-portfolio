<script setup>
import {useResumeExperienceStore} from "@/stores/resumeExperience";

const experienceStore = useResumeExperienceStore()
</script>

<template>
  <section id="resume-experience">
    <v-card class="mt-16" variant="text">
      <v-card-title class="d-flex flex-nowrap align-center">
        <v-icon class="mr-3">mdi-briefcase-outline</v-icon>
        <span class="text-h5">Experiencia Laboral</span>
      </v-card-title>
      <v-card-text>
        <v-timeline align="start" density="compact">
          <v-timeline-item
            v-for="item in experienceStore.experienceInfo"
            :size="item.size"
          >
            <template v-slot:icon>
              <v-avatar :image="item.dotLogo"></v-avatar>
            </template>
            <v-card variant="text"
            >
              <v-card-title class="pt-0">

                <p class="text-h5">{{ item.title }}</p>
                <p class="text-h7">{{ item.subtitle }}</p>
              </v-card-title>
              <v-card-text class="text-wrap">
                <ul>
                  <li class="mt-2 text-justify" v-for="desc in item.description">
                    <span  v-html="desc"></span>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </section>
</template>

<style scoped lang="sass">

</style>
