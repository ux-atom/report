<template>
  <div class="space-y-16 pb-16">
    <!-- Hero Section -->
    <section class="space-y-6 pt-8">
      <div class="flex items-center gap-3">
        <div class="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium">
          Vol. 142
        </div>
        <time class="text-sm font-medium text-muted font-mono">{{ todayDate }}</time>
      </div>
      
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-balance">
        The subtle art of progressive disclosure in dense AI interfaces.
      </h1>
      
      <p class="text-lg text-muted max-w-2xl leading-relaxed">
        Today's intelligence brief explores how top-tier SaaS products are handling the sudden influx of AI generative UI without overwhelming the user.
      </p>

      <div class="pt-4 flex gap-4">
        <NuxtLink to="/report/142" class="inline-flex items-center justify-center h-10 px-6 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
          Read Today's Report
        </NuxtLink>
        <NuxtLink to="/archive" class="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-transparent text-foreground font-medium hover:bg-surface transition-colors">
          Browse Archive
        </NuxtLink>
      </div>
    </section>

    <!-- Bento Grid Summary -->
    <section class="space-y-6">
      <div class="flex items-center justify-between border-b border-border pb-4">
        <h2 class="text-xl font-display font-semibold tracking-tight">Today's Sections</h2>
        <span class="text-sm text-muted font-mono">21 items</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[160px]">
        
        <!-- Large Highlight Card -->
        <NuxtLink to="/report/142#ai-tools" class="col-span-1 md:col-span-2 row-span-2 group rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors overflow-hidden flex flex-col relative">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="p-6 flex flex-col h-full z-10">
            <div class="flex justify-between items-start mb-auto">
              <TagPill>Feature</TagPill>
              <div class="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <IconArrowUpRight />
              </div>
            </div>
            <div>
              <h3 class="font-display text-2xl font-bold tracking-tight mb-2">AI Design Tools</h3>
              <p class="text-muted text-sm text-balance">A deep dive into Vercel's v0.dev evolution and the shift towards deterministic component generation.</p>
            </div>
          </div>
        </NuxtLink>

        <!-- Standard Cards -->
        <NuxtLink 
          v-for="section in bentoSections" 
          :key="section.id" 
          :to="`/report/142#${section.id}`"
          class="group rounded-xl border border-border bg-surface hover:border-muted transition-colors p-5 flex flex-col justify-between"
          :class="section.spanClass"
        >
          <div class="flex justify-between items-start">
            <span class="text-xs font-mono text-muted uppercase tracking-wider">{{ section.category }}</span>
            <div class="opacity-0 group-hover:opacity-100 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <IconArrowUpRight class="w-4 h-4" />
            </div>
          </div>
          <h3 class="font-medium text-foreground leading-tight">{{ section.title }}</h3>
        </NuxtLink>

      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ArrowUpRight as IconArrowUpRight } from 'lucide-vue-next';

const todayDate = computed(() => {

  return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date());
});

const bentoSections = [
  { id: 'best-ui', category: 'Showcase', title: 'Best UI Designs of the Day', spanClass: '' },
  { id: 'ux-problems', category: 'Critique', title: 'UX Problems Found', spanClass: '' },
  { id: 'pattern', category: 'Library', title: 'Pattern of the Day: Command Palettes', spanClass: 'col-span-1 md:col-span-2' },
  { id: 'psychology', category: 'Theory', title: 'Psychology Lesson: Miller\'s Law', spanClass: '' },
  { id: 'micro', category: 'Motion', title: 'Micro-Interaction Study', spanClass: '' },
  { id: 'typography', category: 'Foundations', title: 'Typography Study: Geist Sans', spanClass: '' },
  { id: 'color', category: 'Foundations', title: 'Color System Study', spanClass: '' },
  { id: 'design-system', category: 'Architecture', title: 'Design System Insight', spanClass: '' },
  { id: 'frontend', category: 'Engineering', title: 'Frontend Trend: Anchor Positioning', spanClass: '' },
  { id: 'figma', category: 'Workflow', title: 'Figma Tips: Variables', spanClass: '' },
  { id: 'product-hunt', category: 'Market', title: 'Product Hunt Launches', spanClass: '' },
  { id: 'github', category: 'Market', title: 'GitHub Trending', spanClass: '' },
  { id: 'a11y', category: 'Quality', title: 'Accessibility Lesson', spanClass: '' },
  { id: 'mobile', category: 'Platform', title: 'Mobile UX Patterns', spanClass: '' },
  { id: 'dashboard', category: 'Platform', title: 'Dashboard UX', spanClass: '' },
  { id: 'landing', category: 'Platform', title: 'SaaS Landing Page Breakdown', spanClass: '' },
  { id: 'radar', category: 'Strategy', title: 'Technology Radar', spanClass: 'col-span-1 md:col-span-2' },
  { id: 'leadership', category: 'Career', title: 'Design Leadership', spanClass: '' },
  { id: 'challenge', category: 'Practice', title: 'Practice Challenge', spanClass: '' },
  { id: 'summary', category: 'Wrap up', title: 'Learning Summary', spanClass: '' },
];
</script>
