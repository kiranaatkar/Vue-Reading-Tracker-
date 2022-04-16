<template>
  <div
    @dblclick="$emit('toggle-read', paper.DOI)"
    :class="[paper.read ? 'read paper' : 'paper']"
  >
    <h4>{{ paper.title[0] }}</h4>
    <div>
      <span v-for="author in paper.author" :key="`${author.given} ${author.family}`">
        {{
          `${author.given[0]}. ${author.family}${
            author === paper.author[paper.author.length - 1] ? '.' : ', '
          }`
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaperCard',
  props: {
    paper: Object,
  },
  methods: {},
};
</script>

<style scope>
.fas {
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
.paper h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
