<template>
    <div></div>
  </template>
  <script lang="ts">
  import { defineComponent, getCurrentInstance } from "vue";
  export default defineComponent({
    name: "TestComponent",
    setup() {
      const { proxy }: any = getCurrentInstance();
  
      //发送ajax请求
      function ajaxTest() {
        proxy.$http
          .get(`/api/text`)
          .then((res: any) => {
            console.log(res);
          })
          .catch((error: any) => {
            console.log(error);
          });
      }
  
      //调用发送请求
      ajaxTest();
    },
  });
  </script>
  <style scoped>
  </style>