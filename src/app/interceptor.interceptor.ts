import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  user: User | undefined;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (!this.user) return next.handle(request);
    // cercare di implementare subjest
    const newreq = request.clone({
        headers: request.headers.set(
          "Authorization",
          `Bearer ${this.user.token}`
        )
    })
    return next.handle(newreq);
  }
}
