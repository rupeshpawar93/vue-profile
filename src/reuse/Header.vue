<template>
   <header>
        <div class="wrapper">
            <h1>Flip</h1>
            <ul>
                <li><span  class="navbar-brand" @click="addTitle('Video List')">Video List</span></li>
                <li><span class="navbar-brand"  @click="addTitle('Audio List')">Audio List</span></li>
                <li><span class="navbar-brand" @click="logout">Logout</span></li>
            </ul>
        </div>
   </header>
</template>
<style scoped>
    header {
        background-color: #ccc;
    }
    h1 {
        float: left;
    }
    ul,ul li {
        display : inline-block;  
    }
    span {
        padding: 20px 20px;
        display: inline-block;
        cursor: pointer;
        border: 1px #000;
    }
    .wrapper {
        max-width: 1200px;
        width: 96%;
        margin: 0 auto;


    }
</style>
<script>
export default {
    name: 'Header',
    data() {
        return {}
    },
    methods: {
        addTitle(param) {
            this.$emit('show-list',param);
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push({name:'login'});
        }
    }
}
</script>