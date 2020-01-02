<template>
    <div>
        <b-table striped hover :items="items"></b-table>
        <span  @click="next(id)">Next</span>
    </div>
</template>
<style>

</style>
<script>
import axios from 'axios'
export default {
    name:'portfolio',
    data() {
        return {
            fields: ['name', 'username', 'email','address.street'],
            items: [
            ],
            obj:{},
            id:1
        }
    },
    methods: {
        next(a) {
            alert(a);
        }
    },
    mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            response.data.forEach((element,index) => {
                console.log(element);
                this.obj['id']=element.id;
                this.obj['name']=element.name;
                this.obj['username']=element.username;
                this.obj['email']=element.email;
                this.obj['street']=element.address.street;
                this.items.push(this.obj);
                this.obj={};
            });
            // this.items=response.data;
        });
        
    }

}
</script>