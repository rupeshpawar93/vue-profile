<template>
    <div style="width:90%">
        <p style="float:right">Mycart:{{share}}</p>
        <div style="overflow:auto">
            <PortfolioDetail :profile="profile" @myEvent="mycart"/>
        </div>
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
        mycart(val) {
            this.share=val
        }
    }
}
</script>