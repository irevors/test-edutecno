<template>
  <div class="card">
    <div class="C-kpi">
      <div
        :id="'chartContainer' + i"
        style="height: 60px; width: 60px"
        class="C-kpi__chart"
      ></div>
      <div class="C-kpi__body">
        <h6 class="C-kpi__title">{{ kpi.nombre }}</h6>
        <div class="C-kpi__stats-wrapper">
          <p class="C-kpi__stat">{{ dataPoints[0].y }}</p>
          <p class="C-kpi__desc">{{ dataPoints[1].y }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as CanvasJS from "@/vendor/canvasjs.min.js";

export default {
  props: ["kpi", "i"],
  computed: {
    dataPoints() {
      return [
        {
          y: this.kpi?.entregadas ? this.kpi?.entregadas : this.kpi?.totales,
          color: "#218340",
        },
        {
          y: this.kpi?.pendientes ? this.kpi?.pendientes : this.kpi?.atrasadas,
          color: "#FFF",
        },
      ];
    },
  },
  data() {
    return {
      chartOptions: {
        theme: "light2",
        toolTip: {
          enabled: false,
        },
        data: [
          {
            type: "doughnut",

            showInLegend: false,
          },
        ],
        dataPoints: this.dataPoints,
      },
      chart: null,
    };
  },

  mounted: function () {
    this.chart = new CanvasJS.Chart(
      `chartContainer${this.i}`,
      this.chartOptions
    );
    this.chart.render();
  },
};
</script>

<style lang="scss" scoped>
.C-kpi {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title,
  &__stat {
    font-size: 1.1rem;
    font-weight: 600;
  }
  &__stat {
    font-size: 1.5rem;
  }
  &__stat,
  &__desc {
    margin: 0;
    text-align: center;
  }
}
</style>