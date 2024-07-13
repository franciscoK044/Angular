import { platformBrowserDynamic as platformBrowserDynamic_1 } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic_1().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
