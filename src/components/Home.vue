        <template>
            <div>
                <Header  @show-list="addTitle"/>
                <h3>{{ title }}</h3>
                <div v-if="loader"><Loader /></div>
                <div v-else>
                    <b-table striped hover :fields="fields" :items="items" >
                        <template v-slot:cell(actions)="row">
                            <b-button size="sm" @click="info(row.item, row._id, $event.target)" class="mr-1">
                                Detail View
                            </b-button>
                        </template>
                    </b-table>
                    <span  @click="next">Next</span>
                    <span @click="prev">Prev</span>
                </div>
            </div>
        </template>
        <script>
        import Header from './../reuse/Header'
        import Loader from './../reuse/Loader'
        import axios from 'axios'

        export default {
            name: 'Home',
            components:{Header,Loader},
            data() {
                return {
                        fields: [
                            {key:'id',sortable:true},
                            { key: 'Name', sortable: true },
                            { key: 'Path', sortable: true },
                            {key: 'UserId', sortable:true},
                            {key: 'Created At', sortable:true},
                            {key:'actions',label:'Action'}
                            ],
                        items:[],
                        obj:{},
                        title: 'Video List',
                        loader:false,
                        page:0
                }
            },
            methods: {
                next() {
                        this.loader=true;
                        this.items=[];
                        
                        this.$store.dispatch('fileList',[this.title,++this.page]).then(result=>{
                                        result.forEach((element,index) => {
                                            this.obj['Name']=element.name?element.name:element.originalname;
                                            this.obj['Path']=element.path;
                                            this.obj['UserId']=element.user_id;
                                            this.obj['Created At'] = element.createdAt;
                                            this.obj['id'] = element._id;
                                            this.items.push(this.obj);
                                            this.obj={};
                                            });
                                            this.loader=false;
                    }).catch(err=>{});  
                },
                prev() {
                    this.loader=true;
                    this.items=[];
                    if(this.page==0) {
                        this.page = 0;
                    } else {
                        --this.page;
                    }
                    this.$store.dispatch('fileList',[this.title,this.page]).then(result=>{
                                    result.forEach((element,index) => {
                                                        this.obj['Name']=element.name?element.name:element.originalname;
                                                        this.obj['Path']=element.path;
                                                        this.obj['UserId']=element.user_id;
                                            this.obj['Created At'] = element.createdAt;
                                            this.obj['id'] = element._id;
                                            this.items.push(this.obj);
                                            this.obj={};
                                            });
                                            this.loader=false;
                    }).catch(err=>{});  
                },
                info(item,index,button) {
                    alert(index);
                },
                addTitle(param) {
                    this.title = param;
                    this.loader=true;
                    this.items= [];
                    this.$store.dispatch('fileList',[param,0]).then(result=>{
                        result.forEach((element,index) => {
                                            this.obj['Name']=element.name?element.name:element.originalname;
                                            this.obj['Path']=element.path;
                                            this.obj['UserId']=element.user_id;
                                            this.obj['Created At'] = element.createdAt;
                                            this.obj['id'] = element._id;
                                            this.items.push(this.obj);
                                            this.obj={};
                                            });
                                            this.loader=false;
                    }).catch(err=>{});
                }
            },
            mounted() {
                this.$store.dispatch('fileList',['Video List',0])
                        .then(result=>{
                        result.forEach((element,index) => {
                            this.obj['Name']=element.name?element.name:element.originalname;
                            this.obj['Path']=element.path;
                            this.obj['UserId']=element.user_id;
                            this.obj['Created At'] = element.createdAt;
                            this.obj['id'] = element._id;
                            this.items.push(this.obj);
                            this.obj={};
                            });
                            this.loader=false;
                        })
                        .catch((error)=>{
                        
                        });
                
            }
        }
        </script>