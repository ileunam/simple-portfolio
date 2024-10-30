<script setup>
import {useGoTo} from "vuetify";
import {useScrollStore} from "@/stores/scroll";

const goTo = useGoTo();
const scrollStore = useScrollStore();

function goToRoute(route) {
  goTo(route);

}

function onScroll() {
  console.log('scrolling')
}
</script>


<template>
  <v-layout class="overflow-visible d-flex justify-center">
    <v-bottom-navigation
      class="w-75 w-sm-50"
      style="position: fixed; left: auto; top: 10px;"
      color="primary"
      grow
      density="compact"
      mode="shift"
      rounded="pill"
      mandatory
      v-model="scrollStore.currentSection"

    >
      <v-btn
        size="sm"
        @click="goToRoute('#resume-title')">
        <v-icon>mdi-human-greeting</v-icon>
        <span>Hola!</span>
      </v-btn>
      <v-btn
        size="sm"
        height="30"
        @click="goToRoute('#resume-experience')"
      >
        <v-icon>mdi-briefcase</v-icon>
        <span>Experiencia</span>
      </v-btn>
      <v-btn
        size="sm"
        @click="goToRoute('#resume-about-me')"
      >
        <v-icon>mdi-account</v-icon>
        <span>Acerca de mí</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<style scoped lang="sass">

</style>
