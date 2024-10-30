<template>
  <v-container max-width="1000">
    <ResumeTitle/>
    <ResumeExperience/>
    <ResumeSkills/>
    <ResumeAboutMe/>
    <ResumeToolbar/>
  </v-container>
</template>

<script setup>
import {onMounted} from 'vue';
import {useScrollStore} from '@/stores/scroll';
import ResumeSkills from "@/components/ResumeSkills.vue";

const scrollStore = useScrollStore();

function setupScrollWatcher() {
  const sections = document.querySelectorAll('section[id]');

  if (!sections.length) {
    console.error('No se encontraron secciones con IDs.');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          scrollStore.setCurrentSection(id);
        }
      });
    },
    {
      threshold: 0.6, // 60% de la sección visible
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// Llama al observador cuando el componente esté montado
onMounted(() => {
  console.log('Configurando ScrollWatcher');
  setupScrollWatcher();
});
</script>
