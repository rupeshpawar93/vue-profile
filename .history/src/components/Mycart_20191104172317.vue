<template>
    <div style="width:90%;margin:0 auto;">
        <p style="float:right">Mycart:{{myshare}}</p>
        <div style="overflow:auto">
            <PortfolioDetail :profile="profile" @myEvent="mycart"/>
        </div>
    </div>
</template>
<style>
    ul {
        list-style: none;
    }
</style>
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