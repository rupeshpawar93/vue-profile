<template>
    <div>
        <p>Mycart:{{share}}</p>
        <PortfolioDetail :profile="profile" @myEvent="mycart"/>
    </div>
</template>
<script>
import axios from 'axios'
import PortfolioDetail from './PortfolioDetail'
export default {
    name:'mycart',
    data() {
        return {
            profile:{},
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
    },
    methods: {
        myEvent(val) {
            console.log(val);
        }
    }
}
</script>