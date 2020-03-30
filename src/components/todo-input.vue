<template>
    <div>
        <h2>ToDo List</h2>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="輸入代辦事項" v-model="msg">
            <div class="input-group-append">
                <button class="input-group-text" @click="addNew">Add</button>
            </div>
        </div>
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