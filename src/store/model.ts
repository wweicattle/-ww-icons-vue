import { defineStore } from "pinia"

type ModelType = "left" | "right"
export const useModel = defineStore({
  id: "Model",
  state: () => ({
    model: "left",
  }),
  getters: {
    getIconsAttr(): any {
      return this.model
    },
  },
  actions: {
    /** 设置图标信息 */
    editModel(model: ModelType) {
      this.model = model
    },
  },
})
