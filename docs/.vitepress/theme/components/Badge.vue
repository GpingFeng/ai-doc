<template>
    <span class="custom-badge" :class="type">
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
defineProps<{
    type?: 'info' | 'tip' | 'warning' | 'danger'
}>()
</script>

<style scoped>
.custom-badge {
    display: inline-block;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border-radius: 12px;
    white-space: nowrap;
    margin: 0 4px;
    vertical-align: middle;
}

.custom-badge.info {
    background-color: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
}

.custom-badge.tip {
    background-color: rgba(16, 185, 129, 0.14);
    color: #10b981;
}

.custom-badge.warning {
    background-color: rgba(245, 158, 11, 0.14);
    color: #f59e0b;
}

.custom-badge.danger {
    background-color: rgba(239, 68, 68, 0.14);
    color: #ef4444;
}

.dark .custom-badge.tip {
    color: #34d399;
}

.dark .custom-badge.warning {
    color: #fbbf24;
}

.dark .custom-badge.danger {
    color: #f87171;
}
</style>
