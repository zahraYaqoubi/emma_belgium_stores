<template>
  <div class="footer">
    <div class="footer__list" v-if="showSection.map" @click="ShowList">
      <i class="material-icons my-auto">format_list_bulleted</i>
      <p class="mx-1 my-auto">Show list</p>
    </div>
    <div class="footer__map" v-if="showSection.list" @click="ShowMap">
      <i class="material-icons footer__map-icon">place</i>
      <p class="mx-1 my-auto">Show map</p>
    </div>
    <div class="row footer__show-brands">
      <div
        class="col-4 my-auto"
        v-for="(logo, key) of logosList"
        :key="key"
      >
        <img class="footer__brands-img" :src="getImgUrl(logo)" alt="Stores' Logos" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      logosList: []
    };
  },
  computed: {
    ...mapGetters(["storesSearchInfo", "showSection"])
  },
  mounted() {
    for (var i = 0; i < 3 && i < this.storesSearchInfo.storeDetails.length; i++) {
      this.logosList.push(this.storesSearchInfo.storeDetails[i].logo);
    }
    console.log("length: ",this.storesSearchInfo.storeDetails.length)
    console.log("logos: ", JSON.stringify(this.logosList));
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    ShowList() {
      this.showSection.list = true;
      this.showSection.map = false;
    },
    ShowMap() {
      this.showSection.map = true;
      this.showSection.list = false;
    }
  }
};
</script>
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(255, 251, 241);
  color: rgb(10, 10, 117);
  text-align: center;
  box-shadow: 0 8px 6px 8px;
  padding: 16px;
  font-weight: bold;
  font-size: 0.8rem;
  height: 50px;
}
.footer__list,
.footer__map {
  display: flex;
}
.footer__list {
  /* display: none; */
}
.footer__map-icon {
  display: flex;
  color: rgb(233, 164, 85);
  margin-top: auto;
  margin-bottom: auto;
  font-size: 20px;
}
.footer__show-brands {
  display: none;
}
.footer__brands-img{
    padding: 0px;
    height: 1.5rem;
}
@media (min-width: 768px) {
  .footer__show-brands {
    display: flex;
  }
  .footer__list,
  .footer__map {
    display: none;
  }
}
</style>