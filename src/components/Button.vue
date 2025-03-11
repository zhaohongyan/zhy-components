<template>
    <button :class="`zhy-btn ${props.type || 'default'}`">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps(['type'])

</script>


<style lang="less" scoped>
.zhy-btn {
    padding: 8px 15px;
    cursor: pointer;
    text-align: center;
    border-radius: var(--zhy-border-radius-base);
    border-width: 1px;
    border-style: solid;
    border-color: var(--zhy-border-color);
    background: var(--zhy-white-color);
    color: var(--zhy-black-color);
    outline: none;
    &.primary {
        background: var(--zhy-primary-color);
        color: var(--zhy-white-color);
        border-color: var(--zhy-primary-color);
    }
}
</style>