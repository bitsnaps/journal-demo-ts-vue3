<script lang="ts" setup>
import type Entry from '../types/Entry'
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";
const { findEmoji } = UseEmojis();

/*/ Runtime declaration of Props
const props = defineProps({
  randomProp: {
    // We can't use TypeScript declaration for runtime declaration
    type: Entry
  }
})
*/

// This interface cannot be imported from another file
// interface Props {
//   entry: Entry
//   randomProp: string
// }

// We use type based declaration (the default value can be done by opt-in reactivityTransform in vite.config.ts)
// const props = defineProps<Props>()
// const { entry, randomProp = "default value"} = defineProps<Props>()
/*const props = */ defineProps<{
  entry: Entry
  // entry?: Entry // You can make a prop optional
  // randomProp: string
}>()

// We can 
</script>

<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entry.emoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">User ID: {{ entry.userId}}</span>
    </div>
  </div>
</template>
