import { ref } from 'vue'
import { defineStore } from 'pinia'
import { jwtString } from '@/config'


export const useSessionStore = defineStore('session', () => {
  const token = ref("");

  if (!token.value) {
    token.value = jwtString;
  }

  return { token }
})
