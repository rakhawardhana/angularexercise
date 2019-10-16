import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, { PubSub, Auth } from 'aws-amplify';
import awsExports from './aws-exports';

if (environment.production) {
  enableProdMode();
}

Amplify.configure(awsExports);
PubSub.configure(awsExports);

Auth.signIn('rakha', 'rakha12345').then(r => {
  console.log('HALO', r);
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
