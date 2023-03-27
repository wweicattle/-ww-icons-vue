type status = "add" | "get"

export default function lStorage(
  lsName: string,
  params: Record<string, any>,
  status: status
) {
  if (status === "add") {
    return localStorage.setItem(lsName, JSON.stringify(params))
  } else {
    return JSON.parse(localStorage.getItem(lsName) as any)
  }
}
