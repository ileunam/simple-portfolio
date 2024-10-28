<script setup>
import {useGoTo} from "vuetify";
import {useScrollStore} from "@/stores/scroll";

const goTo = useGoTo();
const scrollStore = useScrollStore();
const toolBarWidthClass = ref('w-25');
const isToolbarOpen = ref(false);

function goToRoute(route) {
  goTo(route);

}

function onScroll() {
  console.log('scrolling')
}

function changeToolbarWidth() {
  console.log('changing toolbar width')
  console.log(toolBarWidthClass.value)
  if (toolBarWidthClass.value === 'w-25') {
    toolBarWidthClass.value = 'w-75';
    isToolbarOpen.value = true;
  } else {
    toolBarWidthClass.value = 'w-25';
    isToolbarOpen.value = false;
  }
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
      :mandatory="isToolbarOpen"
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
