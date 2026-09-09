<template>
  <div class="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
    <header class="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div class="container mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <NuxtLink to="/" class="font-display font-semibold text-foreground tracking-tight flex items-center gap-2">
          <div class="w-4 h-4 bg-accent rounded-sm"></div>
          UI/UX Intelligence
        </NuxtLink>
        <nav class="flex items-center gap-6 text-sm font-medium text-muted">
          <NuxtLink to="/" class="hover:text-foreground transition-colors" active-class="text-foreground">Today</NuxtLink>
          <NuxtLink to="/archive" class="hover:text-foreground transition-colors" active-class="text-foreground">Archive</NuxtLink>
          <NuxtLink to="/topics" class="hover:text-foreground transition-colors" active-class="text-foreground">Topics</NuxtLink>
        </nav>
      </div>
    </header>
    
    <main class="flex-1 w-full container mx-auto max-w-5xl px-4 py-8 md:py-12">
      <slot />
    </main>
    
    <footer class="border-t border-border mt-auto py-8 text-center text-sm text-muted">
      <div class="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {{ new Date().getFullYear() }} UI/UX Daily Intelligence Report. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="#" class="hover:text-foreground transition-colors">RSS</a>
          <a href="#" class="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" class="hover:text-foreground transition-colors">About</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* NuxtLink active class default behavior is slightly tricky without router config, 
   but active-class handles it usually */
</style>
