<template>
  <a :href="`/glosario#${term.toLowerCase()}`" class="concept-badge" :title="title">
    <span class="concept-text">
      <slot />
    </span>
    <span class="material-symbols-outlined concept-icon">help</span>
  </a>
</template>

<script setup>
const props = defineProps({
  term: { type: String, required: true },
  title: { type: String, default: "" },
})
</script>

<style scoped>
.concept-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.375rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 0.25rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 400;
  transition: all 0.15s ease;
  white-space: nowrap;
  vertical-align: baseline;
}

.concept-badge:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  transform: translateY(-0.5px);
}

.concept-text {
  font-variant: small-caps;
  letter-spacing: 0.025em;
}

.concept-icon {
  font-size: 0.625rem;
  opacity: 0.7;
  transition: opacity 0.15s ease;
}

.concept-badge:hover .concept-icon {
  opacity: 1;
}

/* Ensure it works well inline with text */
.concept-badge {
  margin: 0 0.125rem;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .concept-badge {
    border-color: var(--vp-c-divider);
  }
}
</style>
