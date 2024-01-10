<template>
    <ul>
        <li v-for="todo in todos" ; key="todolist">
           {{ todolist.text }} 
        </li>
    </ul>
</template>

<script setup>
import { useTodosStore } from '../store/todolist'

const { count } = useTodosStore()
</script>

<style scoped></style>