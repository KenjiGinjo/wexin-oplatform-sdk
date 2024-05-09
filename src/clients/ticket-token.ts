export class TicketToken {
    /**
     * 获取预授权码
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/ticket-token/getPreAuthCode.html
     */
    public getPreAuthCode(input: {
        access_token: string
        component_appid: string
    }) {
        // POST https://api.weixin.qq.com/cgi-bin/component/api_create_preauthcode?access_token=ACCESS_TOKEN


        return {
            pre_auth_code: 'pre_auth_code',
            expires_in: 600
        }
    }
    /**
     * 获取令牌
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/ticket-token/getComponentAccessToken.html
     */

    public getComponentAccessToken(input: {
        component_appid: string
        component_appsecret: string
        component_verify_ticket: string
    }) {
        // POST https://api.weixin.qq.com/cgi-bin/component/api_component_token

        return {
            "component_access_token": "61W3mEpU66027wgNZ_MhGHNQDHnFATkDa9-2llqrMBjUwxRSNPbVsMmyD-yq8wZETSoE5NQgecigDrSHkPtIYA",
            "expires_in": 7200
        }


    }
    /**
     * 启动票据推送服务
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/ticket-token/startPushTicket.html
     */

    public startPushTicket(input: {
        component_appid: string
        component_secret: string
    }): void {
        // POST https://api.weixin.qq.com/cgi-bin/component/api_start_push_ticket
    }

    /**
     * 获取授权账号调用令牌
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/ticket-token/getAuthorizerAccessToken.html
     */
    public getAuthorizerAccessToken(input: {
        component_access_token: string
        component_appid: string
        authorizer_appid: string
        authorizer_refresh_token: string
    }) {
        // POST https://api.weixin.qq.com/cgi-bin/component/api_authorizer_token?component_access_token=ACCESS_TOKEN 



        return {
            "authorizer_access_token": "authorizer_access_token",
            "expires_in": 7200,
            "authorizer_refresh_token": "authorizer_refresh_token"
        }
    }

    /**
     * 使用授权码获取授权信息
     * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/ThirdParty/token/authorization_info.html
     */
    public authorizationInfo(input: {
        component_access_token: string
        component_appid: string
        authorization_code: string
    }) {
        // POST https://api.weixin.qq.com/cgi-bin/component/api_query_auth?component_access_token=COMPONENT_ACCESS_TOKEN

        return {
            "authorization_info": {
                "authorizer_appid": "wxf8b4f85f3a794e77",
                "authorizer_access_token": "QXjUqNqfYVH0yBE1iI_7vuN_9gQbpjfK7hYwJ3P7xOa88a89-Aga5x1NMYJyB8G2yKt1KCl0nPC3W9GJzw0Zzq_dBxc8pxIGUNi_bFes0qM",
                "expires_in": 7200,
                "authorizer_refresh_token": "dTo-YCXPL4llX-u1W1pPpnp8Hgm4wpJtlR6iV0doKdY",
                "func_info": [
                    {
                        "funcscope_category": {
                            "id": 1
                        }
                    },
                    {
                        "funcscope_category": {
                            "id": 2
                        }
                    },
                    {
                        "funcscope_category": {
                            "id": 3
                        }
                    }
                ]
            }
        }

    }
}