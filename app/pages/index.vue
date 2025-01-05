<script setup lang="ts">
definePageMeta({
  auth: false,
})
</script>

<template>
  <div>
    <section>
      <div class="text-center">
        <div class="prose dark:prose-invert">
          <h1>Discover Your Next Career Opportunity</h1>
          <p>
            We are always seeking skilled professionals to join our innovative
            and dynamic team. If you thrive in a collaborative environment and
            are eager to contribute to impactful projects, explore our available
            roles below.
          </p>

          <div class="flex w-full gap-2">
            <UInput
              v-model="filter"
              name="filter"
              placeholder="Type a job title or skill..."
              class="flex-1"
              leading-icon="i-ph-magnifying-glass"
              autocomplete="off"
              :ui="{ icon: { trailing: { pointer: '' } } }"
              @keyup.enter="onSubmit"
            >
              <template #trailing>
                <UButton
                  v-show="filter !== ''"
                  label="Search"
                  size="xs"
                  @click="onSubmit"
                />
              </template>
            </UInput>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <UAlert variant="soft">
          <template #description>
            <p>
              We provide free query resolution services and we do not authorize
              anyone to charge fees on our behalf, nor do we receive any payment
              for the application submission process. Please note that any
              entity or individual demanding payment is not affiliated with us.
            </p>
          </template>
        </UAlert>
      </div>
    </section>

    <section>
      <div class="prose dark:prose-invert">
        <h2>Instructions & Guidelines</h2>
        <p>
          Reprehenderit aute irure ex elit dolor. Dolore officia nulla commodo
          adipisicing culpa Lorem est consectetur esse veniam cillum non sit
          consectetur. Nulla labore sunt ad aliquip esse dolore ullamco ut.
          Dolore labore irure dolore duis nisi quis aliqua nisi enim. In laborum
          veniam consectetur.
        </p>
      </div>
    </section>
  </div>
</template>
