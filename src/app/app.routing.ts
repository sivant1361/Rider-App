import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PagesComponent } from "./pages/pages.component";
import { BlankComponent } from "./pages/blank/blank.component";
import { SearchComponent } from "./pages/search/search.component";
import { NotFoundComponent } from "./pages/errors/not-found/not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
        data: { breadcrumb: "Dashboard" },
      },
      {
        path: "blank",
        component: BlankComponent,
        data: { breadcrumb: "Blank page" },
      },
      {
        path: "search",
        component: SearchComponent,
        data: { breadcrumb: "Search" },
      },
    ],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then((m) => m.RegisterModule),
  },
  { path: "**", component: NotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
});
