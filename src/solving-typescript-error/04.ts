// const routingConfig = {
//   routes: [
//     {
//       path: "home",
//       component: "HomeComponent",
//     },
//     {
//       path: "about",
//       component: 12,
//     },
//     {
//       path: "contact",
//       component: "ContactComponent",
//     },
//   ],
// };

const createRoutes = (config: {
  routes: {
    path: string;
    component: any;
  }[];
}) => {};

// createRoutes(routingConfig); // problem

//solution 1
createRoutes({
      routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
})

//solution 2

type RoutingConfig = {
    routes: {
    path: string;
    component: any;
  }[];
}
const createRoutes2 = (config: RoutingConfig) => {};

const routingConfig = {
     routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
}

createRoutes2(routingConfig);
