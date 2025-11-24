<template>
    <div class="custom-card" :class="variant">
        <div v-if="icon" class="card-icon">
            {{ icon }}
        </div>
        <div class="card-content">
            <h3 v-if="title" class="card-title">{{ title }}</h3>
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    icon?: string
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}>()
</script>

<style scoped>
.custom-card {
    border-radius: 12px;
    padding: 24px;
    margin: 20px 0;
    border: 1px solid var(--vp-c-divider);
    background-color: var(--vp-c-bg-soft);
    transition: all 0.3s ease;
}

.custom-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.custom-card.primary {
    border-color: var(--vp-c-brand-1);
    background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
}

.custom-card.success {
    border-color: #10b981;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, var(--vp-c-bg-soft) 100%);
}

.custom-card.warning {
    border-color: #f59e0b;
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, var(--vp-c-bg-soft) 100%);
}

.custom-card.danger {
    border-color: #ef4444;
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, var(--vp-c-bg-soft) 100%);
}

.card-icon {
    font-size: 32px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background-color: var(--vp-c-bg);
}

.card-content {
    flex: 1;
}

.card-title {
    margin: 0 0 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.card-body {
    font-size: 14px;
    line-height: 1.6;
    color: var(--vp-c-text-2);
}

.card-body :deep(p) {
    margin: 8px 0;
}

.card-body :deep(code) {
    background-color: var(--vp-c-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
}
</style>
