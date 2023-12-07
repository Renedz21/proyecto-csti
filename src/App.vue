<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TitleComponent from './components/TitleComponent.vue';
import BalanceComponent from './components/BalanceComponent.vue';

</script>

<template>
  <TitleComponent title="Recargas y pagos" />
  <!-- <RouterLink to="/">Home</RouterLink> -->
  <BalanceComponent />
  <div>

  </div>

  <RouterView />
</template>