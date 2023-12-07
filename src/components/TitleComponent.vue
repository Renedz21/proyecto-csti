<script setup lang="ts">

interface Props {
    title: string
}

defineProps<Props>()

</script>

<template>
    <header class="bg-white flex flex-col items-center justify-center py-4 md:py-6">
        <img alt="Vue logo" class="object-contain w-auto h-auto max-w-[75px]" src="@/assets/logo.svg" />
        <h1 class="text-2xl font-semibold text-gray-700 mt-6">{{ title }}</h1>
    </header>
</template>