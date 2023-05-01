const axios = require('axios');

module.exports = function (context, req) {

    let url = 'https://api.line.me/oauth2/v2.1/token';

    let config = {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    }
                  };

    let grant_type = 'authorization_code';
    let code = context.req.body['code'];
    let redirect_uri ='*********'; //LINE Developersコンソールで設定したコールバック関数をURLエンコードしたもの
    let client_id ='*********'; //LINE Developersコンソール取得したチャネルID
    let client_secret ='*********'; //LINE Developersコンソール取得したチャネルシークレット

    var params = new URLSearchParams();
    params.append('grant_type',grant_type);
    params.append('code',code);
    params.append('redirect_uri',redirect_uri);
    params.append('client_id',client_id);
    params.append('client_secret',client_secret);

    axios.post(url, params, config)
    .then(function (response) {
        context.res.json(response.data);
    })
    .catch(function (error) {
        context.res.json(error);
    });
};