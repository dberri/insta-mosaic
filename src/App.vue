<template>
  <div id="app">
    <h1>Insta-mosaic</h1>
    <Form @submit="userName = $event" />
    <Mosaic :user="userName" />
  </div>
</template>

<script>
import Form from "@/components/Form";
import Mosaic from "@/components/Mosaic";
export default {
  name: "app",
  components: {
    Mosaic,
    Form
  },
  data() {
    return {
      userName: ""
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lemonada&display=swap");

:root {
  --primary-color: #2c3e50;
}

html * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-color);
}

#app > h1 {
  margin-top: 2rem;
  text-align: center;
  font-family: "Lemonada", cursive;
}
</style>
