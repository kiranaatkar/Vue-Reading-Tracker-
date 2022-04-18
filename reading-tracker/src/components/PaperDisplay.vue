<template>
  <div>
    <h2>papers</h2>
    <div v-for="paper in papers" :key="paper.DOI">
      <PaperCard
        class="paper"
        :paper="paper"
        @toggle-read="$emit('toggle-read', paper.DOI)"
        @delete-paper="$emit('delete-paper', paper.DOI)"
        @edit-comment="editComment"
      />
    </div>
  </div>
</template>

<script>
import PaperCard from './PaperCard.vue';
export default {
  name: 'PaperDisplay',
  props: {
    papers: Array,
  },
  components: {
    PaperCard,
  },
  methods: {
    editComment(newComment, doi) {
      this.$emit('edit-comment', newComment, doi);
    },
  },
};
</script>

<style scoped>
.paper {
  margin: 20px;
}
</style>
