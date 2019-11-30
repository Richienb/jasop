/**
 * A Uniform Resource Locator (URL). See [URL - Wikipedia](https://en.wikipedia.org/wiki/URL).
*/
declare type url = string

declare interface Options {
    /**
     * Specifies the distance the new window is placed from the left side of the work area for applications of the user's operating system to the leftmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen.
    */
    left: number,

    /**
     * Specifies the distance the new window is placed from the top side of the work area for applications of the user's operating system to the topmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen.
    */
    top: number,

    /**
     * Specifies the height of the content area, viewing area of the new secondary window in pixels. The height value includes the height of the horizontal scrollbar if present. The minimum required value is 100.
    */
    height: number,

    /**
     * Specifies the width of the content area, viewing area of the new secondary window in pixels. The width value includes the width of the vertical scrollbar if present. The width value does not include the sidebar if it is expanded. The minimum required value is 100.
    */
    width: number,

    /**
     * Centers the window in relation to its parent's size and position.
    */
    centerscreen: boolean,

    /**
     * Specifies the height of the whole browser window in pixels. This outerHeight value includes any/all present toolbar, window horizontal scrollbar (if present) and top and bottom window resizing borders. Minimal required value is 100.
     *
     * Note: since titlebar is always rendered, then requesting outerHeight=100 will make the innerHeight of the browser window under the minimal 100 pixels.
    */
    outerHeight: number,

    /**
     * Specifies the width of the whole browser window in pixels. This outerWidth value includes the window vertical scrollbar (if present) and left and right window resizing borders.
    */
    outerWidth: number,

    /**
     * Same as height but only supported by Netscape and Mozilla-based browsers. Specifies the height of the content area, viewing area of the new secondary window in pixels. The innerHeight value includes the height of the horizontal scrollbar if present. Minimal required value is 100.
    */
    innerHeight: number,

    /**
     * Same as width but only supported by Netscape and Mozilla-based browsers. Specifies the width of the content area, viewing area of the new secondary window in pixels. The innerWidth value includes the width of the vertical scrollbar if present. The innerWidth value does not include the sidebar if it is expanded. Minimal required value is 100.
    */
    innerWidth: number

    /**
     * If this feature is enabled, then the new secondary window renders the menubar.
    */
    menubar: boolean,

    /**
     * If this feature is enabled, then the new secondary window renders the Navigation Toolbar (Back, Forward, Reload, Stop buttons). In addition to the Navigation Toolbar, Mozilla-based browsers will render the Tab Bar if it is visible, present in the parent window. (If this feature is set to no all toolbars in the window will be invisible, for example extension toolbars).
    */
    toolbar: boolean,

    /**
     * If this feature is enabled, then the new secondary window renders the Location bar in Mozilla-based browsers. MSIE 5+ and Opera 7.x renders the Address Bar.
    */
    location: boolean,

    /**
     * If this feature is enabled, then the new secondary window renders the Personal Toolbar in Netscape 6.x, Netscape 7.x and Mozilla browser. It renders the Bookmarks Toolbar in Firefox. In addition to the Personal Toolbar, Mozilla browser will render the Site Navigation Bar if such toolbar is visible, present in the parent window.
    */
    personalbar: boolean

    /**
     * If enabled, the new window is said to be dependent of its parent window. A dependent window closes when its parent window closes. A dependent window is minimized on the Windows task bar only when its parent window is minimized. On Windows platforms, a dependent window does not show on the task bar. A dependent window also stays in front of the parent window.
    */
    dependent: boolean,

    /**
     * This setting can only apply to dialog windows; "minimizable" requires dialog=true. If minimizable is on, the new dialog window will have a minimize system command icon in the titlebar and it will be minimizable. Any non-dialog window is always minimizable and minimizable=false will be ignored.
    */
    minimizable: boolean,

    /**
     * Fullscreen the window or show the window as maximized.
    */
    fullscreen: boolean,

