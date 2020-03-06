<template> 
    <div>
        <li v-for="(todo,index) in fliter_list " :index="index" :key="todo.id">
            <input v-if="todo.edit" type="text" v-model="todo.value"/>
            <label v-else><span :class="{ linetext: todo.complete }">{{ todo.value }}</span></label>
            <button @click="ModChild(todo)">修改</button>
            <button @click="DeleteChild(index)">刪除</button>
            <button @click="CompleteChild(todo)" v-if="todo.complete == false">完成</button>
        </li>
    </div>
</template>
<script>
export default
{
    props:['todos'],
    data()
    {
        return{
            list:this.todos,
            tab_type:'all'
        }
    },
    created(){

    },
    mounted() {
        window.bus.$on('tab_type', function(id) {
           this.tab_type = id;
        }.bind(this))
    },
    computed:{
        fliter_list(){
            //console.log(this.tab_type);
            var iscomplete;
            if(this.tab_type == 'all')
            {
                return this.list;
            }
            else
            {                
                if(this.tab_type == 'uncomplete')
                {
                    iscomplete = false;
                }
                else
                {
                    iscomplete = true;
                }
                return this.fliter(iscomplete);
            }
        }
    },
    methods:
    {
        DeleteChild(idx)
        {
            this.todos.splice(idx,1);
        },
        ModChild(todo)
        {
            if(todo.value == "")
            {
                alert('不得為空');
                return false;
            }

            if(todo.edit == false)
            {
                todo.edit = true;
            }
            else
            {
                todo.edit = false;
            }
        },
        CompleteChild(todo)
        {
            if(!todo.complete)
            {
                todo.complete = true;
            }
        },
        fliter(iscomplete)
        {
            var list = {};
            for(var index in this.list) {
                if(this.todos[index].complete == iscomplete) {
                    list[index] = this.todos[index];
                }
            }
            return list;
        }
    }
}
</script>
<style>
.linetext
{
    text-decoration:line-through;
}
</style>