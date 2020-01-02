<template>
    <div style="width:90%;margin:0 auto;">
        <p style="float:right">Mycart:{{myshare}}</p>
        <div style="overflow:auto">
            <PortfolioDetail :profile="profile"/>
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
            profile:{}
        }
    },
    components: {
        PortfolioDetail
    },
    mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.item.userId)
        .then((response) => {
            this.profile =  response.data;
        });
    },
    computed: {
        myshare() {
            return this.$store.state.myshare
        },
        mysharePrice() {
            return this.$store.state.sharePrice
        }
    },
    methods: {
        // mycart(val) {
        //     this.share=val
        // }
    }
}
</script>