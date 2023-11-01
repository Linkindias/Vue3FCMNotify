<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div class="container">
    <div>
      <header>
        <h1>Header</h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/fcmToken">Token</RouterLink>
        </nav>
      </header>
    </div>
    <div><RouterView /></div>
  <div>
    <footer>
      <h1>footer</h1>
    </footer>
  </div>
</div>
</template>

<style scoped>

.container {
       display: flex;
       flex-direction: column; /* row | row-reverse | column | column-reverse */
       flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
       justify-content: center; /* flex-start | flex-end | center | space-between | space-around */
       align-items: flex-start; /* flex-start | flex-end | center | baseline | stretch */
       align-content: center; /* flex-start | flex-end | center | space-between | space-around | stretch */ 
}
div {
  border: 1px solid;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
