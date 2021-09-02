<template>
  <button @click="onClick" :type="type"><slot></slot></button>
</template>

<script>
export default {
  name: "e-button",
  props: {
    type: {
      type: String,
      validator: (val) => {
        return ["submit", "button"].includes(val) > -1;
      },
    },
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>