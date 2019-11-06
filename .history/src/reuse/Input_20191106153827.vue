<template>
   <div class="form-group">
        <label for="exampleInputPassword1">{{name}}{{type}}</label>
        <input :type="type" class="form-control" value=""  placeholder="name" v-model="(type=='email')?input.email:input.name">
    </div>
</template>

<script>
export default {
    name:'Input',
    props:{
        item:Array,
        name:String,
        type:String
    }    
}
</script>