/** 
 * 验证票据
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/ThirdParty/token/component_verify_ticket.html
*/
export const verfiyTicket = () => {
    return {
        appId: '第三方平台 appid',
        createTime: 52,
        infoType: 'component_verify_ticket',
        componentVerifyTicket: 'ticket',
    }
}