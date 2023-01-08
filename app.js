"use strict"

import { HashRouter, BaseHashRouter } from "./modules/Routers.js"
import { ContentLoader } from "./modules/ContentLoader.js"
import routes from "./routes.js"



const baseTitle = "Routers"


HashRouter.onRoute = (route) => {
    console.log(route.title)
    document.title = `${route.title} - ${baseTitle}`
    document.querySelector("meta[name='description']").setAttribute("content", route.desc)


    ContentLoader.onLoadInit = (container) => {
        console.log("onLoadInit")
        document.querySelector("main").style.backgroundColor = "rebeccapurple"
        //document.querySelector("body").style.opacity = 0
    }

    ContentLoader.onLoadFinish = (container) => {
        console.log("onLoadFinish")

        window.setTimeout(() => {
            document.querySelector("main").style.backgroundColor = "white"
            //document.querySelector("body").style.opacity = 1
        }, 200)
        if (route == HashRouter.routes["#contact"]) {
            document.getElementById("mail").innerText = "sevodo@gmail.com"
        }

    }
    ContentLoader.load(route.path, document.getElementById("content"))
    window.scrollTo(0, 0)


}

HashRouter.init(routes)



/*BaseHashRouter.init()
BaseHashRouter.on("#about", (hash) => {
    console.log(hash.replace("#", ""))
})*/

