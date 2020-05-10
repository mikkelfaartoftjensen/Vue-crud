<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/nav-logo.svg" alt="logo">
      <div id="nav-pages">
      <p>
      <router-link to="/">Home</router-link>
      </p>
      <p>
      <router-link to="/create">Add</router-link>
      </p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  background-image: url("./assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 90%;
  left: 0px;
  right: 0px;
  margin: auto;
}

#nav img {
  width: 20vw;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: orange;
}

#nav-pages {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20vw;
}
section {
  height: 100%;
}
</style>
