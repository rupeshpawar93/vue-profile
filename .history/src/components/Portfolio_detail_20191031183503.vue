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
        console.log(this.$route.params.userid);
        this.message=this.$route.params.userId;
    }
}
</script>