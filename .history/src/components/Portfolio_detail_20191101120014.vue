<template>
    <div>
        <ul>
            <li>Name: {{profile.name}}</li>
            <li>Username: {{profile.username}}</li>
            <li>Phone no: {{profile.phone}}</li>
        </ul>
        <b-table striped hover :fields="fields" :items="items">
             <template v-slot:cell(actions)="row">
                <b-button size="sm" @click="add(item,index)" class="mr-1">
               +
                </b-button>
             </template>
        </b-table>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Portfolio_detail',
    data() {
        return {
            userId:'',
            profile:{},
            fields:['id','Company','SharePrice','ShareAvailable','ShareBuy','Actions'],
            items:[
                {
                    'id':1,
                    'Company':'TCS',
                    'SharePrice': 100.00,
                    'ShareBuy': 0,
                    'ShareAvailable':2
                },
                {
                    'id':2,
                    'Company':'ONGC',
                    'SharePrice': 104.00,
                    'ShareBuy': 0,
                    'ShareAvailable':3
                },
                {
                    'id':1,
                    'Company':'GAIL',
                    'SharePrice': 110.00,
                    'ShareBuy': 0,
                    'ShareAvailable':63
                }
            ]
        }
    },
    methods: {
        add(item,index) {
            conosole.log(++item.ShareBuy)
        }
    },
    mounted() {
        this.userId=this.$route.params.item.userId;
        axios
        .get('https://jsonplaceholder.typicode.com/users/'+this.userId)
        .then((response) => {
            this.profile =  response.data;
        });
    }
}
</script>