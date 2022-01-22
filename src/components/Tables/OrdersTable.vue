<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">N° Orden</th>
        <th scope="col">Cliente</th>
        <th scope="col">Monto Orden</th>
        <th scope="col">Cant. Productos</th>
        <th scope="col">Fecha Entrega</th>
        <th scope="col">Avance Preparación</th>
        <th scope="col">Estado</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(d, i) in data['ordenes:']" :key="i">
        <th scope="row">{{ d.avance_preparacion }}</th>
        <th scope="row">{{ d.cliente }}</th>
        <th scope="row">{{ d.monto }}</th>
        <th scope="row">{{ d.cant_productos }}</th>
        <th scope="row">{{ d.fecha_entrega }}</th>
        <th scope="row">{{ d.estado }}</th>

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