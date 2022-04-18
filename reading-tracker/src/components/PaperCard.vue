<template>
  <div
    @dblclick="$emit('toggle-read', paper.DOI)"
    :class="[paper.read ? 'read paper' : 'paper']"
  >
    <h4>
      {{ `${paper.title[0]} ${formatDate()}` }}
      <i @click="$emit('delete-paper', paper.DOI)" class="fas fa-times"></i>
    </h4>
    <div class="authors">
      <h5>
        <span v-for="author in paper.author" :key="`${author.given} ${author.family}`">
          {{ formatAuthor(author) }}
        </span>
      </h5>
      <a v-if="getLink()" :href="getLink()" target="_blank">
        <i class="fas fa-link" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaperCard',
  props: {
    paper: Object,
  },
  methods: {
    getLink() {
      const links = this.paper.link;
      const notAllowedTypes = ['text/xml'];
      for (let link of links) {
        if (!notAllowedTypes.includes(link['content-type'])) {
          return link.URL;
        }
      }
      return null;
    },
    formatDate() {
      const parts = this.paper.created['date-parts'];
      return `(${parts[0][0]})`;
    },
    formatAuthor(author) {
      return `${author.given[0]}. ${author.family}${
        author === this.paper.author[this.paper.author.length - 1] ? '.' : ', '
      }`;
    },
  },
};
</script>

<style scope>
.fa-times {
  color: red;
}
.paper {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.paper.read {
  border-left: 5px solid green;
}
.paper h4,
.paper .authors {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>
