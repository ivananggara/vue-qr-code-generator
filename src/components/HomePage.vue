<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12" md="3" justify="center" align="center">
        <qrcode-vue :value="value" :size="size" level="H" />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="link"
          label="Masukkan Link"
          hide-details
          outlined
        ></v-text-field>
        <v-btn class="primary mt-4" @click="changeLink">Generate QR Code</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      link: "",
      value: "https://pemilu2024.kpu.go.id/",
      size: 250,
    };
  },
  components: {
    QrcodeVue,
  },
  methods: {
    changeLink() {
      this.value = this.link;
    },
  },
};
</script>