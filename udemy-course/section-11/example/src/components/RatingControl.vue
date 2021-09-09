<template>
  <ul>
    <li :class="{active: modelValue === 'Poor'}"><button type="button" @click="activate('Poor')">Poor</button></li>
    <li :class="{active: modelValue === 'Avarage'}"><button type="button" @click="activate('Avarage')">Avarage</button></li>
    <li :class="{active: modelValue === 'Great'}"><button type="button" @click="activate('Great')">Great</button></li>
  </ul>
</template>

<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
  data() {
    return {
      activeOption: this.modelValue
    };
  },

  methods: {
    activate(option) {
        // console.log('click',option)
      this.activeOption = option;
      this.$emit('update:modelValue',option)
    }
  }
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: non;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
