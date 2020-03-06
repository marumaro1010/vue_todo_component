<template>
    <div>
        <input type="text" v-model="msg"/>
        <button @click="addNew">新增</button>
    </div>
</template>
<script>
export default
{
    name:'Todoinput',
    data()
    {
        return{
            msg : ''
        }
    },
    methods:
    {
        addNew()
        {
            if(this.msg == '')
            {
                alert('不得為空');
                return false;
            }
            this.$emit('AddChild',this.msg);
            this.msg = '';
        }
    }
}
</script>