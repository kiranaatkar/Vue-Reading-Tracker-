<template>
  <section class="comment">
    <p v-show="!showEditComment">{{ comment ? comment : 'No comments yet' }}</p>
    <form @submit="onSubmit" class="add-form" v-show="showEditComment">
      <div class="form-control">
        <input
          type="text"
          v-model="newComment"
          name="newComment"
          placeholder="Enter comment here"
          class="newComment"
        />
      </div>
      <input type="submit" value="Save" class="btn" :disabled="!newComment" />
    </form>
    <i @click="toggleEditComment" class="far fa-edit" v-show="!showEditComment" />
  </section>
</template>

<script>
export default {
  name: 'PaperComment',
  props: {
    comment: String,
  },
  data() {
    return {
      showEditComment: false,
      newComment: this.comment,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('edit-comment', this.newComment);
      this.showEditComment = false;
    },
    toggleEditComment() {
      this.showEditComment = !this.showEditComment;
    },
  },
};
</script>

<style scoped>
p {
  font-size: smaller;
}
.comment {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.newComment {
  width: 100%;
}
.form-control input {
  width: 500px;
  height: 30px;
  margin: 5px;
  padding: 2px 4px;
  font-size: 17px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 5px 10px;
  margin: 2.5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
</style>
