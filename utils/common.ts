export const convertLinkImgYoutube = (key: string) => {
    return `https://img.youtube.com/vi/${key}/mqdefault.jpg`
}

export const convertTime = (time: number) => {
    const hour = Math.trunc(time / 60)
    const minute = time % 60

    return `${hour}h${minute}m`
}
