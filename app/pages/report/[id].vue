<template>
  <div class="relative grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">

    <article class="space-y-24 min-w-0 pb-32">
      <!-- Header -->
      <header class="space-y-6 border-b border-border pb-12">
        <div class="flex items-center gap-3">
          <div class="px-2.5 py-1 rounded-full bg-surface border border-border text-foreground text-xs font-mono font-medium">
            Daily Brief
          </div>
          <time class="text-sm font-medium text-muted font-mono">September 9, 2026</time>
        </div>
        <h1 class="text-4xl md:text-5xl font-display font-bold tracking-tighter text-balance">
          UI craft ধীরে ধীরে commodify হচ্ছে — real leverage এখন AI workflow-এর trust layer-এ।
        </h1>
        <p class="text-muted leading-relaxed max-w-2xl">
          আজকের research: Land-book, Lapa Ninja, recent.design, Linear, Vercel Geist, Figma Config 2026, Product Hunt, GitHub Trending, NN/g।
        </p>
        <div class="flex flex-wrap gap-2">
          <TagPill v-for="tag in headerTags" :key="tag">{{ tag }}</TagPill>
        </div>
      </header>

      <!-- 1. Best UI Designs -->
      <section id="best-ui" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১. Today's Best UI Designs</h2>
          <p class="text-muted leading-relaxed">Land-book আর Lapa Ninja-র live feed থেকে ৭টা trending site — Awwwards আজ stale cache দিচ্ছিল, তাই সেখান থেকে cite করা হয়নি।</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="d in bestDesigns" :key="d.name" class="rounded-xl border border-border bg-surface overflow-hidden flex flex-col">
            <div class="aspect-video bg-border relative flex items-center justify-center text-muted text-xs px-4 text-center">
              [{{ d.industry }}]
            </div>
            <div class="p-5 space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <a :href="d.url" target="_blank" rel="noopener" class="font-medium text-foreground hover:text-accent transition-colors">{{ d.name }}</a>
                  <span class="block text-xs text-muted">{{ d.industry }}</span>
                </div>
              </div>
              <p class="text-sm text-muted leading-relaxed">{{ d.note }}</p>
              <div class="space-y-1.5">
                <RatingBar label="Visual" :value="d.ratings.visual" />
                <RatingBar label="UX" :value="d.ratings.ux" />
                <RatingBar label="Motion" :value="d.ratings.motion" />
                <RatingBar label="Accessibility" :value="d.ratings.a11y" />
                <RatingBar label="Innovation" :value="d.ratings.innovation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. UX Problems Found -->
      <section id="ux-problems" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">২. UI/UX Problems Found Today</h2>
          <p class="text-muted leading-relaxed">Real product, real complaint — Spotify Community, press coverage, আর একটা dated UX audit থেকে।</p>
        </div>

        <div v-for="p in uxProblems" :key="p.product" class="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          <div class="bg-surface p-6 space-y-3">
            <div class="inline-flex px-2 py-1 bg-red-500/10 text-red-500 text-xs font-mono font-medium rounded">Problem — {{ p.product }}</div>
            <h3 class="font-medium">{{ p.problemTitle }}</h3>
            <p class="text-sm text-muted leading-relaxed">{{ p.problem }}</p>
            <p class="text-xs text-muted/80 pt-2 border-t border-border/50">কারণ: {{ p.reason }}</p>
          </div>
          <div class="bg-surface p-6 space-y-3">
            <div class="inline-flex px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-mono font-medium rounded">Better Solution</div>
            <h3 class="font-medium">{{ p.solutionTitle }}</h3>
            <p class="text-sm text-muted leading-relaxed">{{ p.solution }}</p>
          </div>
        </div>
      </section>

      <!-- 3. UI Pattern of the Day -->
      <section id="pattern" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৩. UI Pattern of the Day — Bento Grid</h2>
          <p class="text-muted leading-relaxed">Traditional 12-column layout-এর চেয়ে ২৩% বেশি scroll depth — 2026-এর default layout approach হয়ে গেছে।</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-border bg-surface p-6 space-y-3">
            <h3 class="text-sm font-mono text-emerald-500/80 uppercase tracking-wider">কোথায় use করবে</h3>
            <p class="text-sm text-muted leading-relaxed">SaaS feature overview, dashboard, portfolio landing — ৪-৮টা heterogeneous item scan করাতে চাইলে।</p>
          </div>
          <div class="rounded-xl border border-border bg-surface p-6 space-y-3">
            <h3 class="text-sm font-mono text-red-500/80 uppercase tracking-wider">কোথায় না</h3>
            <p class="text-sm text-muted leading-relaxed">Long-form editorial content, checkout flow — asymmetric sizing sequential task-এ confusion আনে।</p>
          </div>
        </div>

        <div class="rounded-xl overflow-hidden border border-border bg-[#0d0d0d]">
          <div class="flex items-center px-4 py-2 border-b border-border/50 bg-[#141414]">
            <span class="text-xs font-mono text-muted">bento.html</span>
          </div>
          <pre class="p-4 text-sm font-mono overflow-x-auto"><code class="text-muted"><span class="text-accent">&lt;div</span> <span class="text-[#c084fc]">class</span>=<span class="text-[#4ade80]">"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4"</span><span class="text-accent">&gt;</span>
  <span class="text-accent">&lt;div</span> <span class="text-[#c084fc]">class</span>=<span class="text-[#4ade80]">"col-span-2 row-span-2 rounded-2xl bg-neutral-900 p-6"</span><span class="text-accent">&gt;</span>Hero feature<span class="text-accent">&lt;/div&gt;</span>
  <span class="text-accent">&lt;div</span> <span class="text-[#c084fc]">class</span>=<span class="text-[#4ade80]">"rounded-2xl bg-neutral-900 p-6"</span><span class="text-accent">&gt;</span>Feature<span class="text-accent">&lt;/div&gt;</span>
