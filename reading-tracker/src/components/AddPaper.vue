<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>DOI</label>
      <input type="text" v-model="doi" name="doi" placeholder="Enter paper doi here" />
    </div>

    <input type="submit" value="Save Paper" class="btn btn-block" :disabled="!doi" />
  </form>
</template>

<script>
import Networking from './Networking.js';
const myApi = new Networking();

export default {
  name: 'AddPaper',
  data() {
    return {
      doi: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.fetchMetaData(this.doi);
    },

    async fetchMetaData(doi) {
      const data = await myApi.getMetaData(doi);
      if (!data) {
        // Handle unfound paper here
      } else {
        this.$emit('add-paper', { ...data.message });
        this.doi = '';
      }
    },
  },
};
</script>

<style scoped>
.btn-block {
  display: block;
  width: 100%;
}
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>
