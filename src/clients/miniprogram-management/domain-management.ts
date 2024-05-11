export class DomainManagement {
    /**
     * 配置小程序服务器域名
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/domain-management/modifyServerDomain.html
     */
    public modifyServerDomain(input: {
        access_token: string
        action: 'add' | 'delete' | 'set' | 'get'
        requestdomain: string[]
        wsrequestdomain: string[]
        uploaddomain: string[]
        downloaddomain: string[]
        udpdomain: string[]
        tcpdomain: string[]
    }) {

        // POST https://api.weixin.qq.com/wxa/modify_domain?access_token=ACCESS_TOKEN 


        return {
            "errcode": 0,
            "errmsg": "ok",
        }
    }
}