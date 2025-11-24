<template>
    <div class="timeline">
        <div class="timeline-item" v-for="(item, index) in items" :key="index">
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
                <div class="timeline-line" v-if="index < items.length - 1"></div>
            </div>
            <div class="timeline-content">
                <div class="timeline-time">{{ item.time }}</div>
                <div class="timeline-title">{{ item.title }}</div>
                <div class="timeline-description">{{ item.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface TimelineItem {
    time: string
    title: string
    description?: string
}

defineProps<{
    items: TimelineItem[]
}>()
</script>

<style scoped>
.timeline {
    padding: 20px 0;
}

.timeline-item {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
    position: relative;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.timeline-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--vp-c-brand-1);
    border: 2px solid var(--vp-c-bg);
    box-shadow: 0 0 0 2px var(--vp-c-brand-1);
    z-index: 1;
}

.timeline-line {
    width: 2px;
    flex: 1;
    background-color: var(--vp-c-divider);
    margin-top: 8px;
    min-height: 40px;
}

.timeline-content {
    flex: 1;
    padding-bottom: 8px;
}

.timeline-time {
    font-size: 13px;
    font-weight: 600;
    color: var(--vp-c-brand-1);
    margin-bottom: 8px;
}

.timeline-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin-bottom: 8px;
}

.timeline-description {
    font-size: 14px;
    line-height: 1.6;
    color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
    .timeline-item {
        gap: 16px;
    }

    .timeline-time {
        font-size: 12px;
    }

    .timeline-title {
        font-size: 14px;
    }

    .timeline-description {
        font-size: 13px;
    }
}
</style>
