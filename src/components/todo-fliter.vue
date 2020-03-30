<template> 
    <div class="fliter_style">
       <!--<ul class="nav nav-tabs">
            <li class="active"><button @click="tab_button('all')">全部</button></li>
            <li class="active"><a href="#" @click="tab_button('uncomplete')">未完成</a></li>
            <li><a href="#" @click="tab_button('completed')">已完成</a></li>
       </ul>-->
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info"  @click="tab_button('all')">全部</button>
            <button type="button" class="btn btn-info" @click="tab_button('uncomplete')">未完成</button>
            <button type="button" class="btn btn-info" @click="tab_button('completed')">已完成</button>
        </div>
    </div>
</template>
<script>
export default
{
    props:['todos'],
    data()
    {
        return{
        }
    },
    methods:
    {
        tab_button:function(type)
        {
           window.bus.$emit('tab_type',type)
        }
    }
}
</script>
<style scope>
.fliter_style
{
    margin:10px;
}
</style>