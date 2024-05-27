// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import dingtalkrobot_1_0, * as $dingtalkrobot_1_0 from '@alicloud/dingtalk/robot_1_0';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';


export default class Client {

    /**
     * 使用 Token 初始化账号Client
     * @return Client
     * @throws Exception
     */
    static createClient(): dingtalkrobot_1_0 {
        let config = new $OpenApi.Config({});
        config.protocol = "https";
        config.regionId = "central";
        return new dingtalkrobot_1_0(config);
    }

    static async main(): Promise<void> {
        let client = Client.createClient();
        let batchSendOTOHeaders = new $dingtalkrobot_1_0.BatchSendOTOHeaders({});
        batchSendOTOHeaders.xAcsDingtalkAccessToken = "xxx";
        let batchSendOTORequest = new $dingtalkrobot_1_0.BatchSendOTORequest({
            robotCode: "dingr0en6bzeujm3edam",
            userIds: [
                "023708624029101856",
                "2039122924621381781"
            ],
            msgKey: "sampleMarkdown",
            msgParam: "{\"text\": \"hello text\",\"title\": \"你好 你真可爱\"}",
        });
        try {
            const res = await client.batchSendOTOWithOptions(batchSendOTORequest, batchSendOTOHeaders, new $Util.RuntimeOptions({}));
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

}

await Client.main();