<span class="text-accent">&lt;/div&gt;</span></code></pre>
        </div>
        <p class="text-xs text-muted">Accessibility: DOM/tab order অবশ্যই visual reading order (top-left → bottom-right) match করতে হবে।</p>
      </section>

      <!-- 4. UX Psychology Lesson -->
      <section id="psychology" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৪. UX Psychology Lesson — Peak-End Rule</h2>
          <p class="text-muted leading-relaxed">মানুষ পুরো experience judge করে সবচেয়ে intense moment (peak) আর শেষ moment (end) দিয়ে — average দিয়ে না। Kahneman-এর ১৯৯৩ study-তে ৮০% participant বেশি অস্বস্তিকর experience আবার বেছে নিয়েছিল শুধু কারণ সেটা একটু ভালোভাবে শেষ হয়েছিল।</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div class="rounded-xl border border-border bg-surface p-5">
            <p class="text-xs font-mono text-emerald-500/80 uppercase mb-2">Positive example</p>
            <p class="text-muted">Duolingo lesson শেষে mascot animation + streak counter — peak আর end দুটোই deliberately engineer করা।</p>
          </div>
          <div class="rounded-xl border border-border bg-surface p-5">
            <p class="text-xs font-mono text-red-500/80 uppercase mb-2">Negative example</p>
            <p class="text-muted">Ann Taylor-এর exit-intent discount popup, Spotify-এর unexplained outage error — bad "end" পুরো session-এর goodwill মুছে দেয়।</p>
          </div>
        </div>
        <div class="rounded-xl border border-border bg-surface p-6">
          <h3 class="font-medium mb-4">Design checklist</h3>
          <ul class="space-y-2.5 text-sm text-muted">
            <li class="flex gap-2"><span class="text-accent">→</span> পুরো journey map করে single most-intense moment আর final screen চিহ্নিত করো।</li>
            <li class="flex gap-2"><span class="text-accent">→</span> Deliberate positive peak design করো — decorative না, achievement-linked।</li>
            <li class="flex gap-2"><span class="text-accent">→</span> Exit-এ friction/aggressive popup বাদ দাও।</li>
            <li class="flex gap-2"><span class="text-accent">→</span> Error/outage-এ সবসময় clear explanation + timeframe দাও।</li>
          </ul>
        </div>
      </section>

      <!-- 5. Micro Interaction -->
      <section id="micro" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৫. Micro Interaction Breakdown — Command Palette (Cmd+K)</h2>
          <p class="text-muted leading-relaxed">Linear/Vercel-এর <code class="text-xs font-mono bg-surface px-1 py-0.5 rounded">cmdk</code> pattern। Open time <strong class="text-accent font-semibold">&lt;100ms</strong> টার্গেট, transition ~120-180ms ease-out, fuzzy match instantaneous।</p>
        </div>
        <div class="rounded-xl overflow-hidden border border-border bg-[#0d0d0d]">
          <div class="flex items-center px-4 py-2 border-b border-border/50 bg-[#141414]">
            <span class="text-xs font-mono text-muted">CommandPalette.tsx</span>
          </div>
          <pre class="p-4 text-sm font-mono overflow-x-auto"><code class="text-muted"><span class="text-accent">&lt;motion.div</span>
  initial=&#123;&#123; opacity: <span class="text-[#eab308]">0</span>, scale: <span class="text-[#eab308]">0.96</span>, y: <span class="text-[#eab308]">-8</span> &#125;&#125;
  animate=&#123;&#123; opacity: <span class="text-[#eab308]">1</span>, scale: <span class="text-[#eab308]">1</span>, y: <span class="text-[#eab308]">0</span> &#125;&#125;
  transition=&#123;&#123; duration: <span class="text-[#eab308]">0.15</span>, ease: [<span class="text-[#eab308]">0.16, 1, 0.3, 1</span>] &#125;&#125;
