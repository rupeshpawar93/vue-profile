<template>
    <div>
        <h3>{{company}}</h3>
        <form class="container" @submit="checkForm">
             <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control"  aria-describedby="emailHelp" :value="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="name" :value="name">
            </div>
             <div class="form-group">
                <button type="submit"></button>
            </div>
        </form>
    </div>
</template>
<style scoped>
    .container {
        width:600px;
        margin: 0 auto;
    }
</style>>
    
</style>
<script>
export default {
    name: 'Company',
    data() {
        return {
            company:'',
            email:'',
            name:''
        }
    },
    mounted() {
        this.company = this.$route.params.item.Company
    }
}
</script>