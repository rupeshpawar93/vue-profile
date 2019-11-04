<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name:'portfolia_detail',
    data() {
        return {
            message:''
        }
    },
    mounted() {
        console.log(this.$router.param.id);
    }
}
</script>