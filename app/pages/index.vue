<template>
  <div class="space-y-16 pb-16">
    <!-- Hero Section -->
    <section class="space-y-6 pt-8">
      <div class="flex items-center gap-3">
        <div class="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium">
          Daily Brief
        </div>
        <time class="text-sm font-medium text-muted font-mono">{{ todayDate }}</time>
      </div>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-balance">
        UI craft ধীরে ধীরে commodify হচ্ছে — real leverage এখন AI workflow-এর trust layer-এ।
      </h1>

      <p class="text-lg text-muted max-w-2xl leading-relaxed">
        আজকের intelligence brief covers Bento Grid trend, Peak-End Rule, Vercel Geist design tokens, Tailwind v4.3, আর ২০২৬-এর Technology Radar — Land-book, Linear, Figma Config, আর Product Hunt থেকে research করা।
      </p>

      <div class="pt-4 flex gap-4">
        <NuxtLink to="/report/2026-09-09" class="inline-flex items-center justify-center h-10 px-6 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
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
        <NuxtLink to="/report/2026-09-09#radar" class="col-span-1 md:col-span-2 row-span-2 group rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors overflow-hidden flex flex-col relative">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="p-6 flex flex-col h-full z-10">
            <div class="flex justify-between items-start mb-auto">
              <TagPill>Strategy</TagPill>
              <div class="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <IconArrowUpRight />
              </div>
            </div>
            <div>
              <h3 class="font-display text-2xl font-bold tracking-tight mb-2">Technology Radar</h3>
              <p class="text-muted text-sm text-balance">Claude Design, Figma Motion, DTCG token spec, EAA enforcement, agentic UI, spatial computing — ১২ domain জুড়ে Emerging/Growing/Future horizon।</p>
            </div>
          </div>
        </NuxtLink>

        <!-- Standard Cards -->
        <NuxtLink
          v-for="section in bentoSections"
          :key="section.id"
          :to="`/report/2026-09-09#${section.id}`"
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
  return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date('2026-09-09'));
});

const bentoSections = [
  { id: 'best-ui', category: 'Showcase', title: '৭টা Best UI Designs — Werk, Concourse, Aevion', spanClass: '' },
  { id: 'ux-problems', category: 'Critique', title: 'UX Problems: Instagram, Spotify, Ryanair', spanClass: '' },
  { id: 'pattern', category: 'Library', title: 'Pattern of the Day: Bento Grid', spanClass: 'col-span-1 md:col-span-2' },
  { id: 'psychology', category: 'Theory', title: 'Psychology Lesson: Peak-End Rule', spanClass: '' },
  { id: 'micro', category: 'Motion', title: 'Micro-Interaction: Command Palette (Cmd+K)', spanClass: '' },
  { id: 'typography', category: 'Foundations', title: 'Typography Study: Linear.app', spanClass: '' },
  { id: 'color', category: 'Foundations', title: 'Color System Study: Linear.app', spanClass: '' },
  { id: 'design-system', category: 'Architecture', title: 'Design System Insight: Vercel Geist', spanClass: '' },
  { id: 'frontend', category: 'Engineering', title: 'Frontend Trend: Tailwind CSS v4.3', spanClass: '' },
  { id: 'figma', category: 'Workflow', title: 'Figma Tips: Figma Motion (open beta)', spanClass: '' },
  { id: 'ai-tools', category: 'Market', title: 'AI Design Tools: Kombai', spanClass: '' },
  { id: 'product-hunt', category: 'Market', title: 'Product Hunt: Kombai Gallery, Framer 3.0', spanClass: '' },
  { id: 'github', category: 'Market', title: 'GitHub Trending for Designers', spanClass: '' },
  { id: 'a11y', category: 'Quality', title: 'Accessibility: Contrast + Focus Indicators', spanClass: '' },
  { id: 'mobile', category: 'Platform', title: 'Mobile UX: Material 3 Expressive vs Liquid Glass', spanClass: '' },
  { id: 'dashboard', category: 'Platform', title: 'Dashboard UX: Linear Dashboards', spanClass: '' },
  { id: 'landing', category: 'Platform', title: 'SaaS Landing Page: Cal.com', spanClass: '' },
  { id: 'leadership', category: 'Career', title: 'Design Leadership: Rachel Kobetz', spanClass: '' },
  { id: 'challenge', category: 'Practice', title: 'Practice Challenge: KubeDB Dashboard', spanClass: '' },
  { id: 'summary', category: 'Wrap up', title: "Today's Learning Summary", spanClass: '' },
];
</script>
