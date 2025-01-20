<script lang="ts" setup>
definePageMeta({
  auth: false,
})

const items = [
  {
    icon: "ph-t-shirt",
    label: "Collect and Sort Clothes",
    link: "/collect-and-sort",
    content:
      "Each group should supply a complete set of men's seasonal clothes, using Midnight Run supplies as a supplement. Think about doing a clothing drive for coats, pants or other items a month or more before your run. All clothing should be thoroughly sorted before the night of the run. ",
  },
  {
    icon: "ph-users-three",
    label: "Assemble a Crew",
    link: "/assemble-crew",
    content:
      "Assembling a crew of volunteers for each run is the responsibility of the group organizer. Include two experienced run leaders, and between four and twelve volunteers.",
  },
  {
    icon: "ph-car",
    label: "Reserve Vehicles",
    link: "/reserve-vehicles",
    content:
      "Plan to take two or three vehicles on your run. Midnight Run owns three vans that are loaned to volunteer group by request.",
  },
  {
    icon: "ph-shipping-container",
    label: "Buying Durables",
    link: "/buying-durables",
    content:
      "Durable items include toiletries, socks and underwear, and food distribution items. Make sure you’re fully stocked a week before your run.",
  },
  {
    icon: "ph-shopping-cart",
    label: "Buying Food",
    link: "/buying-food",
    content:
      "Food items include bag lunches, soup and beverages. Each volunteer group is responsible for food purchase and preparation for its run. You may borrow the Midnight Run kitchen and containers (leave them as clean as you found them!).",
  },
  {
    icon: "ph-fork-knife",
    label: "Preparing Food",
    link: "/preparing-food",
    content:
      "The two major food prep items are the soup and the sandwiches. The soup is prepared offsite the day of or day before the run. Sandwich prep and lunch bag assembly are typically done by the run crew in the two hours before the crew leaves for the city.",
  },
  {
    icon: "ph-van",
    label: "Retrieve Van",
    link: "/retrieve-van",
    content:
      "The vans can be picked up in Dobbs Ferry any time after 1 pm on the day of the run. Dale will coordinate with you in email location and the pick-up of keys. Vans should be returned by noon the following day.",
  },
  {
    icon: "ph-path",
    label: "Plan Navigation",
    link: "/plan-navigation",
    content:
      "If you know Manhattan like the back of your hand, then you don't need the maps we've attached here. But you still need to stick to the order of the stop list, and arrive at your first stop at about 10 pm.",
  },
  {
    icon: "ph-share",
    label: "Distribute the Goods",
    link: "/distribute-goods",
    content:
      "Midnight Run’s goal is to establish a forum for meaningful exchange between the housed and the homeless. One element of that exchange is delivering what people on the street need to survive, and to do it effectively and fairly.",
  },
  {
    icon: "ph-broom",
    label: "Clean Up",
    link: "/clean-up",
    content:
      "The general rule on cleanup is to leave everything cleaner than the way you found it. That rule pertains to the stops, the vans and the Midnight Run office.",
  },
]
</script>

<template>
  <div class="prose dark:prose-invert">
    <h1>How To Do A Run</h1>
    <p class="text-xl">
      A successful run requires an attitude of openness and sharing, but it also
      requires the coordination of LOTS of details. Below are the ten steps to a
      successful run:
    </p>

    <div>
      <UAccordion
        :items="items"
        color="primary"
        variant="soft"
      >
        <template #item="{ item }">
          <p>
            {{ item.content }}
          </p>
          <div class="flex justify-end">
            <ULink :to="item.link">More Information</ULink>
          </div>
        </template>
      </UAccordion>
    </div>

    <p>
      For additional Breakfast Run instructions, go
      <ULink to="/breakfast">here</ULink>
      .

      <br />

      Special details for Saturday and Sunday morning runs can be found
      <ULink to="/breakfast">here</ULink>
      .
    </p>
  </div>
</template>
