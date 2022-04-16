<template>
  <header>
    <h1>Reading Tracker</h1>
    <MyButton
      @toggle-add-paper="$emit('toggle-add-paper')"
      :text="showAddPaper ? 'Close' : 'Add Paper'"
      :color="showAddPaper ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import MyButton from './Button.vue';
export default {
  name: 'AppHeader',
  props: {
    showAddPaper: Boolean,
  },
  components: {
    MyButton,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
