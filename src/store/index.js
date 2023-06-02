import { defineStore } from 'pinia'
import { reactive } from "vue";
export const useUserStore = defineStore('user', {
    state: () => ({
        id: [],
        amountList: "",
        monthsell: "50000" //月售目标
    }),
    //封装计算属性，有缓存功能
    getters: {
        getMyidList() {
            return this.id
        }
    },
    //编辑业务逻辑
    actions: {
        addid(data) {
            this.id.push(data)
        },
        amountList(data) {
            this.amountList = data
        }
    }
})
