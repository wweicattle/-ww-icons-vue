import { defineStore } from "pinia"
import lStorage from "@/utils/storage"

interface ThemeSetting {
  status?: number
  theme?: string
}
export const useTheme = defineStore({
  id: "theme",
  state: (): ThemeSetting => ({
    status: 1,
    theme: "light",
  }),
  getters: {},
  actions: {
    editTheme(): void {
      let htmlDom = document.querySelector("html")
      if (htmlDom?.classList.contains("dark")) {
        htmlDom.classList.remove("dark")
        //修改store和本地的主题
        lStorage("theme", { theme: "light", status: 1 }, "add")
        this.theme = "light"
        this.status = 1
      } else {
        htmlDom?.classList.add("dark")
        lStorage("theme", { theme: "dark", status: 2 }, "add")
        this.theme = "dark"
        this.status = 2
      }
    },
  },
})
