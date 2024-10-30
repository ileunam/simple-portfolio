<script setup>
import {useResumeFooterStore} from "@/stores/resumeFooter";

const footerStore = useResumeFooterStore();
</script>

<template>
  <v-footer
    class="text-center d-flex flex-column"
    color="background"
  >
    <div>
      <v-btn
        v-for="(social, index) in footerStore.footerSocial"
        :key="index"
        :icon="social.icon"
        :href="social.url"
        target="_blank"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Para contactar conmigo envíame un correo a <strong>manuelvaalram@gmail.com</strong> o háblame a cualquiera de mis redes!
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Manuel Valenzuela</strong>
    </div>
  </v-footer>
</template>
