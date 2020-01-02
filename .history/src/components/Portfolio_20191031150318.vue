<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>
<style>

</style>
<script>
import axios from 'axios';
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
        this.items.push( { age: 40, first_name: 'Dickerson', last_name: 'Macdonald'});
    }

}
</script>