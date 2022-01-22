<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    v-if="$route.name !== 'Login'"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Orders' }"
              >Ordenes</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" disabled href="#">Inventario</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" disabled href="#">Profile</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" disabled href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
</style>