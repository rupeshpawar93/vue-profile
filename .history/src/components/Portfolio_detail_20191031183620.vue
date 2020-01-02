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
        }
    },
    mounted() {
        this.message=this.$route.params.userId;
        axios
        .get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.userId)
        .then((response) => {
            console.log(response.data);
        });
    }
}
</script>