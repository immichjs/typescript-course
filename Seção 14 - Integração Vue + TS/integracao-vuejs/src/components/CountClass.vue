<template>
  <div>
    <h1>Contador (Classe)</h1>
    <h1>{{ count }}</h1>
    <h2>{{ getParOuImpar() }}</h2>
    <h2>{{ parOuImpar }}</h2>
    <button @click="setCount(-1)">-</button>  
    <button @click="setCount(1)">+</button>  
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CountClass extends Vue {
  @Prop(Number) private readonly initialValue?: number // initialValue! = obrigatório
  private count: number = this.initialValue || 0

  public setCount (delta: number) {
    this.count += delta
  }

  public get ParOuImpar (): string {
    return this.count % 2 === 0 ? 'Par' : 'Impar'
  }
}

</script>


<style>

</style>
