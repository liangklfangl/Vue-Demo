<template>
    <my-checkbox inline-template>
        <div class="checkbox-wrapper" @click="check">
            <div :class="{ checkbox: true, checked: checked }"></div>
            <div class="title"></div>
        </div>
    </my-checkbox>
</template>
