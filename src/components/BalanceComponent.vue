<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useBalance } from '../composables/useBalance';
import LoaderComponent from './LoaderComponent.vue';
import PhoneIcon from '../utils/PhoneIcon.vue';
import CalendarIcon from '../utils/CalendarIcon.vue';
import BulbIcon from '../utils/BulbIcon.vue';

const { data, isLoading, isPending } = useBalance();

</script>

<template>
    <div class="w-full text-gray-800">
        <h2 class="text-sm">Saldo Virtual</h2>
        <div v-if="isPending && isLoading">
            <LoaderComponent />
        </div>
        <p class="text-2xl font-bold my-2" v-else>S/ {{ data }}</p>

        <div class="w-full">
            <p class="border text-sm my-2 border-gray-300 px-4 py-2 rounded-full w-fit">
                ¿Cómo cargar mi saldo virtual?
            </p>
            <p class="text-gray-700 font-medium">
                Código para cargar tu saldo: <span class="text-cyan-500">(12345678901)</span>
            </p>
        </div>
    </div>

    <hr class="my-4">

    <div class="w-full">
        <div class="flex flex-col space-y-4">
            <RouterLink class="bg bg-gray-200 flex items-center gap-4 text-gray-700 p-4 rounded-md font-medium"
                to="/recargas">
                <div class="bg bg-orange-500 text-white font-medium p-2 rounded-md">
                    <PhoneIcon />
                </div>
                Recargas
            </RouterLink>
            <RouterLink class="bg bg-gray-200 flex items-center gap-4 text-gray-700 p-4 rounded-md font-medium" to="/">
                <div class="bg bg-orange-500 text-white font-medium p-2 rounded-md">
                    <BulbIcon />
                </div>
                Pago de Servicios
            </RouterLink>
            <RouterLink class="bg bg-gray-200 flex items-center gap-4 text-gray-700 p-4 rounded-md font-medium" to="/">
                <div class="bg bg-orange-500 text-white font-medium p-2 rounded-md">
                    <CalendarIcon />
                </div>
                Historial de ganancias y operaciones
            </RouterLink>
        </div>
    </div>
</template>