    /**
     * If this feature is set, the newly-opened window will open as normal, except that it will not have access back to the originating window (via Window.opener — it returns null). In addition, the window.open() call will also return null, so the originating window will not have access to the new one either.  This is useful for preventing untrusted sites opened via window.open() from tampering with the originating window, and vice versa.
     * Note that when noopener is used, nonempty target names other than _top, _self, and _parent are all treated like _blank in terms of deciding whether to open a new window/tab.
     * This is supported in modern browsers including Chrome, and Firefox 52+. See rel="noopener" for more information and for browser compatibility details, including information about ancillary effects.
    */
    noopener: boolean,

    /**
     * If this feature is set, the request to load the content located at the specified URL will be loaded with the request's referrer set to noreferrer; this prevents the request from sending the URL of the page that initiated the request to the server where the request is sent. In addition, setting this feature also automatically sets noopener. See rel="noreferrer" for additional details and compatibility information. Firefox introduced support for noreferrer in Firefox 68.
    */
    noreferrer: boolean,

    /**
     * If this feature is enabled, the new secondary window will be resizable.
    */
    resizable: boolean,

    /**
     * If this feature is enabled, the new secondary window will show horizontal and/or vertical scrollbar(s) if the document doesn't fit into the window's viewport.
    */
    scrollbars: boolean,

    /**
     * If enabled, the page is loaded as window's only content, without any of the browser's interface elements. There will be no context menu defined by default and none of the standard keyboard shortcuts will work. The page is supposed to provide a user interface of its own, usually this feature is used to open XUL documents (standard dialogs like the JavaScript Console are opened this way).
    */
    chrome: boolean,

    /**
     * The dialog feature removes all icons (restore, minimize, maximize) from the window's titlebar, leaving only the close button. Mozilla 1.2+ and Netscape 7.1 will render the other menu system commands (in FF 1.0 and in NS 7.0x, the command system menu is not identified with the Firefox/NS 7.0x icon on the left end of the titlebar: that's probably a bug. You can access the command system menu with a right-click on the titlebar). Dialog windows are windows which have no minimize system command icon and no maximize/restore down system command icon on the titlebar nor in correspondent menu item in the command system menu. They are said to be dialog because their normal, usual purpose is to only notify info and to be dismissed, closed. On Mac systems, dialog windows have a different window border and they may get turned into a sheet.
    */
    dialog: boolean,

    /**
     * If enabled, the new window is said to be modal. The user cannot return to the main window until the modal window is closed. A typical modal window is created by the alert() function.
     * The exact behavior of modal windows depends on the platform and on the Mozilla release version.
    */
    modal: boolean,

    /**
     * By default, all new secondary windows have a titlebar. If set to false, this feature removes the titlebar from the new secondary window.
    */
    titlebar: boolean,

    /**
     * If enabled, the new window will always be displayed on top of other browser windows, regardless of whether it is active or not.
    */
    alwaysRaised: boolean,

    /**
     * If enabled, the new created window floats below, under its own parent when the parent window is not minimized. alwaysLowered windows are often referred as pop-under windows. The alwaysLowered window can not be on top of the parent but the parent window can be minimized. In NS 6.x, the alwaysLowered window has no minimize system command icon and no restore/maximize system command.
    */
    alwaysLowered: boolean,

    /**
     * If enabled, the new window will always be displayed on top of all other windows (browser windows and otherwise), regardless of whether it is active or not.
    */
    alwaysOnTop: boolean,

    /**
     * Same as alwaysLowered.
    */
    "z-lock": boolean,

    /**
     * When disabled, this feature removes the system close command icon and system close menu item. It will only work for dialog windows (dialog feature set). close=false will override minimizable=true.
    */
    close: boolean
}

/**
 * A `window.open` JavaScript wrapper.
 * @param url The URL to open.
 * @param options The options to use.
 * @example
 * ```
 * const jasop = require("jasop");
 *
 * jasop(
 *     "https://example.com", // URL
 *     {
 *         height: 100, // You can use any window.open option
 *         scrollbars: true, // Booleans will the parsed
 *         width: 200, // Everything else will be converted to a string
 *         top: 100, // Options are polyfilled
 *         title: "MyWindow", // Custom window title
 *         replace: true // History behaviour
 *     }
 * )
 * // window.open("https://example.com", "MyWindow", "height=100,scrollbars=yes,width=200", true)
 * ```
*/
declare function jasop(url: url, options?: Options): typeof window.open;

export = jasop;
