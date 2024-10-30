<script setup>
import {useResumeAboutMeStore} from "@/stores/resumeAboutMe";

const aboutMeStore = useResumeAboutMeStore();
</script>

<template>
  <section id="resume-about-me">
    <v-card class="mt-16" variant="text">
      <v-card-title class="d-flex flex-nowrap align-center">
        <v-icon class="mr-3">mdi-account-outline</v-icon>
        <span class="text-h5 font-weight-bold">Acerca de mí</span>
      </v-card-title>
      <v-card-text class="d-flex
      flex-column-reverse
      flex-sm-row
      justify-center
      justify-space-between">
        <div class="mr-6 align-self-center align-self-sm-start">
          <p class="text-justify">{{ aboutMeStore.aboutMeInfo }}</p>
        </div>

        <v-avatar
          class="align-self-center mt-3 mb-3 mb-sm-0 mt-sm-0"
          image="../assets/photo2.jpg"
          size="200"
          rounded="0"
          variant="elevated"
        ></v-avatar>
      </v-card-text>
    </v-card>
  </section>
</template>

<style scoped lang="sass">
</style>
