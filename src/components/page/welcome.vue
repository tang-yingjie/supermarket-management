<template>
    <div>
        <h1>welcome</h1>
        <p>欢迎进入超市管理系统</p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:''
        }
    },
    mounted() {
        // this.$store.state.token
    },
}
</script>
<style lang="stylus">
h1{
    font-size 200px
}
p{
    font-size 100px
}
</style>