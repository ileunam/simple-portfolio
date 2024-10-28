<script setup>
import {useResumeTitleStore} from "@/stores/resumeTitle";

const titleStore = useResumeTitleStore()


</script>

<template>
  <section id="resume-title" class="mt-16">
    <v-card variant="text" max-width="700">
      <v-card-title class="pb-0">
        <v-avatar
          image="../assets/photo1.png"
          size="80"
        ></v-avatar>
        <v-chip class="ml-3" variant="outlined" prepend-icon="mdi-checkbox-marked-circle" color="green">Estoy
          disponible!
        </v-chip>
      </v-card-title>


      <v-card-title class="text-h4 text-wrap font-weight-bold">{{ titleStore.titleInfo.title }}</v-card-title>
      <v-card-text class="text-h6 text-wrap pb-0">
        <span  v-html="titleStore.titleInfo.subtitle"></span>
      </v-card-text>
      <v-card-actions class="pl-3">
        <v-chip
          prepend-icon="mdi-email-outline"
          href="#"
          color="primary"
        >
          Contáctame
        </v-chip>
        <v-chip
          prepend-icon="mdi-linkedin"
          href="https://www.linkedin.com/in/manuelvalenzuelaramirez/"
          color="primary"
        >
          Linkedin
        </v-chip>
      </v-card-actions>
    </v-card>
  </section>
</template>

<style scoped lang="sass">

</style>
