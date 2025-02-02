<script lang="ts" setup>
import TheTitle from '@/components/TheTitle.vue'
import { ref } from 'vue'

const contador = ref(1)
function increment() {
  contador.value++
}
function decremet() {
  contador.value--
}
</script>

<template>
  <section class="counter">
    <TheTitle class="counter__title"
      >Este contador puede cambiar su valor de forma dinámica</TheTitle
    >
    <p class="counter__value">{{ contador }}</p>
    <p class="counter__increment">
      <button @click="increment" class="counter__increment-button">
        Incrementar el valor en 1
      </button>
    </p>
    <p class="counter__decrement">
      <button @click="decremet" class="counter__decrement-button">Decrementar el valor en 1</button>
    </p>
  </section>
</template>

<style lang="scss" scoped>
.counter {
  width: fit-content;
  margin: auto;
  padding: 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__value {
    font-size: var(--fs-big-medium);
    color: var(--c-black);
  }
  &__increment {
    margin: 2em 2em;
  }
  &__decrement {
    margin: 2em 2em;
  }
}
</style>
