<template>
  <div>
    <!-- Button to Open the Modal -->
    <button
      class="btn TryBuy-btn py-0"
      type="button"
      data-toggle="modal"
      data-target="#myModal"
    >
      <p class="d-inline m-0 px-2">Try & Buy</p>
      <i class="material-icons TryBuy-btn__icon">info</i>
    </button>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header p-2 border-0">
            <button type="button" class="close btn" data-dismiss="modal">
              <i class="material-icons">clear</i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="modal-body px-4 py-0">
            <div class="d-flex mb-3">
              <div class="TryBuy-btn">
                <p class="m-0 px-2">Try & Buy</p>
              </div>
              <h6 class="modal-text">Stores</h6>
            </div>
            <p>Try out the Emma mattress at stores with this label. Please see the store description to find out which models are available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.modal-content{
    border-radius: 0.5rem;
}
.modal{
    padding: 16px !important;
}
.TryBuy-btn__icon {
  font-size: 0.7rem;
  display: inline;
  margin-right: 4px;
  color: rgb(10, 10, 117);
}
.TryBuy-btn {
  border: none;
  border-radius: 20px;
  background-color: rgb(233, 164, 85);
  font-size: 0.7rem;
  font-weight: bold;
  padding-right: 2px;
  padding-left: 2px;
  display: flex;
  align-items: center;
}
.modal-text {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
  font-weight: bold;
}
.btn:focus, .btn:active {
  outline: none !important;
  box-shadow: none !important;
}
.modal.show .modal-dialog {
    -webkit-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
    top: 50%;
    margin: 0 auto;
}
</style>