<template>
    <div id="v-model">
        <label v-for="value in options">
            <input type="checkbox" :value="value" v-model="selected" @change="onchange" />
        </label>
    </div>
</template>
<script>
export default {
    data: function() {
        return { options: [1, 2, 3, 4, 5], selected: [] }
    },
    methods: {
        onchange: function() {
            console.log('this.seleced===', this.selected);
            // 这里是选中的元素
        }
    }
}
</script>
<style>

</style>
