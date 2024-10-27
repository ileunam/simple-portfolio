<script setup>
import {useGoTo} from "vuetify";
import {useScrollStore} from "@/stores/scroll";

const goTo = useGoTo();
const scrollStore = useScrollStore();

function goToRoute(route) {
  this.goTo(route);

}

function onScroll() {
  console.log('scrolling')
}
</script>


<template>
  <v-layout class="overflow-visible d-flex justify-center" style="height: 56px;">
    <v-bottom-navigation
      style="position: fixed;width: 60%; left: auto; bottom: 10px;"
      color="primary"
      grow
      density="compact"
      mode="shift"
      rounded="pill"
      v-model="scrollStore.currentSection"
    >
      <v-btn
        @click="goToRoute('#resume-title')">
        <v-icon>mdi-human-greeting</v-icon>
        <span>Hola!</span>
      </v-btn>
      <v-btn
        @click="goToRoute('#resume-experience')"
      >
        <v-icon>mdi-briefcase</v-icon>
        <span>Experiencia</span>
      </v-btn>

      <v-btn @click="goToRoute('#resume-about-me')">
        <v-icon>mdi-account</v-icon>

        <span>Acerca de mi</span>
      </v-btn>

    </v-bottom-navigation>
  </v-layout>
</template>

<style scoped lang="sass">

</style>
