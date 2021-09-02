<template>
  <select name="country" id="country" @input="onInput">
    <option value selected disabled>--Select Country--</option>
    <option v-for="(item, id) in items" :key="id" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: "e-select",
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    onInput(e) {
      console.log(e);
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>