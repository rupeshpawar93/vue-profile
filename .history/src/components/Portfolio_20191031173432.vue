<template>
    <div>
        <b-table striped hover :items="items" @row-clicked="gotoDetails"></b-table>
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
            console.log(this.id);
        },
        prev() {
            --this.id;
            console.log(this.id);
            if(this.id==0) {
                ++this.id;
                alert("NO");
            }
            else if(this.id==1) {
                this.items=[];
                this.items=this.respData.slice((this.id-1),(this.id)*10);
            } else {
                this.items=[];
                this.items=this.respData.slice((this.id-1)*10,(this.id*10));
            }
        },
        gotoDetails: function(item,index) {
            console.log(item.id);
            this.$router.push({ path: 'portfolia_detail', param: { id: item.id } });
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