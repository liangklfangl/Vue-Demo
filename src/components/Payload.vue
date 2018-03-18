<template>
    <div id="message-event-example" class="demo">
        <p v-for="msg in messages">{{ msg }}</p>
        <button-message v-on:click.native="focus" v-on:message="handleMessage" ></button-message>
    </div>
</template>
<script>
import ButtonMessage from "./ButtonMessage";
export default {
    data: function() {
        return {
            messages: []
        }
    },
    methods: {
        handleMessage: function(payload) {
            this.messages.push(payload.message)
        },
        focus:function(){
            alert('fuck');
        }
    },
    components: { ButtonMessage }
}
</script>
<style>
#message-event-example{
    border:1px solid red;
}
</style>
