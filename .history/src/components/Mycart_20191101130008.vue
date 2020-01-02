<template>
    <div>
        <p>Mycart:{{share}}</p>
        <PortfolioDetail :profile="profile"/>
    </div>
</template>
<script>
import PortfolioDetail from './PortfolioDetail'
export default {
    name:'mycart',
    data() {
        return {
            share:0
        }
    },
    components: {
        PortfolioDetail
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