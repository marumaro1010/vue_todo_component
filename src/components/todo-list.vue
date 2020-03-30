<template> 
    <div>
        <ul class="listStyle">
            <li v-for="(todo,index) in fliter_list " :index="index" :key="todo.id">
                <div>
                    <input  class="todo_list" v-if="todo.edit" type="text" style="width:300px" v-model="todo.value"/>
                    <label  v-else style="width:410px"><span :class="{ linetext: todo.complete }">{{ todo.value }}</span></label>
                    <div class="btn_action">
                        <button class="btn_pic" @click="ModChild(todo)"><i aria-hidden="true" class="material-icons">create</i></button>
                        <button class="btn_pic" @click="DeleteChild(index)"><i aria-hidden="true" class="material-icons">delete</i></button>
                        <button class="btn_pic" @click="CompleteChild(todo)" v-if="todo.complete == false"><i aria-hidden="true" class="material-icons">done</i></button>
                    </div>
                </div>
            </li>
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
            for(var index in this.list) 
            {
                if(this.todos[index].complete == iscomplete) 
                {
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