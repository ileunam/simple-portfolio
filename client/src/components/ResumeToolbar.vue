<script setup>

</script>


<template>
  <v-layout class="overflow-visible d-flex justify-center" style="height: 56px;">
    <v-bottom-navigation
      style="position: fixed;width: 60%; left: auto; bottom: 10px;"
      color="primary"
      active
      grow
      density="compact"
      mode="shift"
      rounded="pill"
    >
      <v-btn>
        <v-icon>mdi-history</v-icon>

        <span>Recents</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<style scoped lang="sass">

</style>
