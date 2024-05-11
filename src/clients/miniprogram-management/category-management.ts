export class CategoryManagement {
    /**
     * 获取类目名称信息
     * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/category-management/getAllCategoryName.html
     */
    public getAllCategoryName(input: {
        access_token: string
    }) {

        // GET https://api.weixin.qq.com/wxa/get_category?access_token=ACCESS_TOKEN 



        const response = {
            "errcode": 0,
            "errmsg": "ok",
            "category_list": [
                {
                    "first_class": "工具",
                    "second_class": "备忘录",
                    "first_id": 1,
                    "second_id": 2,
                },
                {
                    "first_class": "教育",
                    "second_class": "学历教育",
                    "third_class": "高等",
                    "first_id": 3,
                    "second_id": 4,
                    "third_id": 5,
                }
            ]
        }



        return response.category_list
    }
}