<template>
  <v-container max-width="1000">
    <v-expand-transition>
      <ResumeTitle/>
    </v-expand-transition>
    <ResumeExperience/>
    <v-expand-transition>
      <ResumeAboutMe/>
    </v-expand-transition>
    <ResumeToolbar/>
  </v-container>
</template>

<script setup>
import {onMounted} from 'vue';
import {useScrollStore} from '@/stores/scroll';

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
          console.log(`Sección visible: ${id}`); // Para verificar
          scrollStore.setCurrentSection(id); // Actualiza la sección visible
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
