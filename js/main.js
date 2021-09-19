'use strict';




// let vue = new Vue({
//     el: "#vue-wrapper",
//     data: {
//         // router: !localStorage.getItem("route_state") ? "main" : localStorage.getItem("route_state"),
//         router: "edit_profile",
//         reg_login: "",
//         reg_password: "",
//         log_login: "",
//         log_password: "",
//         url: "http://192.168.142.49:8000/",
//         section_wrapper:""
//     },
//
//     methods: {
//         registration() {
//             this.router = "reg";
//             localStorage.setItem("route_state", "reg");
//         },
//
//         auth() {
//             this.router = "auth"
//         },
//
//         // add_section(){
//         //     let el = new DOMParser().parseFromString(" <div class='wp'><input type=\"text\" name=\"task_name\" placeholder=\"Название секции\">" +
//         //         "        <input type=\"text\" name=\"task_desc\" placeholder=\"Описание секции\">" +
//         //         "        <input type=\"file\" placeholder=\"Добавить видео\"><button name=\"do_add_task\" v-on:click.native=\"add_task\">Добавить задание</button></div>" ,"text/html").body.querySelector(".wp")
//         //   this.$refs["add_section_wrap"].appendChild(el)
//         // },
//         //
//         // add_task(){
//         //     let el = new DOMParser().parseFromString(" <div class='add_task' ref='add_task_wrap'> <input type=\"text\" name=\"task_name\" placeholder=\"Название задания\">\n" +
//         //         "                        <input type=\"checkbox\" placeholder=\"Добавить ответ\"></div>" ,"text/html").body.querySelector(".add_task")
//         //     this.$refs["add_task_wrap"].appendChild(el)
//         // },
//         //
//         // do_add_course(){
//         //
//         // },
//
//         do_reg(ev) {
//             ev.preventDefault()
//             fetch(this.url + "api/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                         email: this.reg_login,
//                         password: this.reg_password
//                     }
//                 )
//             }).then(response => {
//                 response.json().then(resp => {
//                     let token = resp.token
//                     localStorage.setItem("token", token)
//                     this.update_router("user_courses")
//                 })
//             })
//         },
//
//         do_log(ev) {
//             ev.preventDefault()
//             fetch(this.url + "api/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                         email: this.log_login,
//                         password: this.log_password
//                     }
//                 )
//             }).then(response => {
//                 response.json().then(resp => {
//                     let token = resp.token
//                     localStorage.setItem("token", token)
//                     this.update_router("user_courses")
//                 })
//             })
//         },
//         // add_course(ev){
//         //
//         //     ev.preventDefault()
//         //     fetch(this.url+"api/register",{
//         //         method:"POST",
//         //         headers:{
//         //             "Content-Type":"application/json",
//         //         },
//         //         body:JSON.stringify({
//         //                 email:this.reg_login,
//         //                 password:this.reg_password
//         //             }
//         //         )
//         //     }).then(response=> {
//         //         response.json().then(resp=>{
//         //             let token = resp.token
//         //             localStorage.setItem("token",token)
//         //             this.update_router("user_courses")
//         //         })
//         //     })
//         // },
//
//         // do_add_task() {
//         //   if ()
//         // },
//
//         update_router(route) {
//             this.router = route
//             localStorage.setItem("route_state", route)
//         },
//
//
//     },
//
//
// });
