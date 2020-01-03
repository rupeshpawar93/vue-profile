<template>
    <div>
        <h2>File Detail</h2>
       <ul>
           <li>
               <label>Name :</label>
               <p>{{ detail }}</p>
           </li>
            <li>
               <label>MimeType :</label>
               <p>{{  }}</p>
           </li>
            <li>
               <label>Created by :</label>
               <p>{{ }}</p>
           </li>
            <li>
               <label>Created At :</label>
               <p>{{  }}</p>
           </li>
       </ul>
        <p>Actions</p>
        <ul>
            <li><button type="button" class="btn btn-primary">Update</button></li>
            <li><button type="button" class="btn btn-danger">Delete</button></li>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    name: "DetailFile",
    
    data() {
        return {
            detail: {}
        }
    },
    created() {
        this.detail = this.$route.params.detail
    },
    mounted() {
       
       Axios.post('http://localhost:3000/api/admin/file',{id:this.detail})
                .then((response)=>{
                        if(response.data.status==0) {
                            reject(response.data);
                        } else {
                            localStorage.setItem('token',response.data.data.token);
                            context.commit('auth_login');
                            console.log(this.state.isLogin)
                            resolve(response.data);
                        }
                    }).catch((err)=>{
                        reject(err);
                    });
    }
}
</script>