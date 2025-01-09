<script setup>
import { defineProps } from "vue";

defineProps({
    data: Object,
});
</script>

<template>
    <div class="card">
        <h2>{{ data?.name }}</h2>
        <p>Age: {{ data?.age }}</p>
    </div>
</template>
