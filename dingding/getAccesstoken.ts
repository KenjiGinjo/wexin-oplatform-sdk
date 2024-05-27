// This file is auto-generated, don't edit it
import Util from '@alicloud/tea-util';
import dingtalkoauth2_1_0, * as $dingtalkoauth2_1_0 from '@alicloud/dingtalk/oauth2_1_0';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';


export default class Client {

    /**
     * 使用 Token 初始化账号Client`
     * @return Client
     * @throws Exception
     */
    static createClient(): dingtalkoauth2_1_0 {
        let config = new $OpenApi.Config({});
        config.protocol = "https";
        config.regionId = "central";
        return new dingtalkoauth2_1_0(config);
    }

    static async main(): Promise<void> {
        let client = Client.createClient();
        let getAccessTokenRequest = new $dingtalkoauth2_1_0.GetAccessTokenRequest({
            appKey: "xxx",
            appSecret: "xxx",
        });
        try {
            const a = await client.getAccessToken(getAccessTokenRequest);
            console.log('a', a)
        } catch (err) {
            console.log(err)

        }
    }

}


await Client.main();