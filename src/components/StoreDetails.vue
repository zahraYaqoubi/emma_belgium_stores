<template>
  <div class="store-details">
    <div class="store-details__item row px-3 pt-0">
      <img class="col-3 p-0" :src="getImgUrl(store.logo)" alt="Store's Logo" />
      <div class="store-details__vertical-line"></div>
      <my-modal class="my-auto"/>
    </div>
    <p class="store-details__item store-details__item_big">{{ store.Address }}</p>
    <div class="store-details__item d-flex align-items-center">
      <i class="material-icons store-details__icon">directions</i>
      <p class="d-inline m-0">
        <u>See in Google Maps</u>
      </p>
    </div>

    <div class="store-details__item store-details__item_bold">
      <p class="m-0">{{ store.OfficeHours }}</p>
      <p class="m-0">{{ store.OfficeHoursWeekend }}</p>
    </div>

    <div class="store-details__item d-flex align-items-center">
      <i class="material-icons store-details__icon">local_phone</i>
      <p class="d-inline m-0">{{ store.Telephone }}</p>
    </div>

    <div class="store-details__item">
      <p class="store-details__item_bold m-0">Mattress available to try:</p>
      <div class="d-flex">
        <div v-for="(mattress, key) of store.Type" :key="key">
          <p class="d-inline">{{ mattress }}</p>
          <p class="d-inline mr-1" v-if="key != (store.Type.length-1)">,</p>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import MyModal from "./Modal.vue";
export default {
  props: ["store"],
  components: {
    MyModal
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  }
};
</script>
<style scoped>
.store-details {
  color: rgb(10, 10, 117);
  text-align: left;
  padding: 8px;
  padding-top: 0px;
}
.store-details__item {
  font-size: 0.7rem;
  padding: 8px;
}
.store-details__item_big {
  font-size: 1rem;
  margin: 0px;
}
.store-details__item_bold {
  font-weight: bold;
}
.store-details__icon {
  font-size: 0.7rem;
  display: inline;
  margin-right: 4px;
}
.store-details__vertical-line {
  border-left: 1px solid rgb(133, 132, 132);
  padding-right: 4px;
  margin-left: 4px;
}
/* .store-details__Try-Buy{
    border: none;
    border-radius: 20px;
    background-color: rgb(233, 164, 85);
    font-size: 0.7rem;
    font-weight: bold;
    padding: 2px;
} */
</style>