<template>
    <div>
        hit here
        {{message}}
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Portfolio_detail',
    data() {
        return {
            message:''
            profile:{}
        }
    },
    created() {
        this.message=this.$route.params.userId;
        axios
        .get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.userId)
        .then((response) => {
          response.data);
        });
    }
}
</script>