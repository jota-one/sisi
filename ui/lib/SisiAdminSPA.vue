<template>
  <div class="SisiAdminApp">
    <h1>Sisi Admin SPA</h1>
    <Counter />
    API Prefix: {{ apiPrefix }}
    <br>
    <code>upcomingEvents</code> call response:
    <pre>
      {{ upcomingEvents }}
    </pre>
  </div>  
</template>

<script setup lang="ts">
import { Knex } from 'knex'
import { defineProps, onMounted, ref } from 'vue'
import { getUpcomingEvents } from '../../api'
import Counter from './components/Counter.vue'

const props = defineProps({
  apiPrefix: {
    type: String,
    default: '/api/sisi'
  }
})

const upcomingEvents = ref([])

onMounted(async () => {
  const res = await fetch(`${props.apiPrefix}/b`)
  const json = await res.json()
  upcomingEvents.value = json
})
</script>
