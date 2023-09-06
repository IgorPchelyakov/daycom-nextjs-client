export async function getData(date: string, queryLink: string) {
    const res = await fetch(`${queryLink}/${date}`)
    return res.json()
}