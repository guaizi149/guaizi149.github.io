(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dvajs.com/guide/concepts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("以中文版查看此文"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"data-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-flow"}},[t._v("#")]),t._v(" Data Flow")]),t._v(" "),s("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png",width:"807"}}),t._v(" "),s("h2",{attrs:{id:"models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),s("p",[s("code",[t._v("type State = any")])]),t._v(" "),s("p",[t._v("The state tree of your models. Usually, the state is a JavaScript object (although technically it can be any type) which is immutable data.")]),t._v(" "),s("p",[t._v("In dva, you can access top state tree data by "),s("code",[t._v("_store")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dva")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// top state")]),t._v("\n")])])]),s("h3",{attrs:{id:"action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),s("p",[s("code",[t._v("type AsyncAction = any")])]),t._v(" "),s("p",[t._v("Just like Redux's Action, in dva, action is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.action. (PS: dispatch is realized through props by connecting components.)")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"dispatch-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-function"}},[t._v("#")]),t._v(" dispatch function")]),t._v(" "),s("p",[s("code",[t._v("type dispatch = (a: Action) => Action")])]),t._v(" "),s("p",[t._v("A dispatching function (or simply dispatch function) is a function that accepts an action or an async action; it then may or may not dispatch one or more actions to the store.")]),t._v(" "),s("p",[t._v("Dispatching function is a function for triggering action, action is the only way to change state, but it just describes an action. while dispatch can be regarded as a way to trigger this action, and Reducer is to describe how to change state.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user/add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if in model outside, need to add namespace")]),t._v("\n  payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"reducer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducer"}},[t._v("#")]),t._v(" Reducer")]),t._v(" "),s("p",[s("code",[t._v("type Reducer<S, A> = (state: S, action: A) => S")])]),t._v(" "),s("p",[t._v("Just like Redux's Reducer, a reducer (also called a reducing function) is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.")]),t._v(" "),s("p",[t._v("Reducer's concepts from FP:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return {x:1, y:2, z:3}")]),t._v("\n")])])]),s("p",[t._v("In dva, reducers accumulate current model's state. There are some things need to be notice that reducer must be "),s("a",{attrs:{href:"https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch3.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("pure function"),s("OutboundLink")],1),t._v(" and every calculated data must be "),s("a",{attrs:{href:"https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch3.md#reasonable",target:"_blank",rel:"noopener noreferrer"}},[t._v("immutable data"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#effect"}},[t._v("#")]),t._v(" Effect")]),t._v(" "),s("p",[t._v("In dva, we use "),s("a",{attrs:{href:"https://redux-saga.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("redux-sagas"),s("OutboundLink")],1),t._v(" to control asynchronous flow.\nYou can learn more in "),s("a",{attrs:{href:"https://github.com/MostlyAdequate/mostly-adequate-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mostly adequate guide to FP"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("In our applications, the most well-known side effect is asynchronous operation, it comes from the conception of functional programing, it is called side effect because it makes our function impure, and the same input may not result in the same output.")]),t._v(" "),s("h3",{attrs:{id:"subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[t._v("#")]),t._v(" Subscription")]),t._v(" "),s("p",[t._v("Subscriptions is a way to get data from source, it is come from elm.")]),t._v(" "),s("p",[t._v("Data source can be: the current time, the websocket connection of server, keyboard input, geolocation change, history router change, etc..")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keymaster'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  namespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  subscriptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'⌘+up, ctrl+up'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" Router")]),t._v(" "),s("p",[t._v("Hereby router usually means frontend router. Because our current app is single page app, frontend codes are required to control the router logics. Through History API provided by the browser, we can monitor the change of the browser's url, so as to control the router.")]),t._v(" "),s("p",[t._v("dva provide "),s("code",[t._v("router")]),t._v(" function to control router, based on "),s("a",{attrs:{href:"https://github.com/reactjs/react-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-router"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Route "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dva/router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Router history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("history"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomePage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"route-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-components"}},[t._v("#")]),t._v(" Route Components")]),t._v(" "),s("p",[t._v("In dva, we restrict container components to route components, because we use page dimension to design container components.")]),t._v(" "),s("p",[t._v("therefore, almost all connected model components are route components, route components in "),s("code",[t._v("/routes/")]),t._v(" directory, presentational Components in "),s("code",[t._v("/components/")]),t._v(" directory.")]),t._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://redux.js.org/docs/Glossary.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("redux docs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/MostlyAdequate/mostly-adequate-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mostly adequate guide to FP"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/yoshuawuyts/choo",target:"_blank",rel:"noopener noreferrer"}},[t._v("choo docs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://elm-lang.org/blog/farewell-to-frp",target:"_blank",rel:"noopener noreferrer"}},[t._v("elm"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);