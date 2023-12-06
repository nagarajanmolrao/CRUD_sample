import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '', redirectTo: '/read', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/read', pathMatch: 'full' }, // Redirect to default route if path doesn't match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
