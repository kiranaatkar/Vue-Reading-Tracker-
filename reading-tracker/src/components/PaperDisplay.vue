<template>
  <div>
    <h2>papers</h2>
    <div v-for="paper in papers" :key="paper.DOI">
      <PaperCard
        :paper="paper"
        @toggle-read="$emit('toggle-read', paper.DOI)"
        @delete-paper="$emit('delete-paper', paper.DOI)"
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
};
</script>
