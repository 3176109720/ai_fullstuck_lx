<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <test></test>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Test from "../text/text.vue";
export default defineComponent({
  name: "HelloWorld",
  components: {
    Test,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
