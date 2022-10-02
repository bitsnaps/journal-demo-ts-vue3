<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue"
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg"
import type Emoji from '@/types/Emoji'
import type Entry from "@/types/Entry";
import { ref, computed } from 'vue'

// Data
const body = ref('')

// import type {Ref} from 'vue'
// const emoji: Ref<Emoji | null> = ref(null)

// This is the equivalent of the above which doesn't require to import Ref
const emoji = ref<Emoji | null>(null)

const charCount = computed(() => body.value.length)
// You can explicitly type charCount like so:
// const charCount = computed<number>(() => body.value.length)


// Events

// defineEmits(["@create"]) // Runtime declaration
// or:
defineEmits<{
  (e: "@create", entry: Entry): void;
  // (e: "@someOtherEvent", payload: string): void;
}>() // Type declaration

// Methods
const maxChars = 280
const handleTextInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement
  if (textArea.value.length <= maxChars){
    body.value = textArea.value
  } else {
    body.value = textArea.value.substring(0, maxChars)
  }
}

</script>

<template>
  <form class="entry-form" @submit.prevent="$emit('@create', { 
      body, 
      emoji,
      createdAt: new Date(),
      userId: 1,
      id: Math.random()
    })">
    <textarea 
      :value="body"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io">
    </textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
