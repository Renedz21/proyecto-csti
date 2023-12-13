<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import { useGetProviders } from '../composables/useProviders';
import LoaderComponent from '@/components/LoaderComponent.vue';
import StarIcon from '../utils/StarIcon.vue';
const { data, isLoading, isPending } = useGetProviders();
</script>

<template>
    <TitleComponent title="Recargas" />

    <div>
        <div class="h-full flex items-center justify-center" v-if="isPending && isLoading">
            <LoaderComponent />
        </div>

        <div class="flex flex-col space-y-4">
            <div v-for="provider in data" :key="provider._id"
                class="bg bg-white border-b space-y-2 text-gray-700 p-4  font-medium flex items-center justify-between">
                <div class="flex items-center justify-start gap-4">
                    <img :src="provider.image" :alt="provider.company" class="w-[35px] h-[35px] object-contain" />
                    <span>{{ provider.company }}</span>
                </div>
                <StarIcon />
            </div>
        </div>
    </div>
</template>
