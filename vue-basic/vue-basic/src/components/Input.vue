<template>
  <input
    type="text"
    placeholder="Name"
    name="name"
    id="name"
    :value="value"
    @input="onInput"
  />
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>