import ky from 'ky'

const accessToken = "360804eb4f5734898783a22a0807db1b"

/**
 * 获取员工人数
 * https://open.dingtalk.com/document/isvapp/obtain-the-number-of-employees-v2
 */
const getUserCount = async () => {
    const res = await ky.post(`https://oapi.dingtalk.com/topapi/user/count?access_token=${accessToken}`, {
        json: {
            only_active: true
        }
    }).json()
    console.log(res)
}

/**
 * 获取部门列表
 * https://open.dingtalk.com/document/orgapp/obtain-the-department-list-v2?spm=ding_open_doc.document.0.0.6d127fa5adJjm7
 */
const getDepartmentListsub = async () => {
    const res = await ky.post(`https://oapi.dingtalk.com/topapi/v2/department/listsub?access_token=${accessToken}`, {
        json: {
            only_active: true
        }
    }).json()
    console.log(res)
}
/**
 * 获取部门用户userid列表
 * https://open.dingtalk.com/document/isvapp/query-the-list-of-department-userids
 */
const getUserListId = async () => {
    const res = await ky.post(`https://oapi.dingtalk.com/topapi/user/listid?access_token=${accessToken}`, {
        json: {
            dept_id: 113986055
        }
    }).json()
    console.log(res)
}
// getUserListId()

/**
 * 查询用户详情
 * https://open.dingtalk.com/document/isvapp/query-user-details
 */
const getUserInfo = async () => {
    const res = await ky.post(`https://oapi.dingtalk.com/topapi/v2/user/get?access_token=${accessToken}`, {
        json: {
            userid: "2039122924621381781"
        }
    }).json()
    console.log(res)
}
// getUserInfo()
