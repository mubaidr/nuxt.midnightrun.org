<script lang="ts" setup>
definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>Our Story</h1>
    <p class="text-xl">
      Midnight Run is a volunteer organization dedicated to finding common
      ground between the housed and the homeless.
    </p>
    <p>
      Midnight Run coordinates over 1,000 relief missions per year, in which
      volunteers from churches, synagogues, schools and other civic groups
      distribute food, clothing, blankets and personal care items to the
      homeless poor on the streets of New York City. The late-night relief
      efforts create a forum for trust, sharing, understanding and affection.
      That human exchange, rather than the exchange of goods, is the essence of
      the Midnight Run mission.
    </p>

    <p>
      Midnight Run is not a solution to homelessness. Our goal is to forge a
      bond between housed and homeless people by establishing a foundation of
      sharing and caring from which solutions may evolve. Through Midnight Run,
      volunteers come to see people on the streets as real people, not a
      commodity. And homeless men and women interact with mainstream adults and
      teenagers whose commitments and concerns go beyond their own lives and
      families.
    </p>

    <div class="flex justify-center gap-2">
      <UButton to="/our-policies">Our Polices</UButton>
      <UButton to="/our-history">Our History</UButton>
    </div>
  </div>
</template>
