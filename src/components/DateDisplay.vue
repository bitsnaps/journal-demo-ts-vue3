<script lang="ts">
import formatRelative from "date-fns/formatRelative"
import { defineComponent /*, type PropType */ } from "vue"
// import type Entry from "@/types/Entry"

// This component uses the old way of Options API instead of Composition API

// defineComponent allows typescript to detect types
export default defineComponent({
  props: {
    date: { type: Date, required: true },
    // We can't use type declaration if we want to use a type (e.g. Entry)
    // date: { type: Entry, required: true },
    // In this case, we can use Object casted to PropType from "vue"
    // date: { type: Object as PropType<Entry>, required: true },
  },
/*  emits: {
    doSomething(payload: Entry){
      // return payload.body && payload.createdAt // etc..
      return true
    }
  }, */
  computed: {
    //formatted() here can by typed
    formatted() /* : string */ {
      return formatRelative(this.date, Date.now());
    },
  },
/*  mounted() {
    this.formatted
  }
*/
})

</script>

<template>
  <div>{{ formatted }}</div>
</template>
