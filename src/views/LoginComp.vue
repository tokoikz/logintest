<template>
    <div class="login">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
                :src="require('../assets/btn_login_base.png')"
                width="200px"
                height="auto"
                @click="login()"
              >
              </v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>

  
<script>

export default {
  name: 'LoginComp',

  data: () => ({
    //
  }),

  methods: {
    login() {
      let response_type = 'code';
        let client_id = '*********'; //取得したチャネルID
        let redirect_uri = '*********'; //設定したコールバック関数をURLエンコードしたもの
        let state = '12345abcde';//一旦ここはテキトー
        let scope = 'profile%20openid';
        let nonce = '09876xyz';//一旦ここはテキトー

        window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=' + response_type + 
                                '&client_id=' + client_id + 
                                '&redirect_uri=' + redirect_uri + 
                                '&state=' + state + 
                                '&scope=' + scope + 
                                '&nonce=' + nonce;
    }
  }
};
</script>
  