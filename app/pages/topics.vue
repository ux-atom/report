<template>
  <div class="space-y-8 max-w-4xl">
    <header class="space-y-4">
      <h1 class="text-3xl md:text-4xl font-display font-bold tracking-tight">Topics</h1>
      <p class="text-muted">Browse the intelligence archive by category and tag। এখনো মাত্র একটা report আছে — প্রতিদিন নতুন entry যোগ হলে count বাড়বে।</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
      <div class="space-y-4">
        <h2 class="text-xl font-medium tracking-tight">By Category</h2>
        <div class="flex flex-wrap gap-2">
          <TagPill v-for="c in categories" :key="c">{{ c }}</TagPill>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-medium tracking-tight">Tags — Sep 09, 2026</h2>
        <div class="flex flex-wrap gap-2">
          <TagPill v-for="t in tags" :key="t">{{ t }}</TagPill>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// The 21 recurring report sections, used as the category taxonomy across every day.
const categories = [
  'Best UI Designs', 'UX Problems', 'UI Pattern', 'UX Psychology', 'Micro-Interaction',
  'Typography', 'Color System', 'Design System', 'Frontend Engineering', 'Figma',
  'AI Tools', 'Product Hunt', 'GitHub Trending', 'Accessibility', 'Mobile UX',
  'Dashboard UX', 'SaaS Landing Page', 'Technology Radar', 'Design Leadership',
];

// Real tags from today's report frontmatter.
const tags = [
  'Bento Grid', 'Peak-End Rule', 'Command Palette', 'Linear', 'Vercel Geist',
  'Tailwind v4', 'Figma Motion', 'Cal.com', 'Material 3 Expressive', 'Liquid Glass',
  'DTCG', 'Accessibility',
];
</script>
