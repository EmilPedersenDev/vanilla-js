<template>
  <div class="radio-group">
    <div class="radio" v-for="(option, id) in options" :key="id">
      <input
        type="radio"
        :name="option.name"
        :value="option.value"
        :id="option.value"
        @change="onChange"
      />
      <label :for="options.value">{{ option.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "e-radio",
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>