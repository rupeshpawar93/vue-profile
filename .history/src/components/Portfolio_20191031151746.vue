<template>
    <div>
        <b-table striped hover :items="items"></b-table>
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
            obj:{}
        }
    },
    methods: {

    },
    mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            response.data.forEach(element => {
                this.obj['name']=element.name;
                this.obj['username']=element.username;
                this.obj['email']=element.email;
                this.obj['street']=element.address.street;
                this.items.push(this.obj); 
            });
            // this.items=response.data;
        });
        
    }

}
</script>