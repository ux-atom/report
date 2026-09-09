<template>
  <div class="space-y-8 max-w-4xl">
    <header class="space-y-4">
      <h1 class="text-3xl md:text-4xl font-display font-bold tracking-tight">Topics</h1>
      <p class="text-muted">Browse the intelligence archive by category and tag.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
      <div class="space-y-4">
        <h2 class="text-xl font-medium tracking-tight">By Category</h2>
        <div class="flex flex-wrap gap-2">
          <TagPill>Visual Design (42)</TagPill>
          <TagPill>UX Research (28)</TagPill>
          <TagPill>Frontend Engineering (35)</TagPill>
          <TagPill>Design Systems (19)</TagPill>
          <TagPill>Accessibility (12)</TagPill>
        </div>
      </div>
      
      <div class="space-y-4">
        <h2 class="text-xl font-medium tracking-tight">Popular Tags</h2>
        <div class="flex flex-wrap gap-2">
          <TagPill>AI UI</TagPill>
          <TagPill>Tailwind CSS</TagPill>
          <TagPill>Figma Config</TagPill>
          <TagPill>Dark Mode</TagPill>
          <TagPill>Typography</TagPill>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
