<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0]"
        :alt="produto.fotos[0].titulo"
      />
      <p class="preco">{{ produto.preco }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services/api";

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
      api.get('/produto').then((response) => {
        this.produtos = response.data
      })
    },
  },
};
</script>

<style>
</style>