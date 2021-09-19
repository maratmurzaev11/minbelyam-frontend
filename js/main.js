'use strict';


let vue = new Vue({
    el: "#vue-wrapper",
    data: {
        router: !localStorage.getItem("route_state") ? "main" : localStorage.getItem("route_state"),
        // router: "main",
        reg_login: "",
        reg_password: "",
        log_login: "",
        log_password: "",
        url: "http://192.168.93.49:8000/",
        section_wrapper: "",
        token: !localStorage.getItem("token") ? undefined : localStorage.getItem("token"),
        courses: [],
        course:null,
        opened_section:null,
        user: !localStorage.getItem("user") ? "guest" : JSON.parse(localStorage.getItem("user")),
    },
    methods: {


        auth() {
            this.update_router("auth")
        },

        reg() {
            this.router = "reg"
        },

        do_reg(ev) {
            ev.preventDefault()
            fetch(this.url + "api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",

                },
                body: JSON.stringify({
                        email: this.reg_login,
                        password: this.reg_password
                    }
                )
            }).then(response => {
                response.json().then(resp => {
                    this.token = resp.token
                    this.user = resp.user
                    localStorage.setItem("user", JSON.stringify(this.user))
                    localStorage.setItem("token", this.token)
                    this.get_courses()
                    this.update_router("edit_profile")
                })
            })
        },

        do_log(ev) {
            ev.preventDefault()
            fetch(this.url + "api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",

                },
                body: JSON.stringify({
                        email: this.log_login,
                        password: this.log_password
                    }
                )
            }).then(response => {
                response.json().then(resp => {
                    this.token = resp.token
                    this.user = resp.user
                    localStorage.setItem("user", JSON.stringify(this.user))
                    localStorage.setItem("token", this.token)
                    this.get_courses()
                    this.update_router("edit_profile")
                })
            })
        },

        get_courses() {
            fetch(this.url + "api/courses", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.token,
                    "Accept": "application/json",

                },
            }).then(response => {
                response.json().then(resp => {
                    this.courses = resp.courses
                })
            })
        },

        update_user() {
            fetch(this.url + "api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.token,
                    "Accept": "application/json",

                },
            }).then(response => {
                response.json().then(resp => {
                    this.user = resp.user
                    localStorage.setItem("user", JSON.stringify(this.user))
                })
            })
        },

        update_router(route) {
            this.router = route
            localStorage.setItem("route_state", route)
        },

        go_to_page1() {
            this.router = "edit_profile"
        },

        go_to_page2() {
            this.router = "pers_acc"
        },
        go_to_page3() {
            this.router = "all_courses"
        },
        go_to_page4() {
            this.router = "all_courses"
        },


        open_course(id){
            let course = this.courses.find(el => el.id == id)
            this.opened_section = course.sections.find(el=>el.id = 1)
            this.update_router("courses_el")
         }
    },


    created(){
        if (localStorage.getItem("token")){
            this.update_user()
            this.get_courses()
        }
    }


});

