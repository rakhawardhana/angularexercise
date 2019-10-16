import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//const routes: Routes = [];

const routes: Routes = [
  {
    path: 'location',
    loadChildren: () =>
      import('./location/location.module').then(mod => mod.LocationModule)
      // meload lokasi
  },
  
  {
    path: 'device',
    loadChildren: () =>
    import('./device/device.module').then(mod => mod.DeviceModule)
  }
  // {
  //   path: 'products/:productId',
  //   loadChildren: () =>
  //     import('./location/location.module').then(mod => mod.LocationModule)
  //     // meload lokasi
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)], // return apa yang telah di load di routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
