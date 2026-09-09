<template>
  <div class="flex items-center gap-2">
    <span class="text-xs font-medium text-muted w-24 truncate">{{ label }}</span>
    <div class="flex-1 h-1.5 bg-surface rounded-full overflow-hidden flex">
      <div 
        class="h-full bg-accent rounded-full transition-all duration-500 ease-out"
        :style="{ width: `${(value / max) * 100}%` }"
      ></div>
    </div>
    <span class="text-xs font-mono text-muted w-4 text-right">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: Number, required: true },
  max: { type: Number, default: 10 }
});
</script>
