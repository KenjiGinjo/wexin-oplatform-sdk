
import { WeixinOplatformClient } from "."
import { createAuthUrl } from "./lib/createAuthUrl"

const client = new WeixinOplatformClient()


// 启动票据推送服务
client.ticketToken.startPushTicket({
    component_appid: '我们自己的后台的', // screenshot/2.png
    component_secret: '我们自己的后台的'
})

// 获取令牌
const { component_access_token } = client.ticketToken.getComponentAccessToken({
    component_appid: '我们自己的后台的',
    component_appsecret: '我们自己的后台的',
    component_verify_ticket: 'startPushTicket之后，腾讯那边会给我们推送的' // screenshot/3.png
})

const { pre_auth_code } = client.ticketToken.getPreAuthCode({ access_token: component_access_token, component_appid: '我们自己的后台的' }) // screenshot/4.png

// 构建授权链接
const authUrl = createAuthUrl.PC({
    component_appid: '我们自己的后台的', // screenshot/1.png
    pre_auth_code: pre_auth_code,
    redirect_uri: 'redirect_uri',
    auth_type: 2
})

// 用户去访问此链接，授权后，会跳转到 redirect_uri，并且会带上授权码

// 获取授权账号 appid 和 调用令牌
const { authorizer_appid, authorizer_access_token } = client.ticketToken.authorizationInfo({
    component_access_token: component_access_token,
    component_appid: '我们自己的后台的', //
    authorization_code: '授权码, 会在授权成功时返回'
})
// 获取小程序基本信息, 检查用户是否具备提交代码的权限（要真实跑一下 commit 看看最低是什么要求，比如小程序标题没有设置之类的），给予对应的提示，给予对应的input form，调用api去修改 免去用户去登录小程序后台的麻烦
const miniprogramInfo = client.miniProgramManagement.basicInfoManagement.getAccountBasicInfo({ access_token: authorizer_access_token })

// 设置小程序业务域名
client.miniProgramManagement.domainManagement.modifyServerDomain({
    access_token: authorizer_access_token,
    action: 'set',
    requestdomain: ['https://api.weixin.qq.com'],
    wsrequestdomain: ['wss://api.weixin.qq.com'],
    uploaddomain: ['https://api.weixin.qq.com'],
    downloaddomain: ['https://api.weixin.qq.com'],
    udpdomain: ['https://api.weixin.qq.com'],
    tcpdomain: ['https://api.weixin.qq.com']
})

// 为客户提交我们的小程序模版 给客户的小程序账号
client.miniProgramManagement.codeManagement.commit({
    access_token: authorizer_access_token,
    template_id: 0,
    ext_json: '这里有说明https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html',
    user_version: '1.0.0',
    user_desc: '这是一个测试版本'
})

const categories = client.miniProgramManagement.categoryManagement.getAllCategoryName({ access_token: authorizer_access_token })

const category = categories[0]
// 然后提交审核
const { auditid } = client.miniProgramManagement.codeManagement.submitAudit({
    access_token: authorizer_access_token,
    item_list: {
        first_class: category.first_class,
        second_class: category.second_class,
        first_id: category.first_id,
        second_id: category.second_id,
    }
})

// 然后查询审核状态
const auditStatus = client.miniProgramManagement.codeManagement.getAuditStatus({
    access_token: authorizer_access_token,
    auditid: auditid
})


if (auditStatus.status === 0) {
    // 给予确认发布按钮
    client.miniProgramManagement.codeManagement.release({
        access_token: authorizer_access_token
    })

} else {
    // 提交审核失败 给用户对应的提示，尽量给予对应的input form，调用api去修改 免去用户去登录小程序后台的麻烦
}