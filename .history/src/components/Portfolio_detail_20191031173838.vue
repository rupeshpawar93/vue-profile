<template>
    <div>
        hit here
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
        console.log('-----------'+this.$router.params.id);
    }
}
</script>