<span class="text-accent">/&gt;</span></code></pre>
        </div>
        <p class="text-sm text-muted leading-relaxed">Premium কেন লাগে: mouse পুরো interaction loop থেকে বাদ, &lt;100ms speed thought-এর extension মনে হয়, fuzzy match imprecise typing-কেও reward করে।</p>
      </section>

      <!-- 6. Typography Study -->
      <section id="typography" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৬. Typography Study — Linear.app</h2>
          <p class="text-muted leading-relaxed">Inter Variable (UI/marketing) + Berkeley Mono (code)। Display 64px/64px (-1.408px tracking), Body 16px/24px (1.5 line-height) — tight scan zone vs relaxed read zone।</p>
        </div>
        <div class="rounded-xl border border-border bg-surface overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border text-muted text-xs font-mono uppercase">
                <th class="text-left p-3">Role</th><th class="text-left p-3">Size</th><th class="text-left p-3">Line-height</th>
              </tr>
            </thead>
            <tbody class="text-muted">
              <tr class="border-b border-border/50"><td class="p-3 text-foreground">Display</td><td class="p-3 font-mono">64px</td><td class="p-3 font-mono">64px</td></tr>
              <tr class="border-b border-border/50"><td class="p-3 text-foreground">H1</td><td class="p-3 font-mono">48px</td><td class="p-3 font-mono">—</td></tr>
              <tr class="border-b border-border/50"><td class="p-3 text-foreground">Body</td><td class="p-3 font-mono">16px</td><td class="p-3 font-mono">24px</td></tr>
              <tr><td class="p-3 text-foreground">Small</td><td class="p-3 font-mono">13px</td><td class="p-3 font-mono">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 7. Color System Study -->
      <section id="color" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৭. Color System Study — Linear.app</h2>
          <p class="text-muted leading-relaxed">Dark mode primary text &gt;15:1 (AAA), muted text ~5.5:1 (AA — secondary label-এ রাখো)। Elevation multi-tier lightness ramp না, hairline border দিয়ে।</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorSwatch hex="#5e6ad2" label="Primary" description="Brand indigo, accent" contrastNote="—" />
          <ColorSwatch hex="#0f1011" label="Dark surface" description="Base background" contrastNote="AAA" />
          <ColorSwatch hex="#f7f8f8" label="Text primary" description="Dark mode" contrastNote="AAA" />
          <ColorSwatch hex="#8a8f98" label="Text muted" description="Secondary label" contrastNote="AA" />
        </div>
      </section>

      <!-- 8. Design System Insight -->
      <section id="design-system" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৮. Design System Insight — Vercel Geist</h2>
          <p class="text-muted leading-relaxed">Signature move: <strong class="text-accent font-semibold">"shadow-as-border"</strong> — <code class="text-xs font-mono bg-surface px-1 py-0.5 rounded">0 0 0 1px rgba(0,0,0,.08)</code> CSS border replace করে যাতে box-sizing-এ effect না পড়ে। Radix UI primitives-এর ওপর visual layer। শুধু ৩টা font weight allowed (400/500/600)।</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <div class="rounded-lg border border-border bg-surface p-3"><p class="text-xs text-muted font-mono">Spacing base</p><p class="text-foreground font-medium">4px</p></div>
          <div class="rounded-lg border border-border bg-surface p-3"><p class="text-xs text-muted font-mono">Radius default</p><p class="text-foreground font-medium">6px</p></div>
          <div class="rounded-lg border border-border bg-surface p-3"><p class="text-xs text-muted font-mono">Card radius</p><p class="text-foreground font-medium">12px</p></div>
          <div class="rounded-lg border border-border bg-surface p-3"><p class="text-xs text-muted font-mono">Focus ring</p><p class="text-foreground font-medium font-mono text-xs">2px + 4px</p></div>
        </div>
      </section>

      <!-- 9. Frontend Trend -->
      <section id="frontend" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">৯. Frontend UI Engineering Trend — Tailwind CSS v4.3</h2>
          <p class="text-muted leading-relaxed">Native scrollbar utilities, CSS logical-property utilities RTL support-এর জন্য, <code class="text-xs font-mono bg-surface px-1 py-0.5 rounded">@container-size</code> block-axis queries। Browser support: modern evergreen (Safari 16.4+)।</p>
        </div>
        <div class="rounded-xl overflow-hidden border border-border bg-[#0d0d0d]">
          <div class="flex items-center px-4 py-2 border-b border-border/50 bg-[#141414]">
            <span class="text-xs font-mono text-muted">index.html</span>
          </div>
          <pre class="p-4 text-sm font-mono overflow-x-auto"><code class="text-muted"><span class="text-accent">&lt;div</span> <span class="text-[#c084fc]">class</span>=<span class="text-[#4ade80]">"scrollbar-thin scrollbar-thumb-sky-700/60 mbs-6 mbe-2 border-bs overflow-auto"</span><span class="text-accent">&gt;</span></code></pre>
        </div>
      </section>

      <!-- 10. Figma Tips -->
      <section id="figma" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১০. Figma Tips of the Day — Figma Motion (open beta)</h2>
          <p class="text-muted leading-relaxed">Native animation timeline, keyframes design file-এই। Dev Mode export: CSS, JSON, React, MP4/WebM/animated SVG।</p>
        </div>
        <ol class="space-y-3 text-sm text-muted">
          <li class="flex gap-3"><span class="font-mono text-accent">01</span> Frame/component select করে নতুন Motion timeline panel খোলো।</li>
          <li class="flex gap-3"><span class="font-mono text-accent">02</span> Text description দিয়ে Figma agent starting keyframe generate করে দেয়।</li>
          <li class="flex gap-3"><span class="font-mono text-accent">03</span> Motion token design system file-এই color/spacing-এর মতো reusable থাকে।</li>
          <li class="flex gap-3"><span class="font-mono text-accent">04</span> Dev Mode-এ export করো — CSS, JSON, React-ready code।</li>
        </ol>
      </section>

      <!-- 11. AI Design Tools -->
      <section id="ai-tools" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১১. AI Design Tools Update — Kombai</h2>
          <p class="text-muted leading-relaxed">"AI Design Engineer" — Figma import করে repo-র actual component/token/hook reuse করে code generate করে, generic boilerplate না। Gallery feature (২০,০০০+ curated UI reference) ৮ সেপ্টেম্বর Product Hunt-এ লঞ্চ।</p>
        </div>
        <div class="rounded-xl border border-border bg-surface p-6 flex items-center justify-between">
          <div>
            <p class="font-medium text-foreground">Free tier: 300 credits/month · Paid: $20/mo থেকে</p>
            <p class="text-sm text-muted mt-1">Worth learning — free tier দিয়ে trial করে দেখার মতো।</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-muted font-mono">Rating</p>
            <p class="text-lg font-semibold text-accent">3.5/5</p>
          </div>
        </div>
      </section>

      <!-- 12. Product Hunt -->
      <section id="product-hunt" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১২. Product Hunt Design Launches</h2>
        </div>
        <div class="space-y-3">
          <div v-for="p in productHunt" :key="p.name" class="rounded-xl border border-border bg-surface p-5">
            <h3 class="font-medium text-foreground">{{ p.name }}</h3>
            <p class="text-sm text-muted mt-1">{{ p.note }}</p>
          </div>
        </div>
      </section>

      <!-- 13. GitHub Trending -->
      <section id="github" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৩. GitHub Trending for Designers</h2>
          <p class="text-muted leading-relaxed">এই সপ্তাহের trending চার্ট component library থেকে সরে agent-generated visual output (diagram/video/3D)-এ ঝুঁকেছে — এটা নিজেই একটা signal।</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <TagPill v-for="repo in githubRepos" :key="repo">{{ repo }}</TagPill>
        </div>
      </section>

      <!-- 14. Accessibility -->
      <section id="a11y" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৪. Accessibility Lesson — Contrast + Focus Indicators</h2>
          <p class="text-muted leading-relaxed">Body text ≥4.5:1, large text ≥3:1। রঙ কখনো একমাত্র signal না। WCAG: 1.4.3, 1.4.11, 1.4.1, 2.4.7।</p>
        </div>
        <div class="space-y-4 bg-surface border border-border rounded-xl p-6">
          <h3 class="font-medium mb-4">Keyboard Navigation Checklist</h3>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" checked class="mt-1 bg-background border-muted rounded text-accent focus:ring-accent" />
            <span class="text-sm group-hover:text-foreground text-muted transition-colors">সব interactive element Tab দিয়ে reachable।</span>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" checked class="mt-1 bg-background border-muted rounded text-accent focus:ring-accent" />
            <span class="text-sm group-hover:text-foreground text-muted transition-colors">Focus outline contrast অন্তত 3:1 background-এর বিরুদ্ধে।</span>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" class="mt-1 bg-background border-muted rounded text-accent focus:ring-accent" />
            <span class="text-sm group-hover:text-foreground text-muted transition-colors">Grayscale trick দিয়ে test করা — color ছাড়াও meaning টিকে থাকে কিনা।</span>
          </label>
        </div>
      </section>

      <!-- 15. Mobile UX -->
      <section id="mobile" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৫. Mobile UX Inspiration — Android vs iOS</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-border bg-surface p-5">
            <p class="text-xs font-mono text-accent uppercase mb-2">Android — Material 3 Expressive</p>
            <p class="text-sm text-muted leading-relaxed">Shape-morphing (square → squircle), spring-physics motion, richer tonal color। Kinetic, component visibly deform/bounce।</p>
          </div>
          <div class="rounded-xl border border-border bg-surface p-5">
            <p class="text-xs font-mono text-accent uppercase mb-2">iOS — Liquid Glass</p>
            <p class="text-sm text-muted leading-relaxed">Material + transparency, chrome hide/collapse on scroll। Optical, depth/light communicate করে।</p>
          </div>
        </div>
      </section>

      <!-- 16. Dashboard UX -->
      <section id="dashboard" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৬. Dashboard UX Inspiration — Linear Dashboards</h2>
          <p class="text-muted leading-relaxed">Two-tier filter — dashboard-level (global) + widget-level (local, global inherit করে)। প্রতিটা data point clickable → filtered issue list। HSL থেকে LCH color space শিফট, per-theme config ৯৮ variable থেকে ৩-এ।</p>
        </div>
      </section>

      <!-- 17. SaaS Landing Page -->
      <section id="landing" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৭. SaaS Landing Page Breakdown — Cal.com</h2>
        </div>
        <div class="space-y-3">
          <div v-for="s in landingBreakdown" :key="s.section" class="flex gap-4 rounded-xl border border-border bg-surface p-4">
            <span class="text-xs font-mono text-accent shrink-0 w-20">{{ s.section }}</span>
            <p class="text-sm text-muted leading-relaxed">{{ s.note }}</p>
          </div>
        </div>
      </section>

      <!-- 18. Technology Radar -->
      <section id="radar" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৮. Technology Radar</h2>
          <p class="text-muted leading-relaxed">Tools and frameworks to assess, trial, or adopt।</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="space-y-4">
            <h3 class="text-sm font-mono text-muted uppercase tracking-wider border-b border-border pb-2">Emerging (0–6mo)</h3>
            <ul class="space-y-3">
              <li v-for="i in radar.emerging" :key="i" class="bg-surface border border-border p-3 rounded-lg text-sm text-muted">{{ i }}</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-mono text-emerald-500/80 uppercase tracking-wider border-b border-border pb-2">Growing (6–24mo)</h3>
            <ul class="space-y-3">
              <li v-for="i in radar.growing" :key="i" class="bg-surface border border-emerald-500/20 p-3 rounded-lg text-sm text-muted">{{ i }}</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-mono text-accent uppercase tracking-wider border-b border-border pb-2">Future (2–5yr)</h3>
            <ul class="space-y-3">
              <li v-for="i in radar.future" :key="i" class="bg-surface border border-accent/20 p-3 rounded-lg text-sm text-muted">{{ i }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 19. Design Leadership -->
      <section id="leadership" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">১৯. Design Leadership Lesson</h2>
          <p class="text-muted leading-relaxed">Rachel Kobetz (Chief Experience Officer, Salesforce) থেকে:</p>
        </div>
        <ul class="space-y-2.5 text-sm text-muted">
          <li class="flex gap-2"><span class="text-accent">→</span> Consensus-building-এর বদলে clear decision নিয়ে অটল থাকো।</li>
          <li class="flex gap-2"><span class="text-accent">→</span> Perfect clarity-র জন্য অপেক্ষা কোরো না — action clarity-র সবচেয়ে দ্রুত পথ।</li>
          <li class="flex gap-2"><span class="text-accent">→</span> Idea advocate না, shipped outcome-এর জন্য accountable হও।</li>
          <li class="flex gap-2"><span class="text-accent">→</span> Real leadership scale নিজে থেকে সব decision নেওয়া না।</li>
        </ul>
      </section>

      <!-- 20. Practice Challenge -->
      <section id="challenge" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">২০. Daily Practice Challenge</h2>
        </div>
        <div class="rounded-xl border border-border bg-surface p-6 space-y-4">
          <h3 class="font-medium text-foreground">KubeDB Dashboard-এর filter + table section redesign</h3>
          <p class="text-sm text-muted leading-relaxed">Linear-এর two-tier filter pattern (global vs widget-level) প্রয়োগ করে। প্রতিটা data-point/row clickable বানাও যাতে click করলে সরাসরি filtered detail view খোলে।</p>
          <div class="flex gap-6 text-xs font-mono text-muted pt-2 border-t border-border/50">
            <span>Difficulty: <span class="text-foreground">Medium</span></span>
            <span>Time: <span class="text-foreground">৯০ মিনিট</span></span>
          </div>
        </div>
      </section>

      <!-- 21. Learning Summary -->
      <section id="summary" class="scroll-mt-24 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-display font-semibold tracking-tight">২১. Today's Learning Summary</h2>
        </div>
        <div class="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <p class="text-lg font-medium text-foreground leading-relaxed text-balance">
            "UI craft ধীরে ধীরে commodify হয়ে যাচ্ছে — real design leverage তৈরি হচ্ছে AI workflow-এর চারপাশের trust layer, permission boundary, আর judgment surface-এ।"
          </p>
        </div>
      </section>
    </article>

    <!-- Sidebar Navigation -->
    <aside class="hidden lg:block relative">
      <StickyNav :sections="navSections" />
    </aside>

  </div>
</template>

<script setup>
const headerTags = ['Bento Grid', 'Peak-End Rule', 'Linear', 'Vercel Geist', 'Tailwind v4'];

const bestDesigns = [
  { name: 'Werk', url: 'https://www.werk.pro/', industry: 'Onchain finance', note: 'CTA header + hero দুই জায়গায় repeat, near-monochrome palette।', ratings: { visual: 7, ux: 8, motion: 5, a11y: 6, innovation: 6 } },
  { name: 'Concourse', url: 'https://www.concourse.ai/', industry: 'Enterprise AI finance', note: 'প্রতিটা feature claim-এর নিচে সরাসরি number (75% reduction)।', ratings: { visual: 7, ux: 8, motion: 6, a11y: 7, innovation: 6 } },
  { name: 'Aevion', url: 'https://drone.riotters.com/', industry: 'Deep-tech LiDAR drone', note: 'Scroll-scrubbed 3D scene, numbered ০–৬ narrative beats।', ratings: { visual: 9, ux: 7, motion: 9, a11y: 4, innovation: 9 } },
];

const uxProblems = [
  {
    product: 'Instagram iOS',
    problemTitle: 'Liquid Glass nav bar shrink-on-scroll',
    problem: 'Tap-zone shift করে scroll-এর সময়, mis-tap বেড়ে গেছে।',
    reason: "Jakob's Law + Fitts's Law ভাঙে — moving target মানেই miss বাড়া।",
    solutionTitle: 'Fixed hit-target geometry',
    solution: 'Chrome-এর visual state animate করো, কিন্তু tap-zone position fixed রাখো।',
  },
  {
    product: 'Spotify',
    problemTitle: 'Home screen algorithmic clutter',
    problem: 'Mixed card size, unpredictable "Recently Played" pollution, forced podcast autoplay।',
    reason: "Hick's Law + cognitive load বাড়ায়।",
    solutionTitle: 'দুই আলাদা zone',
    solution: '"Your Music" (fixed order) vs "Discover" (collapsible algorithmic)।',
  },
];

const productHunt = [
  { name: 'Kombai Gallery', note: '২০,০০০+ curated UI reference corpus, "not-slop" AI generation।' },
  { name: 'Framer 3.0', note: 'On-canvas AI agents, Branching feature multi-person collaboration-এর জন্য।' },
  { name: 'Bloop', note: 'Mac system audio → exportable waveform video।' },
];

const githubRepos = ['diagram-design', 'pr-lens', 'hyperframes', 'holo-card-studio'];

const landingBreakdown = [
  { section: 'Hero', note: 'তিন visitor segment (individuals/businesses/developers) একসাথে self-identify করায়।' },
  { section: 'Trust', note: '"Trusted by fast-growing companies" পুরো পাতা জুড়ে repeat হয়।' },
  { section: 'Testimonials', note: 'Competitive-displacement proof — Calendly থেকে switch করার গল্প।' },
  { section: 'Pricing', note: 'Free tier gated না — land-and-expand wedge, upgrade pressure team-growth থেকে।' },
];

const radar = {
  emerging: ['Claude Design (Anthropic Labs)', 'Figma Motion (open beta)', 'visionOS 27 Spatial Preview'],
  growing: ['DTCG token spec v2025.10', 'Agentic design canvas', 'EAA active enforcement'],
  future: ['Full AI product-org workflow', 'UI generated per-session from component grammar'],
};

const navSections = [
  { id: 'best-ui', title: 'Best UI Designs' },
  { id: 'ux-problems', title: 'UX Problems Found' },
  { id: 'pattern', title: 'Pattern of the Day' },
  { id: 'psychology', title: 'Psychology Lesson' },
  { id: 'micro', title: 'Micro-Interaction' },
  { id: 'typography', title: 'Typography Study' },
  { id: 'color', title: 'Color System' },
  { id: 'design-system', title: 'Design System' },
  { id: 'frontend', title: 'Frontend Trend' },
  { id: 'figma', title: 'Figma Tips' },
  { id: 'ai-tools', title: 'AI Design Tools' },
  { id: 'product-hunt', title: 'Product Hunt' },
  { id: 'github', title: 'GitHub Trending' },
  { id: 'a11y', title: 'Accessibility' },
  { id: 'mobile', title: 'Mobile UX' },
  { id: 'dashboard', title: 'Dashboard UX' },
  { id: 'landing', title: 'SaaS Landing Page' },
  { id: 'radar', title: 'Technology Radar' },
  { id: 'leadership', title: 'Design Leadership' },
  { id: 'challenge', title: 'Practice Challenge' },
  { id: 'summary', title: 'Learning Summary' },
];
</script>
