<template>
  <div class="map row">
    <div class="col col-md-3 map__details-list pr-0" v-if="showSection.list">
      <p class="map__list-title">Stores near you</p>
      <hr class="mt-0 mb-4 mx-2" />
      <div v-for="(store, key) of storesSearchInfo.storeDetails" :key="key">
        <store-details :store="store" />
      </div>
    </div>
    <!-- The div to hold the map -->
    <div id="map" class="col col-md-9" v-if="showSection.map">
      <google-map />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StoreDetails from "./StoreDetails.vue";
import GoogleMap from "./GoogleMap.vue";

export default {
  data() {
    return {
      // map: null,
      // mapCenter: { lat: 52.632469, lng: -1.689423 }
    };
  },
  computed: {
    ...mapGetters(["storesSearchInfo", "showSection"])
  },
  mounted() {
  },
  methods: {
  },
  components: {
    StoreDetails,
    GoogleMap
  }
};
</script>
<style scoped>
.map {
  margin-bottom: 50px;
}
.map__list-title {
  margin: 0px;
  padding: 16px;
  font-weight: bold;
  color: rgb(10, 10, 117);
  display: none;
}
@media (min-width: 768px) {
  .map__list-title {
    display: block;
  }
}
</style>