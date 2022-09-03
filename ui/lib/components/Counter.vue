<template>
  <div class="Counter">
    <h2>Counter</h2>
    <p>count: {{count}}</p>
    <button @click="count++">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
