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
            items: [
            ]
        }
    },
    methods: {

    },
    mounted() {
        this.items.push([ { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }]);
    }

}
</script>