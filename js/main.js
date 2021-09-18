'use strict';

let vue = new Vue({
    el:"#vue-wrapper",
    data:{
        // router: !localStorage.getItem("route_state") ? "main" : localStorage.getItem("route_state"),
        router: "pers_acc",
        reg_login:"",
        reg_password:"",
        log_login:"",
        log_password:""
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
                fetch("http://192.168.128.49:8000/api/register",{
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
                    })
                })
            },

            do_log(ev){
                ev.preventDefault()
                fetch("http://192.168.128.49:8000/api/login",{
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
                    })
                })
            }
    },


});