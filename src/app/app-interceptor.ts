import {Injectable} from '@angular/core';
import {HttpInterceptor,HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment} from '../../src/environments/environment';


const apiUrl = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const fullURL =req.url.includes('http')?req.url:`${apiUrl}${req.url}`;
    const isApiRequest = fullURL.includes('auth');
    var token = document.cookie;
    console.log('interceptor token:'+ token)
    return next.handle(req.clone({url:fullURL, withCredentials: isApiRequest})
    );
  }
}

