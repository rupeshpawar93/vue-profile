<template>
    <div>
        <p>Mycart:{{share}}</p>
        <PortfolioDetail :profile="profile"/>
    </div>
</template>
<script>
import PortfolioDetail from './Portfolio_detail'
export default {
    name:'mycart',
    data() {
        return {
            profile:{}
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