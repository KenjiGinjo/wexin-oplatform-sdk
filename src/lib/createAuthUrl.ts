/**
 * 授权链接构建
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Before_Develop/Authorization_Process_Technical_Description.html
 */
export const PC = ({ component_appid, pre_auth_code, redirect_uri, auth_type }: {
    component_appid: string,
    pre_auth_code: string,
    redirect_uri: string,
    auth_type: 1 | 2 | 3 | 4 | 5 | 6 // 2 表示仅展示小程序
}) => {
    const query = `component_appid=${component_appid}&pre_auth_code=${pre_auth_code}&redirect_uri=${redirect_uri}&auth_type=${auth_type}`
    return `https://mp.weixin.qq.com/cgi-bin/componentloginpage?${query}`
}

export const createAuthUrl = { PC }    