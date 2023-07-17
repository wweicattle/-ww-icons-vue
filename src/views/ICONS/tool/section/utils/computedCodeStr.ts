import { iconAttr } from '@/types/storeIcon'

export default function computeCodeName(storeAttrs: iconAttr) {
  if (!storeAttrs) return
  const attrValues: iconAttr | any = {
    ...storeAttrs
  }
  const attAttrs = ['color', 'spin', 'width']
  let attrStr = ''
  attAttrs.forEach((element) => {
    if (attrValues[element] && element === 'spin') {
      attrStr += ` spin `
      return
    }
    if (attrValues[element]) {
      attrStr += `${element}='${attrValues[element]}' `
    }
  })
  if (!attrValues['width']) {
    attrStr += `width='170px' `
  }
  return `<${attrValues.iconComponent.__name} ${attrStr}></${attrValues.iconComponent.__name}>`
}
