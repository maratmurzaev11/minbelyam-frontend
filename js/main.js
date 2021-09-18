'use strict';

let vue = new Vue({
    el:"#vue-wrapper",
    data:{
        router: !localStorage.getItem("route_state") ? "main" : localStorage.getItem("route_state"),
        reg_login:"",
        reg_password:"",
        log_login:"",
        log_password:"",
        url:"http://192.168.142.49:8000/"
    },

    methods:{
        registration(){
            this.router = "reg";
            localStorage.setItem("route_state", "reg");
        },

        auth(){
            this.router = "auth"
        },

        do_reg(ev){
            ev.preventDefault()
                fetch(this.url+"api/register",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        email:this.reg_login,
                        password:this.reg_password
                    }
                   )
                }).then(response=> {
                    response.json().then(resp=>{
                        let token = resp.token
                        localStorage.setItem("token",token)
                        this.update_router("user_courses")
                    })
                })
            },

            do_log(ev){
                ev.preventDefault()
                fetch(this.url+"api/login",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                            email:this.log_login,
                            password:this.log_password
                        }
                    )
                }).then(response=> {
                    response.json().then(resp=>{
                        let token = resp.token
                        localStorage.setItem("token",token)
                        this.update_router("user_courses")
                    })
                })
            },

            update_router(route){
                this.router = route
                localStorage.setItem("route_state",route)
            }
    },



});