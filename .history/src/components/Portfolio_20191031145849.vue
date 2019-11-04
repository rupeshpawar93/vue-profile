<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>
<style>

</style>
<script>
export default {
    name:'portfolio',
    data() {
        return {
            fields: ['first_name', 'last_name', 'age'],
            items: []
        }
    },
    methods: {

    }

}
</script>