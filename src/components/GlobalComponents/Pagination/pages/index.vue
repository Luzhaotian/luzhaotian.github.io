<script setup>
// import { computed } from "vue";
// defineOptions({
//   name: "Pagination"
// });
// const emit = defineEmits(["update:page", "update:size"]);
// const prop = defineProps({
//   page: Number,
//   size: Number
// });

// const currentPage = computed({
//   get: () => prop.page,
//   set: val => emit("update:page", val)
// });

// const pageSize = computed({
//   get: () => prop.size,
//   set: val => emit("update:size", val)
// });
const currentPage = defineModel("page");
const pageSize = defineModel("size");
</script>
<template>
  <el-pagination
    v-bind="$props"
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    small
  />
</template>
