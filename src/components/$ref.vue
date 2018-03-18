<template>
    <div id="name">
        <input type="text" ref="input1" id="input1" />
        <button @click="add">添加</button>
        <foo ref="foo" />
        <!-- 该组件在main.js中已经注册了 -->
        <ul v-for="item in list">
            <li ref="item">姓名:{{item.name}},性别{{item.sex}}</li>
        </ul>
    </div>
</template>
<script>
console.log('$ref被实例化');
export default {
    data:function(){
        return {
            list:[{
                name:'覃亮',
                sex:'男'
            },{
                name:'高山上的鱼',
                sex:'男'
            },{
                name:'liangklfang',
                sex:'男'
            }]
        }
    },
    methods: {
        add: function() {
            this.$refs.input1.value = "22";
            // ref或者document.getElementById都能够获取到dom,而$refs相对document.getElementById的方法，会减少获取dom节点的消耗。
            console.log(this.$refs.input1);
            console.log(document.getElementById('input1'));
            console.log(this.$refs.foo);
            // this.$refs.foo获取到子组件
            console.log(this.$refs);
        }
    }
}
</script>

