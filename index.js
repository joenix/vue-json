import vueJson from "./src/index.vue";

export default {
  install(Vue) {
    Vue.component("vue-json", vueJson);
  }
};
