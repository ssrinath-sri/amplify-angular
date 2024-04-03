/* *************************************************************************** *
 * File: app.component.ts                                                      *
 * Project: amplify-login                                                      *
 * Created Date: 2024-04-03                                                    *
 * Author: S SRINATH                                                           *
 *                                                                             *
 * Copyright © 2024 Capgemini . or its subsidiaries. All Rights Reserved.      *
 * *************************************************************************** */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Amplify } from 'aws-amplify';
import {
  AmplifyAuthenticatorModule,
  AuthenticatorService,
} from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public authenticator: AuthenticatorService) {}
}
