<template>
  <a :href="url" class="ref-badge">
    <span v-if="icon" class="material-symbols-outlined ref-icon">{{ icon }}</span>
    <span class="ref-text">
      <slot />
    </span>
    <span class="material-symbols-outlined ref-arrow">arrow_forward</span>
  </a>
</template>

<script setup>
const props = defineProps({
  url: { type: String, required: true },
  icon: { type: String, default: "" },
})
</script>

<style scoped>
.ref-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.ref-badge:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ref-icon {
  font-size: 1rem;
  opacity: 0.8;
}

.ref-text {
  flex: 1;
}

.ref-arrow {
  font-size: 0.875rem;
  opacity: 0.6;
  transition: transform 0.2s ease;
}

.ref-badge:hover .ref-arrow {
  transform: translateX(2px);
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .ref-badge:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}
</style>
