<template>
    <div>
        <h3>{{company}}</h3>
        <form class="container" @submit.prevent="checkForm">
            <div v-for="(item,index) in items" v-bind:key="index">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control"  aria-describedby="emailHelp" v-model="items.email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="name" v-model="items.name">
                </div>
                <p @click="addnew">Add</p>
            </div>
             <div class="form-group">
                <input type="submit" value="Submit">
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
            items:[{name:'',email:''}]
        }
    },
    created() {
        this.company = this.$route.params.item.Company
    },
    methods: {
        checkForm() {
            console.log(this.items)
        },
        addnew() {
            this.items.push([
              {  email:'',
                name:''
            }])
        }
    },
    mounted() {

    }
}
</script>