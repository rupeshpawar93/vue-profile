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
            ]
        }
    },
    methods: {

    },
    mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            response.data.forEach(element => {
            console.log(element);     
            });
            this.items=response.data;
        });
        
    }

}
</script>