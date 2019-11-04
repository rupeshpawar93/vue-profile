<template>
    <div>
        <b-table striped hover :items="items"></b-table>
        <span  @click="next">Next</span>
        <span @click="prev">Prev</span>
    </div>
</template>
<style>

</style>
<script>
import axios from 'axios'
export default {
    name:'portfolio',
    data() {
        return {
            fields: [],
            items: [
            ],
            obj:{},
            id:1,
            respData:[]
        }
    },
    methods: {
        next() {
            this.items=[];
            this.items=this.respData.slice(this.id*10,++this.id*10);
        }
    },
    mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.respData = response.data;
            response.data=this.respData.slice((this.id-1),this.id*10);
            response.data.forEach((element,index) => {
                console.log(element);
                this.obj['id']=element.id;
                this.obj['title']=element.title;
                this.obj['body']=element.body;
                this.obj['userId']=element.userId;
                this.items.push(this.obj);
                this.obj={};
            });
            // this.items=response.data;
        });
        
    }

}
</script>