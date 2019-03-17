const Jasop = (url, opts = {}) => {
    // Parameters storage
    let params = []

    // For each option entry
    Object.entries(opts).forEach((i) => {
        // If entry value is boolean
        if (typeof i[1] === "boolean") params.push(i[0].toString() + "=" + (i[1] === true ? "yes" : "no"))
        // If entry value is not in array
        else if (!["replace", "title"].includes(i[1])) params.push(i[0].toString() + i[1].toString())
    })

    // Window title
    const windowTitle = opts.title ? opts.title : ""

    // History behaviour
    const windowReplace = opts.replace === true ? true : false

    // Return window.open function
    return window.open(url, windowTitle, params.toString(), windowReplace)
}

export default {
    Jasop
}
