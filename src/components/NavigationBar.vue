<template>
  <header class="container">
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
      <button
        class="navbar-toggler border-0 p-0 btn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <p class="navbar-brand navbarــelements my-0">Emma</p>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <dropdown :close-on-click="true" class="nav-item">
            <template slot="btn" class="nav-item__text">Mattresses</template>
            <template slot="body">
              <div>
                <a class="nav-item__text" href="#">Emma Air</a>
              </div>
              <div>
                <a class="nav-item__text" href="#">Emma Original</a>
              </div>
              <div>
                <a class="nav-item__text" href="#">Emma Hybrid</a>
              </div>
            </template>
          </dropdown>
          <dropdown :close-on-click="true" class="nav-item">
            <template slot="btn" class="nav-item__text">Accessories</template>
            <template slot="body">
              <div>
                <a class="nav-item__text" href="#">Mattress</a>
              </div>
              <div>
                <a class="nav-item__text" href="#">Pillow</a>
              </div>
              <div>
                <a class="nav-item__text" href="#">Quilt</a>
              </div>
              <div>
                <a class="nav-item__text" href="#">Sheet</a>
              </div>
            </template>
          </dropdown>
          <li class="nav-item">
            <a class="nav-link nav-item__text" href="#">Bedframes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-item__text" href="#">Bundles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-item__text" href="#">Kids</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-item__text" href="#">Dogs</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <dropdown :close-on-click="true" class="nav-item__text_small">
            <template slot="btn">{{languages.selected}}</template>
            <template slot="body">
              <div class="nav-item" v-for="(language, i) of languages.language" :key="i">
                <p
                  class="nav-item__text nav-item__text_small"
                  @click="SelectLanguage(language)"
                >{{language}}</p>
              </div>
            </template>
          </dropdown>
          <li class="nav-item">
            <a class="nav-link nav-item__text nav-item__text_small" href="#">Awards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-item__text nav-item__text_small" href="#">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-item__text nav-item__text_small" href="#">Help</a>
          </li>
        </ul>
      </div>
      <div class="navbarــelements navbarــelements_small">
        <i class="fas fa-shopping-cart d-inline fa-xs"></i>
        <p class="d-none d-md-inline ml-1">Cart</p>
      </div>
    </nav>
  </header>
</template>
<script>
import Dropdown from "bp-vuejs-dropdown";

export default {
  data() {
    return {
      languages: {
        language: ["English", "Arabic", "Spanish", "German"],
        selected: "English"
      }
    };
  },
  methods: {
    SelectLanguage(language) {
      this.languages.selected = language;
    }
  },
  components: { Dropdown }
};
</script>
<style scoped>
.navbar {
  /* height: 100%; */
  width: 100%;
  background-color: rgb(255, 251, 241);
}
::v-deep .bp-dropdown__icon {
  margin-left: auto;
}
::v-deep .bp-dropdown__btn {
  width: 100%;
  border: none;
  padding: 10px;
}
.dropdown__btn_small {
  font-size: 0.5rem;
  padding: 8px;
}
.nav-item__text_small {
  font-size: 0.5rem;
}
::v-deep .bp-dropdown {
  /* background-color: #fff; */
  background-color: rgb(255, 251, 241);
  margin-top: auto;
  margin-bottom: auto;
  border: none;
  font-size: 0.7rem;
  color: rgb(10, 10, 117);
}
/* .navbar {
  padding-bottom: 0px;
  padding-top: 0px;
} */
.nav-item {
  margin-top: auto;
  margin-bottom: auto;
}
.nav-item__text {
  color: rgb(10, 10, 117) !important;
  font-size: 0.7rem;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
}
.nav-item__text_small {
  font-size: 0.5rem;
}
.navbarــelements {
  font-family: "Eagle Lake", cursive;
  color: rgb(10, 10, 117) !important;
  font-size: 1.5rem;
}
.navbar-collapse {
  background-color: rgb(255, 251, 241);
}
.btn:focus, .btn:active {
  outline: none !important;
  box-shadow: none !important;
}
@media (min-width: 768px) {
  .navbarــelements_small {
    font-size: 0.5rem;
  }
}
</style>