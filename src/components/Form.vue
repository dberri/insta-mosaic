<template>
  <form @submit.prevent="$emit('submit', userName)" class="Form">
    <input
      type="text"
      v-model="userName"
      placeholder="username"
      class="Form-input"
    />
    <button type="submit" class="Form-submitButton">
      Check out profile
    </button>
  </form>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      userName: ""
    };
  }
};
</script>

<style>
.Form {
  margin: 3rem;
  text-align: center;
}

.Form-input {
  border: 2px solid #2c3e50;
  border-right: none;
  color: #2c3e50;
  padding: 10px 15px;
  font-size: 0.85rem;
  font-weight: bold;
}

.Form-submitButton {
  background-color: #fff;
  box-shadow: none;
  cursor: pointer;
  border: 2px solid #2c3e50;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 0.85rem;
  transition: background-color 0.15s linear, color 0.15s linear;
}

.Form-submitButton:hover {
  color: #fff;
  background-color: #2c3e50;
}
</style>
