<template>
   <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input type="text" class="form-control" value="" id="exampleInputPassword1" placeholder="name" v-model="item.name">
    </div>
</template>

<script>
export default {
    name:'Input',
    props:{
        item:Array
    }    
}
</script>