const Jasop = (url, opts = {}) => {
    let params = []

    Object.entries(opts).forEach((i) => {
        if (typeof i[1] === "boolean") params.push(i[0].toString() + "=" + (i[1] === true ? "yes" : "no"))
        else if (!["replace", "title"].includes(i[1])) params.push(i[0].toString() + i[1].toString())
    })

    const windowTitle = opts.title ? opts.title : ""
    const windowReplace = opts.replace === true ? true : false

    return window.open(url, windowTitle, params.toString(), windowReplace)
}

export default {
    Jasop
}
