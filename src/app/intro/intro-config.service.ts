import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IntroConfig} from "./intro.config";

@Injectable({
  providedIn:'root'
})
export class IntroConfigService {
    constructor(private http: HttpClient) { }

    configUrl = 'assets/content-config/intro/intro.json';

    getConfig() {
        // now returns an Observable of Config
        return this.http.get<IntroConfig>(this.configUrl);
    }
}
