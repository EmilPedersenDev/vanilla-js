<template>
  <input type="checkbox" name="approve" id="approve" @change="onChange" />
</template>

<script>
export default {
  name: "e-checkbox",
  methods: {
    onChange(e) {
      this.$emit("change", e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>