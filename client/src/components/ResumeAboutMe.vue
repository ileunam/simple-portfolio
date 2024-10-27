<script setup>
import {useResumeAboutMeStore} from "@/stores/resumeAboutMe";

const aboutMeStore = useResumeAboutMeStore();
</script>

<template>
  <section id="resume-about-me">
    <v-card class="mt-16" variant="text">
      <div class="d-flex flex-nowrap justify-space-between">
        <div>
          <v-card-title class="d-flex flex-nowrap align-center">
            <v-icon class="mr-3">mdi-account-outline</v-icon>
            <span class="text-h5">Acerca de mi</span>
          </v-card-title>
          <v-card-text>
            <p class="text-justify">{{ aboutMeStore.aboutMeInfo}}</p>
          </v-card-text>
        </div>
        <v-avatar
          image="../assets/photo2.jpg"
          size="200"
          rounded="0"
        ></v-avatar>
      </div>

    </v-card>
  </section>
</template>

<style scoped lang="sass">
</style>
