<template>
  <div class="card C-card" style="width: 30rem">
    <div class="card-body">
      <h5 class="card-title">Login Usuarios</h5>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-12">
          <label for="validationCustom01" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="validationCustom01"
            required
            v-model="user.username"
          />
          <div class="invalid-feedback">Debe ingresar un correo válido</div>
        </div>
        <div class="col-12">
          <label for="validationCustom02" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="validationCustom02"
            required
            v-model="user.password"
          />
          <div class="invalid-feedback">
            Debe ingresar una contraseña válida
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary d-block" @click.prevent="validate()">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { user: { username: "", password: "" } };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/loginUser", this.user);
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    },
    validate() {
      const form = document.querySelector(".needs-validation");
      if (form.checkValidity()) {
        this.login();
      }

      form.classList.add("was-validated");
    },
  },
};
</script>

<style lang="scss" scoped>
.C-card {
  margin: 0 auto;
}
</style>