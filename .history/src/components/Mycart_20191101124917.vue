<template>
    <div>
        <p>Mycart:{{share}}</p>
        <Portfolio_detail :profile="profile"/>
    </div>
</template>
<script>
import Portfolio_detail from './Portfolio_detail'
export default {
    name:'mycart',
    data() {
        return {
            profile:{},
            share:0
        }
    },
    mounted() {
        this.userId=this.$route.params.item.userId;
        axios
        .get('https://jsonplaceholder.typicode.com/users/'+this.userId)
        .then((response) => {
            this.profile =  response.data;
        });
    }
}
</script>