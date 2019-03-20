const Jasop = (url, opts = {}) => {
    // Parameters storage
    let params = []

    // For each option entry
    Object.entries(opts).forEach((i) => {
        // If entry value is not in array
        if (!["replace", "title"].includes(i[0])) {
            // If entry value is boolean
            if (typeof i[1] === "boolean") params.push(i[0].toString() + "=" + (i[1] === true ? "yes" : "no"))
            // If entry value is not boolean
            else params.push(i[0].toString() + "=" + i[1].toString())
        }
    })

    // Window title
    const windowTitle = opts.title || ""

    // History behaviour
    const windowReplace = opts.replace === true

    // Return window.open function
    return window.open(url, windowTitle, params.toString(), windowReplace)
}

export default {
    Jasop
}
