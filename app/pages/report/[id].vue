<template>
  <div class="relative grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
    
    <article class="space-y-24 min-w-0 pb-32">
      <!-- Header -->
      <header class="space-y-6 border-b border-border pb-12">
        <div class="flex items-center gap-3">
          <div class="px-2.5 py-1 rounded-full bg-surface border border-border text-foreground text-xs font-mono font-medium">
            Vol. {{ $route.params.id }}
          </div>
          <time class="text-sm font-medium text-muted font-mono">September 9, 2026</time>
        </div>
        <h1 class="text-4xl md:text-5xl font-display font-bold tracking-tighter text-balance">
          The subtle art of progressive disclosure in dense AI interfaces.
        </h1>
        <div class="flex gap-2">
          <TagPill>AI UI</TagPill>
          <TagPill>Layout</TagPill>
          <TagPill>Psychology</TagPill>
        </div>
      </header>

      <!-- 1. Best UI Designs -->
      <section id="best-ui" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">Best UI Designs of the Day</h2>
          <p class="text-muted leading-relaxed">Evaluating top visual executions prioritizing clarity and hierarchy.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-border bg-surface overflow-hidden flex flex-col">
            <div class="aspect-video bg-border relative flex items-center justify-center text-muted">
              [Screenshot Placeholder: Vercel]
            </div>
            <div class="p-5 space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-medium text-foreground">Vercel Dashboard</h3>
                  <span class="text-xs text-muted">DevTools SaaS</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <RatingBar label="Visual" :value="9" />
                <RatingBar label="Hierarchy" :value="10" />
                <RatingBar label="Information Density" :value="8" />
              </div>
            </div>
          </div>
          
          <div class="rounded-xl border border-border bg-surface overflow-hidden flex flex-col">
            <div class="aspect-video bg-border relative flex items-center justify-center text-muted">
              [Screenshot Placeholder: Linear]
            </div>
            <div class="p-5 space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-medium text-foreground">Linear Settings</h3>
                  <span class="text-xs text-muted">Productivity</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <RatingBar label="Visual" :value="10" />
                <RatingBar label="Hierarchy" :value="9" />
                <RatingBar label="Information Density" :value="9" />
              </div>
            </div>
          </div>
        </div>
        <ul class="text-xs text-muted space-y-1 pt-4 border-t border-border/50">
          <li>Source: <a href="#" class="underline hover:text-foreground">Vercel App</a>, <a href="#" class="underline hover:text-foreground">Linear Desktop</a></li>
        </ul>
      </section>

      <!-- 2. UX Problems Found -->
      <section id="ux-problems" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">UX Problems Found</h2>
          <p class="text-muted leading-relaxed">Analyzing friction points and proposing direct solutions.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          <div class="bg-surface p-6 space-y-4">
            <div class="inline-flex px-2 py-1 bg-red-500/10 text-red-500 text-xs font-mono font-medium rounded">Problem</div>
            <h3 class="font-medium">Hidden Destructive Actions</h3>
            <p class="text-sm text-muted">Placing 'Delete Project' inside an obscure meatball menu leads to accidental clicks when users hunt for settings, or frustration when they can't find it.</p>
          </div>
          <div class="bg-surface p-6 space-y-4">
            <div class="inline-flex px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-mono font-medium rounded">Better Solution</div>
            <h3 class="font-medium">Explicit Danger Zone</h3>
            <p class="text-sm text-muted">Move destructive actions to a dedicated 'Danger Zone' at the very bottom of the settings page, requiring a typed confirmation.</p>
          </div>
        </div>
      </section>

      <!-- 3. Color System Study -->
      <section id="color" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">Color System Study</h2>
          <p class="text-muted leading-relaxed">Reviewing the "Midnight Slate" palette optimized for long-form reading.</p>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorSwatch hex="#0a0a0a" label="Background" description="Main app surface" contrastNote="AAA" />
          <ColorSwatch hex="#1a1a1a" label="Surface" description="Cards and elevated items" contrastNote="AAA" />
          <ColorSwatch hex="#fafafa" label="Foreground" description="Primary text" contrastNote="AAA" />
          <ColorSwatch hex="#3b82f6" label="Accent" description="Interactive elements" contrastNote="AA" />
        </div>
      </section>

      <!-- 4. Technology Radar -->
      <section id="radar" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">Technology Radar</h2>
          <p class="text-muted leading-relaxed">Tools and frameworks to adopt, trial, or hold.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="space-y-4">
            <h3 class="text-sm font-mono text-muted uppercase tracking-wider border-b border-border pb-2">Emerging (Assess)</h3>
            <ul class="space-y-3">
              <li class="bg-surface border border-border p-3 rounded-lg text-sm">CSS Anchor Positioning</li>
              <li class="bg-surface border border-border p-3 rounded-lg text-sm">View Transitions API</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-mono text-emerald-500/80 uppercase tracking-wider border-b border-border pb-2">Growing (Trial)</h3>
            <ul class="space-y-3">
              <li class="bg-surface border border-emerald-500/20 p-3 rounded-lg text-sm">OKLCH Colors</li>
              <li class="bg-surface border border-emerald-500/20 p-3 rounded-lg text-sm">React Server Components</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-mono text-accent uppercase tracking-wider border-b border-border pb-2">Future (Adopt)</h3>
            <ul class="space-y-3">
              <li class="bg-surface border border-accent/20 p-3 rounded-lg text-sm">Tailwind CSS v4</li>
              <li class="bg-surface border border-accent/20 p-3 rounded-lg text-sm">Figma Variables</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 5. Checklists & Code snippets -->
      <section id="a11y" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">Accessibility Lesson</h2>
          <p class="text-muted leading-relaxed">Ensuring focus states are visible and logical.</p>
        </div>

        <div class="space-y-4 bg-surface border border-border rounded-xl p-6">
          <h3 class="font-medium mb-4">Keyboard Navigation Checklist</h3>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" checked class="mt-1 bg-background border-muted rounded text-accent focus:ring-accent" />
            <span class="text-sm group-hover:text-foreground text-muted transition-colors">Every interactive element is reachable via Tab.</span>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" checked class="mt-1 bg-background border-muted rounded text-accent focus:ring-accent" />
            <span class="text-sm group-hover:text-foreground text-muted transition-colors">Focus outline contrast is at least 3:1 against background.</span>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" class="mt-1 bg-background border-muted rounded text-accent focus:ring-accent" />
            <span class="text-sm group-hover:text-foreground text-muted transition-colors">Skip to content link is present at the top of the DOM.</span>
          </label>
        </div>
      </section>

      <!-- 6. Engineering / Snippets -->
      <section id="frontend" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">Frontend Trend</h2>
          <p class="text-muted leading-relaxed">Implementing a sleek custom scrollbar in Tailwind using CSS layers.</p>
        </div>

        <div class="rounded-xl overflow-hidden border border-border bg-[#0d0d0d]">
          <div class="flex items-center px-4 py-2 border-b border-border/50 bg-[#141414]">
            <span class="text-xs font-mono text-muted">main.css</span>
          </div>
          <pre class="p-4 text-sm font-mono overflow-x-auto"><code class="text-muted"><span class="text-accent">@layer</span> base {
  <span class="text-[#eab308]">::-webkit-scrollbar</span> {
    <span class="text-[#c084fc]">width</span>: 10px;
  }
  <span class="text-[#eab308]">::-webkit-scrollbar-track</span> {
    <span class="text-[#c084fc]">background</span>: <span class="text-foreground">theme</span>(<span class="text-[#4ade80]">'colors.background'</span>);
  }
  <span class="text-[#eab308]">::-webkit-scrollbar-thumb</span> {
    <span class="text-[#c084fc]">background</span>: <span class="text-foreground">theme</span>(<span class="text-[#4ade80]">'colors.border'</span>);
    <span class="text-[#c084fc]">border-radius</span>: 5px;
  }
}</code></pre>
        </div>
      </section>
      
      <!-- Placeholder for the rest of sections -->
      <div class="py-12 flex items-center justify-center border border-dashed border-border rounded-xl">
        <p class="text-sm text-muted font-mono">+ 15 more sections in full report</p>
      </div>
    </article>

    <!-- Sidebar Navigation -->
    <aside class="hidden lg:block relative">
      <StickyNav :sections="navSections" />
    </aside>

  </div>
</template>

<script setup>
const navSections = [
  { id: 'best-ui', title: 'Best UI Designs' },
  { id: 'ux-problems', title: 'UX Problems Found' },
  { id: 'color', title: 'Color System Study' },
  { id: 'radar', title: 'Technology Radar' },
  { id: 'a11y', title: 'Accessibility Lesson' },
  { id: 'frontend', title: 'Frontend Trend' },
];
</script>
