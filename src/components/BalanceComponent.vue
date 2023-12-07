<script lang="ts">
import axiosInstance from '@/lib/index';

axiosInstance.get('/getActualBalance')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
</script>

<template>
    <div>
        Balance
    </div>
</template>