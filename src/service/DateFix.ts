

export const FixDate = (item: string) => {
    const newData = `${item.split("T")[0]} ${item.split("T")[1].split(".")[0]}`
    return newData
}