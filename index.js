"use strict"

const _ = require("lodash")

module.exports = (url, options = {}) => {
    const opts = _
        .chain(options)
        .pickBy((_value, key) => !_.includes(["replace", "title"], key))
        .transform((obj, value, key) => {
            const val = (() => {
                if (_.isBoolean(value)) return value === true ? "yes" : "no"
                return _.toString(value)
            })()
            obj[key] = val
            if (key === "left") obj.screenX = val
            if (key === "top") obj.screenY = val
            if (_.includes(["centerscreen", "dialog"], "key")) opts.chrome = "yes"
            if (key === "personalbar") obj.directories = val
            if (key === "minimizable") obj.dialog = "yes"
            if (key === "fullscreen") {
                obj.height = window.screen.availHeight
                obj.width = window.screen.availWidth
            }
        }, {})
        .entries()
        .map(([key, value]) => `${key}=${value}`)
        .join(",")
        .value()

    const title = options.title || ""

    const replace = options.replace === true

    return window.open(url, title, opts, replace)
}
