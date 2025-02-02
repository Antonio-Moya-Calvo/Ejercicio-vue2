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
      <button v-if="contador < 10" @click="increment" class="counter__increment">
        Incrementar el valor en 1
      </button>
      <span v-else class="counter__alerta">Has sobrepasado el valor Máximo</span>
    </p>
    <p class="counter__decrement">
      <button v-if="contador >= 0" @click="decremet" class="counter__decrement">
        Decrementar el valor en 1
      </button>
      <span v-else class="counter__alerta">Has sobrepasado el valor Mínimo</span>
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
  &__alerta {
    color: var(--c-red);
    font-size: var(--fs-extra-big);
  }
}
</style>
