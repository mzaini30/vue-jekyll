app = new Vue({
 el: ".vue",
 router: new VueRouter({
  routes: [
   {
    path: "/",
    component: beranda
   },
   {
    path: "/about",
    component: about
   }
  ]
 })
})