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

      <!-- New daily entries get appended above this line, newest first -->
      <p class="text-center text-sm text-muted font-mono pt-8">প্রথম entry — আরো report প্রতিদিন যোগ হবে এখানে।</p>
    </div>
  </div>
</template>

<script setup>
import { Search as IconSearch } from 'lucide-vue-next';

// Real entries only — append new days to the top of this array as they're published.
const reports = [
  {
    id: '2026-09-09',
    date: 'Sep 09, 2026',
    insight: 'UI craft ধীরে ধীরে commodify হচ্ছে — real leverage এখন AI workflow-এর trust layer-এ।',
    tags: ['Bento Grid', 'Peak-End Rule'],
    ratings: { visual: 7.7, ux: 7.3, motion: 6.7, a11y: 5.9, innovation: 6.9 }
  }
];
</script>
