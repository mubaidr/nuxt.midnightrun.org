<script setup lang="ts">
const emit = defineEmits(["close"])

function close() {
  emit("close")
}
</script>

<template>
  <!-- TOOD: load instructions from nuxt/content for easier update -->
  <div>
    <VToolbar>
      <template #append>
        <UButton
          size="sm"
          icon="mdi-close"
          @click="close()"
        />
      </template>

      <divItem>
        <divTitle>Privacy Policy & Terms</divTitle>
        <divSubtitle>Please read the policy and terms carefully</divSubtitle>
      </divItem>
    </VToolbar>

    <div>
      <ul class="pl-4">
        <li>Seom lAliquip id officia reprehenderit eiusmod ad duis commodo.</li>
        <li>
          Sit veniam sit fugiat eu aliqua veniam exercitation ex consectetur
          sunt ad esse.
        </li>
        <li>
          Nisi veniam laboris in ullamco consequat non deserunt voluptate
          laboris minim voluptate pariatur.
        </li>
        <li>
          Velit consequat nulla ad occaecat non consequat labore sit ut veniam
          ipsum veniam dolore.
        </li>
        <li>Minim labore magna culpa irure proident irure.</li>
        <li>
          Proident do aliqua esse labore aliqua nisi reprehenderit aute laboris
          cillum ex cillum.
        </li>
        <li>Amet deserunt dolore velit fugiat et sit ea.</li>
        <li>Anim Lorem ut do dolore ex nostrud officia ullamco.</li>
      </ul>
    </div>

    <div>
      <hr />
      <UButton @click="close()">
        <Icon name="ms:123" />
        <Icon name="ms:account-circle-outline" />
        <Icon name="ms:home" />
        <VIcon>mdi-check</VIcon>
        <span>I Have Read and understood the terms</span>
      </UButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
