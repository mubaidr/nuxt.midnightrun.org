<script setup lang="ts">
definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="text-center text-white">
    <div
      class="rounded-xl p-12"
      style="
        background-image: linear-gradient(
            rgba(2, 30, 94, 0.6),
            rgba(2, 30, 94, 0.8)
          ),
          url(&quot;/images/HomeBackground.jpg&quot;);
        background-size: cover;
        background-position: center;
      "
    >
      <h1 class="text-5xl font-semibold">A Community of Sharing</h1>
      <p>
        Bringing community and justice to the streets of New York City since
        1984.
      </p>

      <div
        class="mt-12 rounded-xl bg-gradient-to-r from-purple-200 via-indigo-200 to-orange-200 p-8 text-black"
      >
        <div class="flex gap-4">
          <UIcon
            name="ph-polygon"
            size="8em"
            class="h-16"
          />
          <div class="text-lg">
            We invite folks from the streets of New York and civic groups from
            greater New York – churches, synagogues, schools – to join our
            community, sharing their time, talents, food, clothing – and selves!
          </div>
        </div>
        <br />
        <div>
          <UButton
            to="/join"
            icon="ph-envelope-simple"
            color="primary"
            size="lg"
          >
            Join Our Community
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
