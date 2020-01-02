<template>
    <div>
        
        <ul>
            <li>Name:{{profile.name}}</li>
            <li>Username:{{profile.username}}</li>
            <li>Phone no: {{profile.phone}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Portfolio_detail',
    data() {
        return {
            message:'',
            profile:{}
        }
    },
    created() {
        this.message=this.$route.params.userId;
        axios
        .get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.userId)
        .then((response) => {
            this.profile =  response.data;
        });
    }
}
</script>