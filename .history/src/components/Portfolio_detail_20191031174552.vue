<template>
    <div>
        hit here
        {{message}}
    </div>
</template>
<script>
export default {
    name:'Portfolio_detail',
    data() {
        return {
            message:''
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        this.message=this.$route.params.id;
    }
}
</script>