<template>
  <div>
    <h1>Contador</h1>
    <h2>{{ count }}</h2>
    <button @click="setCount(-1)">-</button>
    <button @click="setCount(1)">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return { 
      count: this.initialValue || 0
    }
  },
  methods: {
    setCount (delta: number) {
      this.count += delta
    }
  },
  props: {
    initialValue: { type: Number }
  }
})
</script>

<style>

</style>
