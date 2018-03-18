<template>
    <div id="counter-event-example">
        <p>{{ total }}</p>
        <!-- 
                1.父组件通过v-on来注册一个事件，如果监听到$.emit('increment')这个事件就调用incrementTotal
                2.每个 Vue 实例都实现了事件接口，即：使用 $on(eventName) 监听事件。使用 $emit(eventName, optionalPayload) 触发事件
                3.另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。不能用 $on 监听子组件释放的事件，而必须在模板里直接用 v-on 绑定
                4.子组件上的v-on:increment并不会被渲染都DOM中，而是vue的事件注册方式。比如这个例子渲染的DOM如下:
                  <div id="counter-event-example"><p>0</p> 
                    <button>0</button> 
                   <button>0</button>
                 </div>
             -->
        <button-counter v-on:increment="incrementTotal"></button-counter>
        <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>
</template>

<script>
console.log('on被实例化');
import ButtonCounter from "./ButtonCounter";
export default {
    data: function() {
        return {
            total: 0
        }
    },
    methods: {
        incrementTotal: function() {
            this.total++;
        }
    },
    // 2.注册子组件
    components: { ButtonCounter }
}
</script>

<style>

</style>
