<script setup>
import { ref, onMounted } from "vue";

const data = ref(null);

onMounted(() => {
    setTimeout(() => {
        data.value = {
            name: "John Doe",
            age: 30,
            email: "john.doe@example.com",
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            phone: "555-1234",
            occupation: "Software Developer",
            company: "Tech Corp",
            hobbies: ["reading", "gaming", "hiking"],
            website: "https://johndoe.com",
        };
    }, 1000);
});
</script>

<template>
    <slot :data="data"></slot>
</template>
