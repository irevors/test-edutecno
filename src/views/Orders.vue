<template>
  <!-- breadcrumb -->
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Orders</li>
    </ol>
  </nav>
  <!-- breadcrumb -->
  <h1>orders</h1>
  <OrdersTable :data="ordenes" />
</template>

<script>
import OrdersTable from "@/components/Tables/OrdersTable.vue";

export default {
  components: { OrdersTable },
  computed: {
    ordenes() {
      return this.$store.getters["orders/getOrders"];
    },
  },
  beforeCreate() {
    this.$store.dispatch("orders/getDashboard");
  },
};
</script>

<style>
</style>