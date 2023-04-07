import { defineStore } from "pinia"
import {shallowRef} from "vue"
import { iconAttr } from "@/types/storeIcon"
import iconData from "@/utils/demo"
import WwIcons from "@wwcattlewei/icons-vue"
const { icons }: Record<string, any> = WwIcons



const dealSortIcons = () => {
  const sortIconsData: any = []
  iconData.map((val) => {
    if (!sortIconsData[val.categories]) {
      sortIconsData[val.categories] = []
      val.component = shallowRef(icons[val.iconName])
      sortIconsData[val.categories].push(val)
    } else {
      val.component = shallowRef(icons[val.iconName])
      sortIconsData[val.categories].push(val)
    }
  })
  // 进行存储状态中

  return sortIconsData
}
console.log(dealSortIcons());

type IconType = "line" | "solid"
interface UserState {
  iconAttr: iconAttr
  iconData: Record<string, any>
  copyIconData: Record<string, any>
  selectIconType: IconType
  lineNum: number
}
const typeIconsNum = (val: Record<string, any>, type: IconType) => {
  let iconNums = 0
  iconNums += val.reduce((acc: number, val: Record<string, any>) => {
    if (val.type == type) {
      acc += 1
      return acc
    } else {
      return acc
    }
  }, 0)
  return iconNums
  // return useIcons.iconData.filter((val: any) => { return val.type == useIcons.selectIconType }).length || 0
}
export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    iconAttr: {
      color: "#1a1a1a",
      iconComponent: {},
    },
    iconData: dealSortIcons(),
    copyIconData: dealSortIcons(),
    selectIconType: "line",
    lineNum: 0,
  }),
  getters: {
    getIconsAttr(): any {
      return this.iconAttr
    },
    getIcons(): any {
      return this.iconData
    },
  },
  actions: {
    /** 设置图标信息 */
    editIcons(params: iconAttr) {
      Object.assign(this.iconAttr, { ...params })
    },
    resetIcon() {
      Object.assign(this.iconAttr, { color: "#1a1a1a", spin: false })
    },
    setIconData(params: Record<string, any>) {
      // Object.assign(this.iconData, { ...params })
      // Object.assign(this.copyIconData, { ...params })
    },
    selectIconData(inputVal: string) {
      // 筛选的图标
      console.log(this.copyIconData);
      
      const copyData = { ...this.copyIconData }
      for (const key in copyData) {
        copyData[key] = copyData[key].filter((element: Record<string, any>) => {
          return (
            (element.type == this.selectIconType &&
              element.name
                .toString()
                .toLocaleLowerCase()
                .indexOf(inputVal.toLocaleLowerCase()) >= 0) ||
            (element.type == this.selectIconType &&
              element.engliashName
                .toString()
                .toLocaleLowerCase()
                .indexOf(inputVal.toLocaleLowerCase()) >= 0)
          )
        })
      }

      this.iconData = copyData
      console.log(this.iconData)
      // let nums: number = 0
      // // 需要计算搜索出来的 分线性与实线 数目
      // for (const key in copyData) {
      //   console.log(copyData[key])
      //   nums += typeIconsNum(copyData[key], this.selectIconType)
      // }
      // this.lineNum = nums
      // console.log(nums);
    },
    changeIconType(val: IconType) {
      this.selectIconType = val
    },
  },
})
