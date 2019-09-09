<template>
  <div class="vue-json-container">
    <div class="vue-json"></div>
    <div class="vue-json-source" v-if="options.source">{{ source }}</div>
  </div>
</template>

<script>
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";

export default {
  props: {
    source: {
      type: [Object],
      default() {
        return {};
      }
    },
    options: {
      type: [Object],
      default() {
        return {
          source: false
        };
      }
    }
  },
  data() {
    return {
      dom: null,
      editor: null
    };
  },
  watch: {
    source(data) {
      this.update(data);
    }
  },
  methods: {
    get() {
      this.editor.get();
    },
    set(data) {
      this.editor.set(data);
    },
    update(data) {
      this.editor.update(data);
    }
  },
  mounted() {
    // Get Dom
    this.dom = document.querySelector(".vue-json");
    // Init Editor
    this.editor = new JSONEditor(this.dom, this.options);
    // Set Data Source
    this.set(this.source);
  }
};
</script>

<style lang="less">
.vue-json {
}
</style>
