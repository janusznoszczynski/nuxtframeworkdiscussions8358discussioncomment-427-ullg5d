<template>
  <div>
    <div>Data from fetch:</div>
    <pre>{{ data ?? 'No data?' }}</pre>
    <pre>{{ error ?? 'No error' }}</pre>
  </div>
</template>

<script setup>
const { data, error } = await useFetch('http://localhost:3000/data.json');
</script>
