<script lang="ts" setup>
import Button from "./components/Button.vue";
import Card from './components/Card.vue'
</script>

<template>
    <div>
        <Button type="primary" style="margin-right: 10px;">primary</Button>
        <Button>default</Button>
        <br/>
        
        <Card title="这是标题" style="margin-right: 10px;">这是内容</Card>
        <Card title="这是标题" style="margin-right: 10px;">这是内容</Card>
        <Card title="这是标题">这是内容</Card>
    </div>
</template>