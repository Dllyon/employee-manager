import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditaFuncionarioComponent } from "./pages/edita-funcionario/edita-funcionario.component";
import { NovoFuncionarioComponent } from "./pages/novo-funcionario/novo-funcionario.component";
import { PaginaErroComponent } from "./pages/pagina-erro/pagina-erro.component";
import { TabelaFuncionariosComponent } from "./pages/tabela-funcionarios/tabela-funcionarios.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        component: TabelaFuncionariosComponent
    },
    {
        path: "new",
        component: NovoFuncionarioComponent
    },
    {
        path: "edit/:id",
        component: EditaFuncionarioComponent
    },
    {
        path: "**",
        component: PaginaErroComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
