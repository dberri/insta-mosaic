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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #fffcf8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23ffefdc' fill-opacity='0.55'%3E%3Cpath fill-rule='evenodd' d='M5 3.59L1.46.05.05 1.46 3.59 5 .05 8.54l1.41 1.41L5 6.41l3.54 3.54 1.41-1.41L6.41 5l3.54-3.54L8.54.05 5 3.59zM17 2h24v2H17V2zm0 4h24v2H17V6zM2 17h2v24H2V17zm4 0h2v24H6V17z'/%3E%3C/g%3E%3C/svg%3E");
  color: var(--primary-color);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  min-height: 100vh;
}

#app > h1 {
  font-family: "Lemonada", cursive;
  padding-top: 2rem;
  text-align: center;
}
</style>
