<template>
  <div class="form-register">
    <input
      type="text"
      placeholder="nhập công việc mới..."
      v-model="propsTitle"
      class="input-feilt"
    />
    <BaseButton
      v-if="!newStatus"
      @on-click="addItem"
      :nameButton="'Add Todo'"
    />
    <BaseButton v-else @on-click="editItem" :nameButton="'Edit Todo'" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "vue3Addtodo",
  components: { BaseButton },
  props: {
    todoItem: {
      type: Object,
      default: () => {},
    },
    status: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    const propsTitle = ref(props.todoItem.title);
    const newStatus = ref(props.status);

    watch(
      () => props.todoItem,
      (todoItem) => {
        propsTitle.value = todoItem.title;
      }
    );
    watch(
      () => props.status,
      (status) => {
        newStatus.value = status;
      }
    );
    const addItem = () => {
      const newItem = {
        id: uuidv4(),
        title: propsTitle.value,
        completed: false,
      };
      context.emit("addTodoItem", newItem);
      propsTitle.value = "";
    };

    const editItem = () => {
      context.emit("updateTodo", propsTitle.value);
      propsTitle.value = "";
      newStatus.value = false;
    };
    return {
      addItem,
      editItem,
      propsTitle,
      newStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/base-input.scss";
</style>
