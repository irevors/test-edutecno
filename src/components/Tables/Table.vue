<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">N° Orden</th>
        <th scope="col">Cliente</th>
        <th scope="col">Fecha Entrega</th>
        <th scope="col" v-if="Object.keys(data[0]).length === 4">Estado</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(d, i) in data" :key="i">
        <th scope="row">{{ d.num_orden }}</th>
        <td>{{ d.cliente }}</td>
        <td>{{ d.fecha_entrega }}</td>
        <td v-if="d?.num_estado">{{ d.num_estado }}</td>

        <td>
          <button type="button" class="btn btn-primary btn-sm">
            Ver Detalle
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["data"],
};
</script>