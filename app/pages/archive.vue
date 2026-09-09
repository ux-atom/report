<template>
  <div class="space-y-8 max-w-4xl">
    <header class="space-y-4">
      <h1 class="text-3xl md:text-4xl font-display font-bold tracking-tight">Archive</h1>
      <p class="text-muted">A chronological record of daily design intelligence and insights.</p>
      
      <div class="relative max-w-md pt-4">
        <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2 mt-2 w-4 h-4 text-muted" />
        <input 
          type="text" 
          placeholder="Search by keyword, tag, or topic..." 
          class="w-full h-10 pl-9 pr-4 rounded-md border border-border bg-surface text-sm placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
        />
      </div>
    </header>

    <div class="space-y-4">
      <NuxtLink 
        v-for="report in reports" 
        :key="report.id" 
        :to="`/report/${report.id}`"
        class="block group p-4 sm:p-6 rounded-xl border border-border bg-surface hover:border-muted transition-colors"
      >
        <div class="flex flex-col sm:flex-row gap-6">
          <div class="flex-1 space-y-3">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-xs font-mono font-medium text-muted">Vol. {{ report.id }}</span>
              <span class="text-xs text-muted">&middot;</span>
              <time class="text-xs font-mono text-muted">{{ report.date }}</time>
              <div class="flex gap-2 ml-auto sm:ml-4">
                <TagPill v-for="tag in report.tags.slice(0, 2)" :key="tag">{{ tag }}</TagPill>
              </div>
            </div>
            <h2 class="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
              {{ report.insight }}
            </h2>
          </div>
          
          <div class="w-full sm:w-48 grid grid-cols-1 gap-1.5 shrink-0">
            <RatingBar label="Visual" :value="report.ratings.visual" />
            <RatingBar label="UX" :value="report.ratings.ux" />
            <RatingBar label="Motion" :value="report.ratings.motion" />
            <RatingBar label="A11y" :value="report.ratings.a11y" />
            <RatingBar label="Innovation" :value="report.ratings.innovation" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { Search as IconSearch } from 'lucide-vue-next';

// Placeholder data
const reports = [
  {
    id: '142',
    date: 'Sep 09, 2026',
    insight: 'Progressive disclosure is the only way to save AI chat interfaces from cognitive overload.',
    tags: ['AI UI', 'Layout'],
    ratings: { visual: 8, ux: 9, motion: 6, a11y: 8, innovation: 9 }
  },
  {
    id: '141',
    date: 'Sep 08, 2026',
    insight: 'Micro-animations on state changes reduce perceived latency by up to 300ms.',
    tags: ['Motion', 'Psychology'],
    ratings: { visual: 9, ux: 8, motion: 10, a11y: 7, innovation: 7 }
  },
  {
    id: '140',
    date: 'Sep 07, 2026',
    insight: 'High-contrast monochrome themes are outperforming low-contrast pastels in B2B SaaS.',
    tags: ['Color', 'B2B'],
    ratings: { visual: 10, ux: 8, motion: 5, a11y: 10, innovation: 6 }
  },
  {
    id: '139',
    date: 'Sep 06, 2026',
    insight: 'Keyboard navigation must be treated as a primary interaction model, not a compliance checkbox.',
    tags: ['Accessibility', 'Engineering'],
    ratings: { visual: 5, ux: 10, motion: 4, a11y: 10, innovation: 5 }
  }
];
</script>
