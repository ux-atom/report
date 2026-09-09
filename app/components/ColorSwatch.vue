<template>
  <div class="rounded-lg border border-border bg-surface overflow-hidden flex flex-col group">
    <div class="h-24 w-full relative transition-transform duration-300 group-hover:scale-105" :style="{ backgroundColor: hex }">
      <!-- Contrast indicator -->
      <div v-if="contrastNote" class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-tight shadow-sm" :class="isDarkHex(hex) ? 'bg-white/20 text-white' : 'bg-black/10 text-black'">
        {{ contrastNote }}
      </div>
    </div>
    <div class="p-3 flex flex-col gap-1 z-10 bg-surface">
      <div class="flex justify-between items-center">
        <span class="text-sm font-medium text-foreground">{{ label }}</span>
        <span class="text-xs font-mono text-muted uppercase">{{ hex }}</span>
      </div>
      <p v-if="description" class="text-xs text-muted leading-tight mt-1">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hex: { type: String, required: true },
  label: { type: String, required: true },
  description: String,
  contrastNote: String
});

// extremely basic lightness check for the badge
const isDarkHex = (hexCode) => {
  const hex = hexCode.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq < 128;
};
</script>
