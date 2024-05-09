export class CodeManagement {
    /**
     * 上传代码并生成体验版
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/code-management/commit.html
     */
    public commit(input: {
        access_token: string
        template_id: number,
        ext_json: string
        user_version: string,
        user_desc: string
    }) {
        // POST https://api.weixin.qq.com/wxa/commit?access_token=ACCESS_TOKEN 


        return {
            errcode: 0,
            errmsg: 'ok'
        }

    }

    /**
     * 提交代码审核
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/code-management/submitAudit.html
     */
    public submitAudit(input: {
        access_token: string
        item_list: {
            address?: string,
            tag?: string,
            first_class: string,
            second_class: string,
            third_class?: string,
            title?: string,
            first_id: number,
            second_id: number,
            third_id?: number,
        }
        feedback_info?: string
        feedback_stuff?: string
        version_desc?: string
        preview_info?: {
            video_id_list: string[],
            pic_id_list: string[]
        }
        ugc_declare?: {
            scene?: number[]
            method?: number[]
            other_scene_desc?: string
            has_audit_team?: number
            audit_desc?: string
        }
        privacy_api_not_use?: boolean
        order_path?: string
    }) {
        // POST https://api.weixin.qq.com/wxa/submit_audit?access_token=ACCESS_TOKEN 

        return {
            errcode: 0,
            errmsg: 'ok',
            auditid: 123456
        }
    }
}