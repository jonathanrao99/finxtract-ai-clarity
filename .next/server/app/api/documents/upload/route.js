/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/documents/upload/route";
exports.ids = ["app/api/documents/upload/route"];
exports.modules = {

/***/ "(rsc)/./app/api/documents/upload/route.ts":
/*!*******************************************!*\
  !*** ./app/api/documents/upload/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase-client */ \"(rsc)/./src/lib/supabase-client.ts\");\n/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/supabase-server */ \"(rsc)/./src/lib/supabase-server.ts\");\n\n\n\nasync function POST(req) {\n    const { data: { user }, error: userError } = await _lib_supabase_client__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.getUser();\n    if (userError || !user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Unauthorized'\n        }, {\n            status: 401\n        });\n    }\n    const contentType = req.headers.get('content-type') || '';\n    let urls = [];\n    // Handle file uploads via multipart/form-data\n    if (contentType.includes('multipart/form-data')) {\n        const form = await req.formData();\n        // Gather online URLs\n        for (const entry of form.getAll('urls')){\n            if (typeof entry === 'string' && entry) urls.push(entry);\n        }\n        // Handle local files\n        for (const entry of form.getAll('files')){\n            if (entry instanceof File) {\n                const file = entry;\n                const filename = `${user.id}/${crypto.randomUUID()}-${file.name}`;\n                const { error: uploadError } = await _lib_supabase_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].storage.from('documents').upload(filename, file);\n                if (!uploadError) {\n                    const { data: publicData } = _lib_supabase_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].storage.from('documents').getPublicUrl(filename);\n                    if (publicData.publicUrl) urls.push(publicData.publicUrl);\n                }\n            }\n        }\n    } else {\n        // JSON body fallback\n        const body = await req.json();\n        if (Array.isArray(body.urls)) urls = body.urls;\n    }\n    if (urls.length === 0) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'No files or URLs provided'\n        }, {\n            status: 400\n        });\n    }\n    // Insert document record with pending status\n    const { data, error: insertError } = await _lib_supabase_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].from('documents').insert({\n        user_id: user.id,\n        urls,\n        status: 'pending'\n    }).select('id').single();\n    if (insertError || !data) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: insertError?.message\n        }, {\n            status: 400\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        documentId: data.id\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c1xcdXBsb2FkXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJ0AvbGliL3N1cGFiYXNlLWNsaWVudCc7XHJcbmltcG9ydCBzdXBhYmFzZUFkbWluIGZyb20gJ0AvbGliL3N1cGFiYXNlLXNlcnZlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IHVzZXJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgaWYgKHVzZXJFcnJvciB8fCAhdXNlcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVxLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnJztcclxuICBsZXQgdXJsczogc3RyaW5nW10gPSBbXTtcclxuICAvLyBIYW5kbGUgZmlsZSB1cGxvYWRzIHZpYSBtdWx0aXBhcnQvZm9ybS1kYXRhXHJcbiAgaWYgKGNvbnRlbnRUeXBlLmluY2x1ZGVzKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcclxuICAgIC8vIEdhdGhlciBvbmxpbmUgVVJMc1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBmb3JtLmdldEFsbCgndXJscycpKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnICYmIGVudHJ5KSB1cmxzLnB1c2goZW50cnkpO1xyXG4gICAgfVxyXG4gICAgLy8gSGFuZGxlIGxvY2FsIGZpbGVzXHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGZvcm0uZ2V0QWxsKCdmaWxlcycpKSB7XHJcbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7XHJcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgJHt1c2VyLmlkfS8ke2NyeXB0by5yYW5kb21VVUlEKCl9LSR7ZmlsZS5uYW1lfWA7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW4uc3RvcmFnZVxyXG4gICAgICAgICAgLmZyb20oJ2RvY3VtZW50cycpXHJcbiAgICAgICAgICAudXBsb2FkKGZpbGVuYW1lLCBmaWxlKTtcclxuICAgICAgICBpZiAoIXVwbG9hZEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGE6IHB1YmxpY0RhdGEgfSA9IHN1cGFiYXNlQWRtaW4uc3RvcmFnZVxyXG4gICAgICAgICAgICAuZnJvbSgnZG9jdW1lbnRzJylcclxuICAgICAgICAgICAgLmdldFB1YmxpY1VybChmaWxlbmFtZSk7XHJcbiAgICAgICAgICBpZiAocHVibGljRGF0YS5wdWJsaWNVcmwpIHVybHMucHVzaChwdWJsaWNEYXRhLnB1YmxpY1VybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEpTT04gYm9keSBmYWxsYmFja1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShib2R5LnVybHMpKSB1cmxzID0gYm9keS51cmxzO1xyXG4gIH1cclxuICBpZiAodXJscy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm8gZmlsZXMgb3IgVVJMcyBwcm92aWRlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcbiAgLy8gSW5zZXJ0IGRvY3VtZW50IHJlY29yZCB3aXRoIHBlbmRpbmcgc3RhdHVzXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cclxuICAgIC5mcm9tKCdkb2N1bWVudHMnKVxyXG4gICAgLmluc2VydCh7IHVzZXJfaWQ6IHVzZXIuaWQsIHVybHMsIHN0YXR1czogJ3BlbmRpbmcnIH0pXHJcbiAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAuc2luZ2xlKCk7XHJcbiAgaWYgKGluc2VydEVycm9yIHx8ICFkYXRhKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogaW5zZXJ0RXJyb3I/Lm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZG9jdW1lbnRJZDogZGF0YS5pZCB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJzdXBhYmFzZSIsInN1cGFiYXNlQWRtaW4iLCJQT1NUIiwicmVxIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsInVzZXJFcnJvciIsImF1dGgiLCJnZXRVc2VyIiwianNvbiIsInN0YXR1cyIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsInVybHMiLCJpbmNsdWRlcyIsImZvcm0iLCJmb3JtRGF0YSIsImVudHJ5IiwiZ2V0QWxsIiwicHVzaCIsIkZpbGUiLCJmaWxlIiwiZmlsZW5hbWUiLCJpZCIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJuYW1lIiwidXBsb2FkRXJyb3IiLCJzdG9yYWdlIiwiZnJvbSIsInVwbG9hZCIsInB1YmxpY0RhdGEiLCJnZXRQdWJsaWNVcmwiLCJwdWJsaWNVcmwiLCJib2R5IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiaW5zZXJ0RXJyb3IiLCJpbnNlcnQiLCJ1c2VyX2lkIiwic2VsZWN0Iiwic2luZ2xlIiwibWVzc2FnZSIsImRvY3VtZW50SWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/documents/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdocuments%2Fupload%2Froute&page=%2Fapi%2Fdocuments%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdocuments%2Fupload%2Froute.ts&appDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdocuments%2Fupload%2Froute&page=%2Fapi%2Fdocuments%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdocuments%2Fupload%2Froute.ts&appDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_FinXtract_finxtract_ai_clarity_app_api_documents_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/documents/upload/route.ts */ \"(rsc)/./app/api/documents/upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/documents/upload/route\",\n        pathname: \"/api/documents/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/documents/upload/route\"\n    },\n    resolvedPagePath: \"D:\\\\FinXtract\\\\finxtract-ai-clarity\\\\app\\\\api\\\\documents\\\\upload\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_FinXtract_finxtract_ai_clarity_app_api_documents_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkb2N1bWVudHMlMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmRvY3VtZW50cyUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmRvY3VtZW50cyUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDRmluWHRyYWN0JTVDZmlueHRyYWN0LWFpLWNsYXJpdHklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNGaW5YdHJhY3QlNUNmaW54dHJhY3QtYWktY2xhcml0eSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXEZpblh0cmFjdFxcXFxmaW54dHJhY3QtYWktY2xhcml0eVxcXFxhcHBcXFxcYXBpXFxcXGRvY3VtZW50c1xcXFx1cGxvYWRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2RvY3VtZW50cy91cGxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kb2N1bWVudHMvdXBsb2FkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kb2N1bWVudHMvdXBsb2FkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcRmluWHRyYWN0XFxcXGZpbnh0cmFjdC1haS1jbGFyaXR5XFxcXGFwcFxcXFxhcGlcXFxcZG9jdW1lbnRzXFxcXHVwbG9hZFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdocuments%2Fupload%2Froute&page=%2Fapi%2Fdocuments%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdocuments%2Fupload%2Froute.ts&appDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/lib/supabase-client.ts":
/*!************************************!*\
  !*** ./src/lib/supabase-client.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"(rsc)/./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n/**\n * Server Actions/Route Handlers Supabase client using Next.js cookies\n */ const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createRouteHandlerClient)({\n    cookies: next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N1cGFiYXNlLWNsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlFO0FBQ2xDO0FBRXZDOztDQUVDLEdBQ00sTUFBTUUsV0FBV0YsdUZBQXdCQSxDQUFDO0lBQUVDLE9BQU9BLG1EQUFBQTtBQUFDLEdBQUciLCJzb3VyY2VzIjpbIkQ6XFxGaW5YdHJhY3RcXGZpbnh0cmFjdC1haS1jbGFyaXR5XFxzcmNcXGxpYlxcc3VwYWJhc2UtY2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlSGFuZGxlckNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9hdXRoLWhlbHBlcnMtbmV4dGpzJztcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xuIFxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9ucy9Sb3V0ZSBIYW5kbGVycyBTdXBhYmFzZSBjbGllbnQgdXNpbmcgTmV4dC5qcyBjb29raWVzXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVJvdXRlSGFuZGxlckNsaWVudCh7IGNvb2tpZXMgfSk7ICJdLCJuYW1lcyI6WyJjcmVhdGVSb3V0ZUhhbmRsZXJDbGllbnQiLCJjb29raWVzIiwic3VwYWJhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase-client.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/supabase-server.ts":
/*!************************************!*\
  !*** ./src/lib/supabase-server.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\n/**\r\n * Server-side Supabase client with service role for privileged operations\r\n */ const supabaseAdmin = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dnyiaoywyuithfbiyyed.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY, {\n    auth: {\n        persistSession: false\n    },\n    global: {\n        headers: {\n            'x-ssr': '1'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabaseAdmin);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N1cGFiYXNlLXNlcnZlci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUVyRDs7Q0FFQyxHQUNELE1BQU1DLGdCQUFnQkQsbUVBQVlBLENBQ2hDRSwwQ0FBb0MsRUFDcENBLFFBQVFDLEdBQUcsQ0FBQ0UseUJBQXlCLEVBQ3JDO0lBQ0VDLE1BQU07UUFBRUMsZ0JBQWdCO0lBQU07SUFDOUJDLFFBQVE7UUFBRUMsU0FBUztZQUFFLFNBQVM7UUFBSTtJQUFFO0FBQ3RDO0FBR0YsaUVBQWVSLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxGaW5YdHJhY3RcXGZpbnh0cmFjdC1haS1jbGFyaXR5XFxzcmNcXGxpYlxcc3VwYWJhc2Utc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XHJcblxyXG4vKipcclxuICogU2VydmVyLXNpZGUgU3VwYWJhc2UgY2xpZW50IHdpdGggc2VydmljZSByb2xlIGZvciBwcml2aWxlZ2VkIG9wZXJhdGlvbnNcclxuICovXHJcbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZISxcclxuICB7XHJcbiAgICBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSB9LFxyXG4gICAgZ2xvYmFsOiB7IGhlYWRlcnM6IHsgJ3gtc3NyJzogJzEnIH0gfSxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZUFkbWluOyAiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VBZG1pbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwiYXV0aCIsInBlcnNpc3RTZXNzaW9uIiwiZ2xvYmFsIiwiaGVhZGVycyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase-server.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/set-cookie-parser","vendor-chunks/webidl-conversions","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdocuments%2Fupload%2Froute&page=%2Fapi%2Fdocuments%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdocuments%2Fupload%2Froute.ts&appDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFinXtract%5Cfinxtract-ai-clarity&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();