<template>
  <b-list-group class="list-group">

    <b-list-group-item class="d-flex justify-content-between align-items-top" v-for="(item, i) in directories" :key="i">
        <div class="contractor-info">
          <div class="contactor-name">{{ item.name }}</div>
          <div class="contractor-phone">{{ item.phone }}</div>
          <div class="contractor-website">{{ item.website }}</div>
          <div class="contractor-address">{{ item.address }}</div>
        </div>
        <div>
          <b-button variant="danger">Add to Call</b-button>
        </div>
    </b-list-group-item>

</b-list-group>
</template>

<script>
export default {

  data: () =>({

    directories : [
      {
        name: "Blues Brothers Roofing Company",
        phone: "(561) 361-6378",
        website: "https://www.bluesbrothersroofing.com/",
        address: "4260 NW 1st Ave #47, Boca Raton, FL 33431"
      },
      {
        name: "Billy",
        phone: "999-999-9999",
        website: "johnny@fencing.com",
        address: "123 Hillsberry Dr., Boca Raton, FL"
      },
      {
        name: "Sally",
        phone: "999-999-9999",
        website: "johnny@fencing.com",
        address: "123 Hillsberry Dr., Boca Raton, FL"
      },
      {
        name: "Becky",
        phone: "999-999-9999",
        website: "johnny@fencing.com",
        address: "123 Hillsberry Dr., Boca Raton, FL"
      }
    ]

  })
};
</script>

<style scoped>

</style>