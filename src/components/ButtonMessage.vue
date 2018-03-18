<template>
    <div>
        <input type="text" v-model="message" />
        <!-- 1.这里通过v-model和数据双向绑定了 -->
        <button v-on:click="handleSendMessage">Send</button>
        <!-- 2.点击send后通知给父级组件 -->
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            message: 'test message'
        }
    },
    methods: {
        handleSendMessage: function() {
            // 3.通过this.$emit的第二个参数通知父级组件，父级组件通过v-on:message监听message事件
            this.$emit('message', { message: this.message })
        },
        focus: function() {
            debugger
            // alert('获取焦点');
        }
    }
}
</script>

<style>

</style>
