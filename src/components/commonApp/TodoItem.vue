<template>
  <div class="todo-item">
    <div class="todo-item-select">
      <input
        type="checkbox"
        :id="todo.id"
        :checked="todo.completed"
        @change="markItemCompleted"
      />
      <label
        class="todo-item-title"
        :class="{ 'is-completed': todo.completed, 'edit-label': newStatus }"
        :for="todo.id"
        >{{ todo.title }}</label
      >
    </div>
    <div class="todo-item-button">
      <button
        class="btn btn-delete"
        :disabled="!todo.completed || newStatus"
        @click="deleteTodoItem"
      >
        Delete
      </button>
      <button
        class="btn btn-edit"
        :disabled="todo.completed"
        @click="editTodoItem"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: [Array, Object],
      default: () => {},
    },
    indexTD: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const newStatus = ref(props.status);
    watch(
      () => props.status,
      (status) => {
        newStatus.value = status;
      }
    );
    const markItemCompleted = () => {
      context.emit("item-completed", props.todo.id);
    };
    const deleteTodoItem = () => {
      context.emit("delete-item", props.todo.id);
    };
    const editTodoItem = () => {
      context.emit("edit-item", props.indexTD);

    };
    return {
      markItemCompleted,
      deleteTodoItem,
      editTodoItem,
      newStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commonApp/todo-item.scss";
</style>
