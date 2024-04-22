import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { JsonEnv } from '../Common/Config/JsonEnv.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withHashLocation()),
		provideHttpClient(),
		{
			provide: APP_INITIALIZER,
			useFactory: (JsonEnv: JsonEnv) => () => JsonEnv.Load(),
			multi: true,
			deps: [JsonEnv]
		},
	]
};
