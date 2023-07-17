import { defineStore } from 'pinia'
import { shallowRef } from 'vue'
import { iconAttr } from '@/types/storeIcon'
import iconData from '@/utils/demo'
import WwIcons from '@wwcattlewei/icons-vue'
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

type IconType = 'line' | 'solid'
interface UserState {
  iconAttr: iconAttr
  iconData: Record<string, any>
  copyIconData: Record<string, any>
  selectIconType: IconType
  lineNum: number
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    iconAttr: {
      color: '#1a1a1a',
      iconComponent: {}
    },
    iconData: dealSortIcons(),
    copyIconData: dealSortIcons(),
    selectIconType: 'line',
    lineNum: 0
  }),
  getters: {
    getIconsAttr(): any {
      return this.iconAttr
    },
    getIcons(): any {
      return this.iconData
    }
  },
  actions: {
    /** 设置图标信息 */
    editIcons(params: iconAttr) {
      Object.assign(this.iconAttr, {
        ...params
      })
    },
    resetIcon() {
      Object.assign(this.iconAttr, {
        color: '#1a1a1a',
        width: '170px',
        spin: false
      })
    },
    selectIconData(inputVal: string) {
      // 筛选的图标
      const copyData = {
        ...this.copyIconData
      }
      for (const key in copyData) {
        copyData[key] = copyData[key].filter((element: Record<string, any>) => {
          return (
            (element.type == this.selectIconType &&
              element.name.toString().toLocaleLowerCase().indexOf(inputVal.toLocaleLowerCase()) >= 0) ||
            (element.type == this.selectIconType &&
              element.engliashName.toString().toLocaleLowerCase().indexOf(inputVal.toLocaleLowerCase()) >= 0)
          )
        })
      }

      this.iconData = copyData
      console.log(this.iconData)
    },
    changeIconType(val: IconType) {
      this.selectIconType = val
    }
  }
})
