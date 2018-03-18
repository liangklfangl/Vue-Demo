<template>
    <div>
        <p class="navigator">
            <router-link to="/ref">学习ref</router-link>
            <router-link to="/on">学习on</router-link>
            <router-link to="/slot">学习slot</router-link>
        </p>
        <router-view>
        </router-view>

    </div>
</template>
<script>
export default {
    name: 'Main'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.navigator{
    text-align: center;
}
.navigator >a {
    display: inline-block;
    text-decoration: none;
    margin-left:10px;
    border:1px solid #ccc;
}
</style>
