"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderMiddle: function() { return /* binding */ HeaderMiddle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/hooks */ \"./node_modules/@mantine/hooks/esm/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignInButton */ \"./src/components/SignInButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// function AuthShowcase() {\n//   const { data: sessionData } = useSession();\n//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(\n//     undefined, // no input\n//     { enabled: sessionData?.user !== undefined }\n//   );\n//   return (\n//     <>\n//       <div className=\"flex flex-col items-center justify-center gap-4\">\n//         <p className=\"text-center text-2xl text-white\">\n//           {sessionData && <span>Logged in as {sessionData.user?.name}</span>}\n//           {/* {secretMessage && <span> - {secretMessage}</span>} */}\n//         </p>\n//         <button\n//           className=\"rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20\"\n//           onClick={sessionData ? () => void signOut() : () => void signIn()}\n//         >\n//           {sessionData ? \"Sign out\" : \"Sign in\"}\n//         </button>\n//       </div>\n//     </>\n//   );\n// }\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.createStyles)((theme)=>({\n        inner: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.rem)(56),\n            [theme.fn.smallerThan(\"sm\")]: {\n                justifyContent: \"flex-start\"\n            }\n        },\n        links: {\n            width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.rem)(260),\n            [theme.fn.smallerThan(\"sm\")]: {\n                display: \"none\"\n            }\n        },\n        social: {\n            width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.rem)(260),\n            [theme.fn.smallerThan(\"sm\")]: {\n                width: \"auto\",\n                marginLeft: \"auto\"\n            }\n        },\n        burger: {\n            marginRight: theme.spacing.md,\n            [theme.fn.largerThan(\"sm\")]: {\n                display: \"none\"\n            }\n        },\n        link: {\n            display: \"block\",\n            lineHeight: 1,\n            padding: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.rem)(8), \" \").concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_4__.rem)(12)),\n            borderRadius: theme.radius.sm,\n            textDecoration: \"none\",\n            color: theme.colorScheme === \"dark\" ? theme.colors.dark[0] : theme.colors.gray[7],\n            fontSize: theme.fontSizes.sm,\n            fontWeight: 500,\n            \"&:hover\": {\n                backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.gray[0]\n            }\n        },\n        linkActive: {\n            \"&, &:hover\": {\n                backgroundColor: theme.fn.variant({\n                    variant: \"light\",\n                    color: theme.primaryColor\n                }).background,\n                color: theme.fn.variant({\n                    variant: \"light\",\n                    color: theme.primaryColor\n                }).color\n            }\n        }\n    }));\nfunction HeaderMiddle(param) {\n    let { links } = param;\n    var _links_;\n    _s();\n    const [opened, { toggle }] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_links_ = links[0]) === null || _links_ === void 0 ? void 0 : _links_.link);\n    const { classes, cx } = useStyles();\n    const items = links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: link.link,\n            className: cx(classes.link, {\n                \"nyanza-bg-hover\": active === link.link,\n                \"nyanza-bg dogwood cream-bg-hover\": true\n            }),\n            onClick: (event)=>{\n                // event.preventDefault();\n                setActive(link.link);\n            },\n            children: link.label\n        }, link.label, false, {\n            fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n            lineNumber: 130,\n            columnNumber: 5\n        }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Header, {\n        height: 56,\n        className: \"jasmine-bg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            className: classes.inner,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Burger, {\n                    opened: opened,\n                    onClick: toggle,\n                    size: \"sm\",\n                    className: classes.burger\n                }, void 0, false, {\n                    fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                    className: classes.links,\n                    spacing: 5,\n                    children: items\n                }, void 0, false, {\n                    fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                    src: \"/images/SB-logo.png\",\n                    height: 30,\n                    width: 100,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                    spacing: 0,\n                    className: classes.social,\n                    position: \"right\",\n                    noWrap: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.ActionIcon, {\n                            size: \"lg\",\n                            className: \"cream-bg-hover mx-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"https://www.youtube.com/@safetybreakroc\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.IconBrandYoutube, {\n                                    size: \"1.1rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                            lineNumber: 162,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.ActionIcon, {\n                            size: \"lg\",\n                            className: \"cream-bg-hover mx-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.IconBrandInstagram, {\n                                size: \"1.1rem\",\n                                stroke: 1.5\n                            }, void 0, false, {\n                                fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                            lineNumber: 167,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                            lineNumber: 170,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n            lineNumber: 148,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kenzie/workspace/personal/band-site/src/components/Header.tsx\",\n        lineNumber: 147,\n        columnNumber: 5\n    }, this);\n}\n_s(HeaderMiddle, \"CC4sJLaFNEXqymf7Z2m5dHJ038k=\", false, function() {\n    return [\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure,\n        useStyles\n    ];\n});\n_c = HeaderMiddle;\nvar _c;\n$RefreshReg$(_c, \"HeaderMiddle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUc1Qyw4REFBQ25FLHFEQUFVQTs0QkFBQzhELE1BQUs7NEJBQUtKLFdBQVc7c0NBQy9CLDRFQUFDbkQsbUVBQWtCQTtnQ0FBQ3VELE1BQUs7Z0NBQVNLLFFBQVE7Ozs7Ozs7Ozs7O3NDQUU1Qyw4REFBQzFELHFEQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtHQW5EZ0J1Qzs7UUFDZTNDLHlEQUFhQTtRQUVsQks7OztLQUhWc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVN0eWxlcyxcbiAgSGVhZGVyLFxuICBHcm91cCxcbiAgQWN0aW9uSWNvbixcbiAgQ29udGFpbmVyLFxuICBCdXJnZXIsXG4gIHJlbSxcbiAgSW1hZ2UsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCB7XG4gIEljb25CcmFuZFR3aXR0ZXIsXG4gIEljb25CcmFuZFlvdXR1YmUsXG4gIEljb25CcmFuZEluc3RhZ3JhbSxcbn0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJ+L3V0aWxzL2FwaVwiO1xuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tIFwiLi9TaWduSW5CdXR0b25cIjtcbi8vIGZ1bmN0aW9uIEF1dGhTaG93Y2FzZSgpIHtcbi8vICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uRGF0YSB9ID0gdXNlU2Vzc2lvbigpO1xuXG4vLyAgIGNvbnN0IHsgZGF0YTogc2VjcmV0TWVzc2FnZSB9ID0gYXBpLmV4YW1wbGUuZ2V0U2VjcmV0TWVzc2FnZS51c2VRdWVyeShcbi8vICAgICB1bmRlZmluZWQsIC8vIG5vIGlucHV0XG4vLyAgICAgeyBlbmFibGVkOiBzZXNzaW9uRGF0YT8udXNlciAhPT0gdW5kZWZpbmVkIH1cbi8vICAgKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIHRleHQtd2hpdGVcIj5cbi8vICAgICAgICAgICB7c2Vzc2lvbkRhdGEgJiYgPHNwYW4+TG9nZ2VkIGluIGFzIHtzZXNzaW9uRGF0YS51c2VyPy5uYW1lfTwvc3Bhbj59XG4vLyAgICAgICAgICAgey8qIHtzZWNyZXRNZXNzYWdlICYmIDxzcGFuPiAtIHtzZWNyZXRNZXNzYWdlfTwvc3Bhbj59ICovfVxuLy8gICAgICAgICA8L3A+XG4vLyAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgcHgtMTAgcHktMyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIHRyYW5zaXRpb24gaG92ZXI6Ymctd2hpdGUvMjBcIlxuLy8gICAgICAgICAgIG9uQ2xpY2s9e3Nlc3Npb25EYXRhID8gKCkgPT4gdm9pZCBzaWduT3V0KCkgOiAoKSA9PiB2b2lkIHNpZ25JbigpfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAge3Nlc3Npb25EYXRhID8gXCJTaWduIG91dFwiIDogXCJTaWduIGluXCJ9XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGlubmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiByZW0oNTYpLFxuXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwic21cIildOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rczoge1xuICAgIHdpZHRoOiByZW0oMjYwKSxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInNtXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcblxuICBzb2NpYWw6IHtcbiAgICB3aWR0aDogcmVtKDI2MCksXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIH0sXG4gIH0sXG5cbiAgYnVyZ2VyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcubWQsXG5cbiAgICBbdGhlbWUuZm4ubGFyZ2VyVGhhbihcInNtXCIpXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcblxuICBsaW5rOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgcGFkZGluZzogYCR7cmVtKDgpfSAke3JlbSgxMil9YCxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6XG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1swXVxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzddLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc20sXG4gICAgZm9udFdlaWdodDogNTAwLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s2XVxuICAgICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbMF0sXG4gICAgfSxcbiAgfSxcblxuICBsaW5rQWN0aXZlOiB7XG4gICAgXCImLCAmOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZm4udmFyaWFudCh7XG4gICAgICAgIHZhcmlhbnQ6IFwibGlnaHRcIixcbiAgICAgICAgY29sb3I6IHRoZW1lLnByaW1hcnlDb2xvcixcbiAgICAgIH0pLmJhY2tncm91bmQsXG4gICAgICBjb2xvcjogdGhlbWUuZm4udmFyaWFudCh7IHZhcmlhbnQ6IFwibGlnaHRcIiwgY29sb3I6IHRoZW1lLnByaW1hcnlDb2xvciB9KVxuICAgICAgICAuY29sb3IsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIEhlYWRlck1pZGRsZVByb3BzIHtcbiAgbGlua3M6IHsgbGluazogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlck1pZGRsZSh7IGxpbmtzIH06IEhlYWRlck1pZGRsZVByb3BzKSB7XG4gIGNvbnN0IFtvcGVuZWQsIHsgdG9nZ2xlIH1dID0gdXNlRGlzY2xvc3VyZShmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShsaW5rc1swXT8ubGluayk7XG4gIGNvbnN0IHsgY2xhc3NlcywgY3ggfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGl0ZW1zID0gbGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgPExpbmtcbiAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgIGtleT17bGluay5sYWJlbH1cbiAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy5saW5rLCB7XG4gICAgICAgIFwibnlhbnphLWJnLWhvdmVyXCI6IGFjdGl2ZSA9PT0gbGluay5saW5rLFxuICAgICAgICBcIm55YW56YS1iZyBkb2d3b29kIGNyZWFtLWJnLWhvdmVyXCI6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRBY3RpdmUobGluay5saW5rKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2xpbmsubGFiZWx9XG4gICAgPC9MaW5rPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXIgaGVpZ2h0PXs1Nn0gY2xhc3NOYW1lPXtcImphc21pbmUtYmdcIn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0+XG4gICAgICAgIDxCdXJnZXJcbiAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnVyZ2VyfVxuICAgICAgICAvPlxuICAgICAgICA8R3JvdXAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfSBzcGFjaW5nPXs1fT5cbiAgICAgICAgICB7aXRlbXN9XG4gICAgICAgIDwvR3JvdXA+XG5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvU0ItbG9nby5wbmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MTAwfSBhbHQ9XCJcIiAvPlxuXG4gICAgICAgIDxHcm91cCBzcGFjaW5nPXswfSBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsfSBwb3NpdGlvbj1cInJpZ2h0XCIgbm9XcmFwPlxuICAgICAgICAgIDxBY3Rpb25JY29uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT17XCJjcmVhbS1iZy1ob3ZlciBteC0xXCJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BzYWZldHlicmVha3JvY1wiPlxuICAgICAgICAgICAgICA8SWNvbkJyYW5kWW91dHViZSBzaXplPVwiMS4xcmVtXCIgc3Ryb2tlPXsxLjV9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9BY3Rpb25JY29uPlxuICAgICAgICAgIDxBY3Rpb25JY29uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT17XCJjcmVhbS1iZy1ob3ZlciBteC0xXCJ9PlxuICAgICAgICAgICAgPEljb25CcmFuZEluc3RhZ3JhbSBzaXplPVwiMS4xcmVtXCIgc3Ryb2tlPXsxLjV9IC8+XG4gICAgICAgICAgPC9BY3Rpb25JY29uPlxuICAgICAgICAgIDxTaWduSW5CdXR0b24gLz5cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvSGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlU3R5bGVzIiwiSGVhZGVyIiwiR3JvdXAiLCJBY3Rpb25JY29uIiwiQ29udGFpbmVyIiwiQnVyZ2VyIiwicmVtIiwiSW1hZ2UiLCJ1c2VEaXNjbG9zdXJlIiwiSWNvbkJyYW5kWW91dHViZSIsIkljb25CcmFuZEluc3RhZ3JhbSIsIkxpbmsiLCJTaWduSW5CdXR0b24iLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImlubmVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImZuIiwic21hbGxlclRoYW4iLCJsaW5rcyIsIndpZHRoIiwic29jaWFsIiwibWFyZ2luTGVmdCIsImJ1cmdlciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIm1kIiwibGFyZ2VyVGhhbiIsImxpbmsiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsInNtIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImNvbG9yU2NoZW1lIiwiY29sb3JzIiwiZGFyayIsImdyYXkiLCJmb250U2l6ZSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5rQWN0aXZlIiwidmFyaWFudCIsInByaW1hcnlDb2xvciIsImJhY2tncm91bmQiLCJIZWFkZXJNaWRkbGUiLCJvcGVuZWQiLCJ0b2dnbGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGFzc2VzIiwiY3giLCJpdGVtcyIsIm1hcCIsImhyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJsYWJlbCIsInNpemUiLCJzcmMiLCJhbHQiLCJwb3NpdGlvbiIsIm5vV3JhcCIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});