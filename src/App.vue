<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">HOME</v-btn>
        <v-btn text to="/about">ABOUT</v-btn>
        <v-btn text to="/login">LOGIN</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary" dark app>
      Vue LINEログイン
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>