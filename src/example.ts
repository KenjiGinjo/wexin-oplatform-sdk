
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

const authorizationInfo = client.ticketToken.authorizationInfo({
    component_access_token: component_access_token,
    component_appid: '我们自己的后台的', //
    authorization_code: '授权码, 会在授权成功时返回'
})

// 
