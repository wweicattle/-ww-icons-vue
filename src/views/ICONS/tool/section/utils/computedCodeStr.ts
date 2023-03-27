import { iconAttr } from "@/types/storeIcon"

export default function computeCodeName(storeAttrs: iconAttr) {
  if (!storeAttrs) return
  const attrValues: iconAttr | any = { ...storeAttrs }
  console.log(attrValues)
  const attAttrs = ["color", "spin", "width"]
  let attrStr = ""

  // const attArr=[{name:'color',value:color}]
  attAttrs.forEach((element) => {
    if (attrValues[element] && element === "spin") {
      attrStr += ` spin `
      return
    }
    if (attrValues[element]) {
      attrStr += `${element}='${attrValues[element]}' `
    }
  })
  return `<${attrValues.iconComponent.__name} ${attrStr}></${attrValues.iconComponent.__name}>`
}
