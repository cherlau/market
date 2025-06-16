<template>
  <section class="produtos-container">
    {{ produtos }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      produtos: [],
    };
  },
  created() {
    this.getProdutos();
  },
  methods: {
    async getProdutos() {
      const res = await fetch("http://localhost:3000/produto");
      const json = await res.json();
      this.produtos = json;
    },
  },
};
</script>

<style>
</style>