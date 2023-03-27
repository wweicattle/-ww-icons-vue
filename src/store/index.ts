import { defineStore } from "pinia"
import {iconAttr} from "@/types/storeIcon"

interface UserState {
  iconAttr: iconAttr
}
export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    iconAttr: {
      color: "#1a1a1a",
      iconComponent:{}
    },
  }),
  getters: {
    getIconsAttr(): any {
      return this.iconAttr
    },
  },
  actions: {
    /** 设置图标信息 */
    editIcons(params: iconAttr) {
      Object.assign(this.iconAttr, { ...params })
    },
    resetIcon(){
      Object.assign(this.iconAttr, { color:"#1a1a1a",spin:false })
    }
  },
})
