<template> 
    <div>
       <ul>
        <li><a @click="tab_button('all')">全部</a></li>
        <li><a @click="tab_button('uncomplete')">未完成</a></li>
        <li><a @click="tab_button('completed')">已完成</a></li>
       </ul>
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
<style>
</style>