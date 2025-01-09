<script setup>
// import DataContainer from "./components/DataContainer.vue";
import Card from "./components/Card.vue";
import Details from "./components/Details.vue";
import useData from "./components/useData";

const { data } = useData();
</script>

<template>
    <!-- <DataContainer v-slot="{ data }"> -->
    <Card :data="data" />
    <Details :data="data" />
    <!-- </DataContainer> -->
</template>
