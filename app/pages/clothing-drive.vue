<script lang="ts" setup>
definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>Clothing Drive Guide</h1>

    <p class="text-xl">
      Midnight Run relies on its friends and member groups to contribute clothes
      and other goods.
    </p>

    <p>
      We send between ten and twenty-five crews into the city every week to
      distribute goods to the homeless poor. There are never enough material
      goods to satisfy the demand we see on the streets.
    </p>

    <p>
      We've put together this Clothing Drive Guide to help you organize an
      effort within your church, synagogue, school or community group.
    </p>

    <p>
      Midnight Run sees far more men than women (and thankfully we rarely see
      children). Therefore, we need only men's clothing. The most needed items
      are seasonal men's casual wear.
    </p>

    <div>
      <h2>Winter:</h2>

      <ul>
        <li>Socks & underwear</li>
        <li>Pants (especially jeans)</li>
        <li>Coats & jackets</li>
        <li>Shirts (especially flannel)</li>
        <li>Sweatshirts & sweatpants</li>
        <li>Knapsacks & book bags</li>
        <li>Shoes (especially boots, sneakers or other soft-soled shoes)</li>
        <li>Gloves & mittens</li>
        <li>Warm hats & scarves</li>
      </ul>

      <h2>Summer:</h2>

      <ul>
        <li>Socks & underwear</li>
        <li>Pants (especially jeans)</li>
        <li>Shorts</li>
        <li>Shirts (especially t-shirts)</li>
        <li>Sweatshirts & pants</li>
        <li>Knapsacks & book bags</li>
        <li>Shoes (especially sneakers)</li>
      </ul>

      <h2>Personal care items:</h2>

      <ul>
        <li>soap</li>
        <li>razors</li>
        <li>toothbrushes</li>
        <li>shaving cream</li>
        <li>toothpaste</li>
        <li>deodorant</li>
        <li>shampoo</li>
        <li>lotion</li>
        <li>combs</li>
      </ul>
    </div>

    <p>We also accept donations of towels and blankets.</p>

    <p>
      If a group wishes to do a clothing drive, we have discovered it is most
      effective to target one or two items. You end up with a lot more usable
      clothing and less junk than if you do a general clothing drive.
    </p>
    <p></p>

    <div class="flex justify-center gap-2">
      <UButton to="/contribute">Contribute</UButton>
      <UButton to="/how-to-do-run">How to do a Run</UButton>
    </div>
  </div>
</template>
