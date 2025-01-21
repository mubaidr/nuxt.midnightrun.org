<script lang="ts" setup>
definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>Food Dropoff Locations</h1>
    <p class="text-xl">
      Here is a list of places in New York City and Westchester that accept food
      left over from your run (particularly bag meals):
    </p>

    <div>
      <ul>
        <li>Bowery Mission; 227 Bowery between Prince & Spring NYC</li>
        <li>Sharing Community; Getty Square, Yonkers; (914) 328-1896</li>
        <li>Port Chester Carver Center; Port Chester; (914) 967-5498</li>
        <li>
          Hope Community Services; Washington Avenue, New Rochelle; (914)
          636-4010
        </li>
        <li>Open Arms; Post Road, White Plains; (914) 948-5044</li>
        <li>Westchester Coalition for the Hungry & Homeless; (914) 682-2737</li>
      </ul>
    </div>

    <div class="flex justify-center gap-2">
      <UButton to="/how-to-do-run/buying-food">Buying Food</UButton>
      <UButton to="/how-to-do-run">How To Do Run</UButton>
    </div>
  </div>
</template>
