<template>
  <div class="sticky top-24">
    <div class="text-xs font-mono font-semibold tracking-wider text-muted uppercase mb-4 px-3">Sections</div>
    <nav class="flex flex-col">
      <a 
        v-for="section in sections" 
        :key="section.id" 
        :href="`#${section.id}`"
        class="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted hover:text-foreground hover:bg-surface"
      >
        {{ section.title }}
      </a>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  }
});
</script>
