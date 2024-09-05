<script setup>
var experienceItems = [
  {
    title: 'Haulmer',
    subtitle: 'Ingeniero de Software',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad beatae, commodi consequuntur et eum excepturi facilis in ipsam molestias neque optio perferendis ratione sapiente soluta sunt unde veritatis. Similique.',
    dotColor: 'blue',
    size: 'small'
  },
  {
    title: 'Transbank',
    subtitle: 'Práctica Desarrollador Web Full-Stack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad beatae, commodi consequuntur et eum excepturi facilis in ipsam molestias neque optio perferendis ratione sapiente soluta sunt unde veritatis. Similique.',
    dotColor: 'red',
    size: 'small'
  }
]
</script>

<template>
  <v-card variant="text" prepend-icon="mdi-briefcase-outline">
    <template v-slot:title>
      <span class="text-h5">Experiencia Laboral</span>
    </template>
    <v-card-text>
      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="item in experienceItems"
          :dot-color="item.dotColor"
          :size="item.size"
        >
          <v-card variant="text"
                  :title="item.title"
                  :subtitle="item.subtitle"
          >
            <v-card-text>
              {{ item.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="sass">

</style>
