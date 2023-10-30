<template>
  <div class="todos">
    <BaseTitle :pagesTitle="'Todos list'" />
    <BaseInput
      @addTodoItem="addTodoItem"
      @updateTodo="updateTodos"
      :todoItem="todoItem"
      :status="status"
    />
    <todoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :indexTD="index"
      :status="status"
      @item-completed="markCompleted"
      @delete-item="deleteTodoItem"
      @edit-item="editTodoItem"
    />
  </div>
</template>

<script>
import BaseTitle from "@/components/base/BaseTitle.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import TodoItem from "@/components/commonApp/TodoItem.vue";
import { TODOS } from "@/resources/todos";
import { ref } from "vue";
export default {
  name: "TodoList",
  components: { TodoItem, BaseInput, BaseTitle },
  setup() {
    const status = ref(false);
    const todoItem = ref({});
    const indexEditTDD = ref(0);
    const todos = ref(TODOS);
    const markCompleted = (id) => {
      todos.value = todos.value.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    };
    const deleteTodoItem = (id) => {
      todos.value = todos.value.filter((todo) => {
        return todo.id !== id;
      });
    };
    const addTodoItem = (newItem) => {
      if (!newItem.title) {
        alert("please enter data...!");
      } else {
        todos.value.push(newItem);
      }
      status.value = false;
    };
    const editTodoItem = (index) => {
      todoItem.value = todos.value[index];
      indexEditTDD.value = index;
      status.value = true;
    };
    const updateTodos = (valueUpdate) => {
      todos.value[indexEditTDD.value].title = valueUpdate;
      status.value = false;
    };
    return {
      todos,
      markCompleted,
      deleteTodoItem,
      addTodoItem,
      editTodoItem,
      updateTodos,
      todoItem,
      status,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page/todos.scss";
</style>
