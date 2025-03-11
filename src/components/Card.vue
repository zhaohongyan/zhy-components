<template>
    <div class="zhy-card">
        <div class="zhy-title">
        {{props.title}}
        </div>
        <div class="zhy-content">
            <slot ></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title']);

</script>

<style lang="less" scoped>
.zhy-card {
    display: inline-block;
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: var(--zhy-box-shadow-light);
    .zhy-title {
        font-weight: bold;
        font-size: 16px;
        border-bottom: 1px solid #eee;
        padding: 10px;
    }
    .zhy-content {
        padding: 20px;
    }
}
</style>