<template>
  <div>
          <!-- :icon="{path:'M55.296 -56.375v40.32q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-19.332l-27.648 8.532v25.524q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-34.812q0 -1.116 0.684 -2.034t1.764 -1.278l29.952 -9.216q0.432 -0.144 1.008 -0.144 1.44 0 2.448 1.008t1.008 2.448z'}" -->
    <GmapMap
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 400px;"
    >
      <GmapMarker
      :icon="{
        path: 'M12,2a8,8,0,0,0-8,8c0,5.34,6.15,12,8,12s8-6.66,8-12A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z'
        ,fillColor: '#E9A455' ,fillOpacity: 1,
        scale:1,
        }"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 50.4167, lng: 4.4442 },
      zoom: 7,
      markers: []
      // searchResults: []
    };
  },
  computed: {
    ...mapGetters(["storesSearchInfo"])
  },
  mounted() {
    this.storesSearchInfo.searchResults = this.storesSearchInfo.storeDetails;
    this.addMarker();
  },
  // updated(){
  //   console.log("updated")
  //   this.addMarker();
  // },
  methods: {
    addMarker() {
      console.log(
        "searchResults: ",
        this.storesSearchInfo.searchResults.length
      );
      // if (this.storesSearchInfo.searchResults.length != 0) {
      //   for (var i = 0; i < this.storesSearchInfo.searchResults.length; i++) {
      //     let marker = {
      //       lat: this.storesSearchInfo.searchResults[i].Latitude,
      //       lng: this.storesSearchInfo.searchResults[i].Longitude
      //     };
      //     this.markers.push({ position: marker });
      //   }
      //   // this.center = marker;
      // } else if (this.storesSearchInfo.searchResults.length == 0) {
      for (var j = 0; j < this.storesSearchInfo.searchResults.length; j++) {
        let marker = {
          lat: this.storesSearchInfo.storeDetails[j].Latitude,
          lng: this.storesSearchInfo.storeDetails[j].Longitude
        };
        this.markers.push({ position: marker });
        this.center = marker;
        this.zoom = 8;
      }
      // }
    }
  }
};
</script>
<style scoped>
::v-deep img{
  width: 1rem !important;
  height: 1rem !important;
}
</style>