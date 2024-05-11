export class BasicInfoManagement {
    /**
     * 获取基本信息
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/basic-info-management/getAccountBasicInfo.html
     */
    public getAccountBasicInfo(input: {
        access_token: string
    }) {

        // POST https://api.weixin.qq.com/cgi-bin/account/getaccountbasicinfo?access_token=ACCESS_TOKEN 


        return {
            "errcode": 0,
            "errmsg": "ok",
            "appid": "wx355c737061e52e03",
            "account_type": 3,
            "principal_type": 1,
            "principal_name": "深圳市xx计算机系统有限公司",
            "realname_status": 1,
            "wx_verify_info": {
                "qualification_verify": false,
                "naming_verify": false
            },
            "signature_info": {
                "signature": "美味助手",
                "modify_used_count": 0,
                "modify_quota": 5
            },
            "head_image_info": {
                "head_image_url": "http://wx.qlogo.cn/mmhead/Q3auHgzwzM6B72gFBvs0ViaE7RkqsAzp59QeMY0GphWAQiauhcG2sCCA/0",
                "modify_used_count": 0,
                "modify_quota": 5
            },
            "nickname": "美味助手",
            "registered_country": 1017,
            "nickname_info": {
                "nickname": "美味助手",
                "modify_used_count": 2,
                "modify_quota": 2
            },
            "credential": "91440xxxx08461136T",
            "customer_type": 0
        }
    }
}