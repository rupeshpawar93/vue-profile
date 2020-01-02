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
        console.log(this.$router.params);
    }
}
</script>