<template>
  <div>
    <GmapMap :center="center" :zoom="zoom" style="width:100%;  height: 400px;" :options="mapStyle">
      <GmapMarker
        :icon="{
        path: 'M12,2a8,8,0,0,0-8,8c0,5.34,6.15,12,8,12s8-6.66,8-12A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z'
        ,fillColor: '#E9A455' ,fillOpacity: 1,
        scale:1.5,
        }"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="ClickMarker(m)"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 50.4167, lng: 4.4442 },
      zoom: 7,
      markers: [],
      mapStyle: {
        styles: [
        {elementType: 'geometry', stylers: [{color: '#313f70'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#1a1b5c'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#1a1b5c'}]},
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ffffff'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#375091'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#375091'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#152652'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#152652'}]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#e9a455'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#e9a455'}]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#415791'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
        }
        ]
      }
    };
  },
  computed: {
    searchResults() {
      return this.$store.getters.storesSearchInfo.searchResults;
    }
  },
  watch: {
    searchResults(newValue, oldValue) {
      console.log("old results: ", oldValue.length);
      console.log("new results: ", newValue.length);
      this.addMarker(newValue);
    }
  },
  mounted() {
    this.addMarker(this.searchResults);
  },
  methods: {
    addMarker(updatedResults) {
      this.markers = [];
      for (var j = 0; j < updatedResults.length; j++) {
        let marker = {
          lat: updatedResults[j].Latitude,
          lng: updatedResults[j].Longitude
        };
        this.markers.push({ position: marker });
        this.center = marker;
      }
      if (this.markers.length == 1) this.zoom = 12;
      else this.zoom = 8;
      console.log("searchResults: ", this.searchResults.length);
      console.log("markers: ", this.markers.length);
    },
    ClickMarker(marker) {
      this.center = marker.position;
      console.log("marker.lat: ", marker.position.lat);
      console.log("marker.long: ", marker.position.lng);
      var selectedStore = [];
      for (var i = 0; i < this.searchResults.length; i++) {
        if (
          this.searchResults[i].Latitude == marker.position.lat &&
          this.searchResults[i].Longitude == marker.position.lng
        ) {
          console.log(
            "if in click marker, lat: ",
            this.searchResults[i].Latitude
          );
          selectedStore.push(this.searchResults[i]);
          this.$store.dispatch("setSearchResults", selectedStore);
        }
      }
      if (screen.width < 768) {
        this.$store.dispatch("setSectionList", true);
        this.$store.dispatch("setSectionMap", false);
        // this.showSection.list = true;
        // this.showSection.map = false;
      }
      console.log(
        "searchResults length in click marker: ",
        this.searchResults.length
      );
    }
  }
};
</script>
<style scoped>
</style>