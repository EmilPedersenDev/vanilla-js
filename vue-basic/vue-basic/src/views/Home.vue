<template>
  <div class="home">
    <form @submit.prevent="submit">
      <h1>User</h1>
      <div class="form-group name">
        <label for="name">Nickname</label>
        <e-input v-model="model.nickname" />
      </div>
      <div class="form-group radio">
        <e-radio :options="options" v-model="model.age" />
      </div>
      <div class="form-group select">
        <e-select :items="countries" v-model="model.country" />
      </div>
      <div class="form-group checkbox">
        <label for="approve">Do you accept the terms?</label>
        <e-checkbox @change="onAcceptTerms" />
      </div>
      <div class="form-group">
        <e-button type="submit">Submit</e-button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      model: {
        nickname: "",
        country: "",
        age: "",
        acceptedTerms: false,
      },
      countries: ["Sweden", "USA", "Russia", "Denmark"],
      options: [
        { id: 1, name: "age", value: "28" },
        { id: 2, name: "age", value: "32" },
        { id: 3, name: "age", value: "34" },
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.model);
    },

    onAcceptTerms(e) {
      this.model.acceptedTerms = e;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  position: relative;
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0px 0px 20px 2px gray;
    padding: 20px;
    .form-group {
      margin: 20px 0;
      &.name {
        position: relative;
        input {
          width: 100%;
        }
        label {
          left: 0;
        }
      }
    }
  }
}
</style>
