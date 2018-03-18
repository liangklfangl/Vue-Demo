<template>
    <div id="name">
        <input type="text" ref="input1" id="input1" />
        <button @click="add">添加</button>
    </div>
</template>
<script>
console.log('$ref被实例化');
export default {
    methods: {
        add: function() {
            this.$refs.input1.value = "22";
            console.log(this.$refs.input1);
            console.log(document.getElementById('input1'));
        }
    }
}
</script>

