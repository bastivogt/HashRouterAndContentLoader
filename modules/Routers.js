"use strict"

export class BaseHashRouter {
    constructor() {}

    static hash = ""
    static onHashChange = null

    static init() {
        BaseHashRouter.hash = window.location.hash
        window.addEventListener("hashchange", (e) => {
            BaseHashRouter.hash = window.location.hash
            //console.log(hash)
            if(BaseHashRouter.onHashChange != null) BaseHashRouter.onHashChange(BaseHashRouter.hash)
            
        })
    }

    static on(route, callback) {
        BaseHashRouter.onHashChange = (hash) => {
            if(route === hash) {
                callback(hash)
            }
        }

    }
}


export class HashRouter {
    constructor() {}

    static routes
    static onRoute = null
    

    static init(routes) {
        HashRouter.routes = routes
        BaseHashRouter.init()
        BaseHashRouter.onHashChange = (hash) => {
            HashRouter.handleLocation()
        }
        HashRouter.handleLocation()
    }

    static handleLocation() {
        const route = HashRouter.routes[BaseHashRouter.hash] || HashRouter.routes["#404"]
        if(HashRouter.onRoute != null) HashRouter.onRoute(route)

    }
}



