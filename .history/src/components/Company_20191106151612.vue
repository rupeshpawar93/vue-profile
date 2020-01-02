<template>
    <div>
        <h4>{{name}}</h4>
        <h3>{{company}}</h3>
        <form class="container" @submit.prevent="checkForm">
            <div v-for="(item,index) in items" v-bind:key="index">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" value=""  aria-describedby="emailHelp" v-model="item.email" placeholder="Enter email">
                </div>
                <input />
                <!-- <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" value="" id="exampleInputPassword1" placeholder="name" v-model="item.name">
                </div> -->
            </div>
             <p @click="addnew">Add</p>
              <p @click="remove">Remove</p>
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
import Input from './../reuse/input'
export default {
    name: 'Company',
    data() {
        return {
            company:'',
            items:[]
        }
    },
    components: {Input}, 
    computed: {
        name() {
           return this.$store.getters.upperCase
        }
    },
    created() {
        this.company = this.$route.params.item.Company
    },
    methods: {
        checkForm() {
            console.log(this.items);
        },
        addnew() {
            this.items.push([
              {  email:null,
                name:null
            }])
        },
        remove() {
            this.items.splice(0,1)
        }
    },
    mounted() {
        this.addnew()
    }
}
</script>