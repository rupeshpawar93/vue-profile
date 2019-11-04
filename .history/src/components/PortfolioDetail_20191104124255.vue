<template>
    <div>
        <ul>
            <li>Name: {{profile.name}}</li>
            <li>Username: {{profile.username}}</li>
            <li>Phone no: {{profile.phone}}</li>
            <li>My Total Share: {{myshare}}</li>
            <li>Total Cost: {{mytotalcost}}</li>
        </ul>
        <b-table striped hover :fields="fields" :items="items">
             <template v-slot:cell(actions)="row">
                <b-button size="sm" @click="add(row.item,row.index)" class="mr-1">
               +
                </b-button>
                <b-button size="sm" @click="minus(row.item,row.index)" class="mr-1">
               -
                </b-button>
                <b-button size="sm" @click="moreInfo(row.item)" class="mr-1">More Info</b-button>
             </template>
        </b-table>

    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'PortfolioDetail',
    props:{
        profile:Object
        },
    data() {
        return {
            userId:'',
            fields:['id','Company','SharePrice','ShareAvailable','ShareBuy','Actions'],
            myshare:0,
            mytotalcost:0,
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
                    'id':3,
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
            if(item.ShareAvailable!=0) {
                this.items[index]['ShareBuy'] = ++item.ShareBuy;
                this.myshare = ++this.myshare;
                this.mytotalcost = this.mytotalcost + item.SharePrice;
                this.items[index]['ShareAvailable'] = --item.ShareAvailable;
                this.$emit('myEvent', this.myshare);
            } else {
                alert(item.Company+' No Share left');
            }
        },
        minus(item,index) {
            if(item.ShareBuy!=0) {
                this.items[index]['ShareBuy'] = --item.ShareBuy;
                this.myshare = --this.myshare;
                this.mytotalcost = this.mytotalcost - item.SharePrice;
                this.items[index]['ShareAvailable'] = ++item.ShareAvailable;
                this.$emit('myEvent', this.myshare);
            } else {
                alert(item.Company+' No buy Share left');
            }
        },
        moreInfo(item) {
              this.$router.push({ name: 'company', params: { item: item } });
        }
    },
    mounted() {
        // this.userId=profile.userId;
        // axios
        // .get('https://jsonplaceholder.typicode.com/users/'+this.userId)
        // .then((response) => {
        //     this.profile =  response.data;
        // });
    }
}
</script>