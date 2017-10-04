var app = {
    users: [],
    oninit: () => {
        console.log("load users")
        m.request({
            method: "GET",
            url: "http://jsonplaceholder.typicode.com/users"
        }).then(users => app.users = users)
    },
    view: function (vnode) {
        console.log("view")
        return m("ion-app",
            m("ion-page.show-page", [
                m("ion-header",
                    m("ion-toolbar",
                        m("ion-title", "Ionic 4 + Mithril")
                    )
                ),
                m("ion-content.content[padding=]",
                    m("ion-list",
                        app.users.map(user => m("ion-item", m("ion-label", user.name)))

                    )
                )
            ])
        )
    }
}

m.mount(document.body, app)
