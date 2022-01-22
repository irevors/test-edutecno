<template>
  <div>
    <h1>Home</h1>
    <div class="C-hero">
      <div class="C-hero__img-wrapper">
        <div class="C-hero__img">vitrina</div>
      </div>

      <div class="C-hero__title">Bienvenido</div>
      <div class="C-hero__subtitle">
        Bienvenido al sistema de Ordenes e inventario de ClassicModels
      </div>
    </div>
    <!-- KPI -->
    <div class="row">
      <div class="col-12 col-md-6" v-for="(kpi, i) in kpis" :key="i">
        <Kpi :kpi="kpi" :i="i" />
      </div>
    </div>
    <!-- /KPI -->
    <!-- Tables -->
    <div class="row" v-if="dash.utimas_ordenes">
      <div class="col-12 col-md-6">
        <Table :data="dash['ultimas_devoluciones:']" />
      </div>
      <div class="col-12 col-md-6">
        <Table :data="dash.utimas_ordenes" />
      </div>
    </div>
    <!-- /Tables -->
  </div>
</template>


<script>
import Kpi from "@/components/Home/Kpi.vue";
import Table from "@/components/Tables/Table.vue";

export default {
  name: "Home",
  components: { Kpi, Table },
  computed: {
    kpis() {
      return this.$store.getters["dashboard/getKpis"];
    },
    dash() {
      return this.$store.getters["dashboard/getDashboard"];
    },
  },
  beforeCreate() {
    this.$store.dispatch("dashboard/getDashboard");
  },
};
</script>

<style lang="scss" scoped>
.C-hero {
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  height: 60vh;
  margin-bottom: 1rem;
  &__img-wrapper {
    height: 70%;
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    width: 100%;
    height: 100%;
  }
  &__title,
  &__subtitle {
    margin-top: 0.3rem;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 500;
  }
}
</style>