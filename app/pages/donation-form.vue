<script lang="ts" setup>
definePageMeta({
  auth: false,
})

// TODO: genertae a form with required details and option to print/ export to pdf
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>IRS In-Kind Donation Form</h1>
    <p class="text-xl">
      Midnight Run is a volunteer organization dedicated to finding common
      ground between the housed and the homeless.
    </p>
    <p>
      This to warrant that the following clothes and other goods were donated to
      Midnight Run, Inc., a 501-c-3 not-for-profit corporation (Federal I.D.
      #13-3576702), by ________________________.
    </p>

    <p>
      Valuation of these goods is the privilege and responsibility of the donor.
      Estimated value: $___________.
    </p>

    <div>
      <ul>
        <li></li>
      </ul>
    </div>

    <div class="justify-right flex flex-col">
      <p>Date _________</p>
      <p>Signed ________________________</p>
    </div>
  </div>
</template>
