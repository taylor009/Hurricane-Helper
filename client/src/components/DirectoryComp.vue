<template>
  <b-list-group class="list-group">

    <b-list-group-item class="d-flex justify-content-between align-items-start" v-for="(item, i) in directories" :key="i">
        <div class="contractor-info">
          <div class="contactor-name">{{ item.name }}</div>
          <div class="contractor-phone">{{ item.phone }}</div>
          <div class="contractor-address">{{ item.address }}</div>
          <b-link class="contractor-website">{{ item.website }}</b-link>
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
        name: "Palm Beach Tree Service",
        phone: "(561) 544-7296",
        website: "https://www.palmbeachtreeservice.com/",
        address: "19283 Sabal Lake Dr, Boca Raton, FL 33434"
      },
      {
        name: "All-Pro Electrical and Air Conditioning",
        phone: "(561) 988-0460",
        website: "https://www.allproelectricalandac.com/",
        address: "1181 S Rogers Cir, Boca Raton, FL 33487"
      },
      {
        name: "Dag Plumbing",
        phone: "(561) 999-9065 ",
        website: "https://www.dagplumbing.com/",
        address: "1101 S Rogers Cir Unit 17, Boca Raton, FL 33487"
      },
      {
        name: "Hutter Services & Screen Repairs, Inc.",
        phone: "(561) 274-4949",
        website: "https://www.shutterservices.com/",
        address: "100 SE 2nd St, Delray Beach, FL 33444"
      },
      {
        name: "Alpha Fence & Rail",
        phone: "(561) 738-9966",
        website: "https://www.alpha-fence.com",
        address: "555 W Ocean Ave, Boynton Beach, FL 33426"
      }
    ]

  })
};
</script>

<style scoped>

.contactor-name{
  font-weight: bold;
  /* font-size: 110%; */
  font-size: 1.1em;
}

</style>