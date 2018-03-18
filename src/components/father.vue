<template>
    <div id="m-dialog">
        <child v-bind:state="flag"></child>
    </div>
</template>
<script>
import Vue from "vue";
var vue1 = new Vue({
    // 这里的el可视为父组件
    // 所以下面这个片段是放在#m-dialog里面的
    el: "#m-dialog",
    data: {
        flag: true
    }
});
</script>
