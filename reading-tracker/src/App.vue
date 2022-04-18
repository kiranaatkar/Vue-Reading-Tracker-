<template>
  <div class="container">
    <AppHeader @toggle-add-paper="toggleAddPaper" :showAddPaper="showAddPaper" />
    <AddPaper v-show="showAddPaper" @add-paper="addPaper" />
    <PaperDisplay
      :papers="papers"
      @toggle-read="toggleRead"
      @delete-paper="deletePaper"
    />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AddPaper from './components/AddPaper.vue';
import PaperDisplay from './components/PaperDisplay.vue';
import dummyPaper from './components/dummyPaper.json';

export default {
  name: 'App',
  components: {
    AppHeader,
    AddPaper,
    PaperDisplay,
  },
  data() {
    return {
      showAddPaper: false,
      papers: [dummyPaper],
    };
  },
  methods: {
    toggleAddPaper() {
      this.showAddPaper = !this.showAddPaper;
    },
    addPaper(paperObj) {
      this.showAddPaper = false;
      this.papers.unshift({ ...paperObj, read: false });
    },
    deletePaper(doi) {
      if (confirm('Are you sure?')) {
        this.papers = this.papers.filter((p) => {
          return p.DOI !== doi;
        });
      }
    },
    toggleRead(doi) {
      const paperIndex = this.papers.findIndex((p) => p.DOI === doi);
      this.papers[paperIndex].read = !this.papers[paperIndex].read;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 500px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
