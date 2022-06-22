import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ModelPageComponent } from 'src/app/projects/component/model-page/model-page.component';
import { ModalController } from '@ionic/angular';

const ApiKey = environment.ApiKey

@Injectable({
  providedIn: 'root'
})
export class RecentmoviesService {
  currentModel = [];
  constructor(private http: HttpClient, public modalController: ModalController) { }

 //    const requestUrl = 'https://api.themoviedb.org/3/genre/list?api_key=d0424b3b44e681c7d399af0fb11d6091&page=1&language=pt-BR';
 getGenreList(type: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${ApiKey}&language=pt-BR`;
  return this.http.get(url);
}

getTrendingList(type: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${ApiKey}&language=pt-BR`;
  return this.http.get(url);
}

getPopularList(type: string, page: number, genres: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${ApiKey}&language=pt-BR&page=${page}&with_genres=${genres}`;
  return this.http.get(url);
}

getDetailsList(type: string, id: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=pt-BR`;
  return this.http.get(url);
}

getCreditList(type: string, id: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=pt-BR`;
  return this.http.get(url);
}

getVideoList(type: string, id: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=pt-BR`;
  return this.http.get(url);
}

getRecommendationList(type: string, id: string): Observable<any>{
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=pt-BR`;
  return this.http.get(url);
}

async presentModal(modelItem, type) {
  const modal = await this.modalController.create({
    component: ModelPageComponent,
    componentProps: {
      modelItemList: modelItem,
      modelType: type
    }
  });

  this.currentModel.push(modal);
  return await modal.present();
}

dismissModel() {
  this.currentModel[this.currentModel.length - 1].dismiss().then(() => { this.currentModel.pop(); });
}

getSearchList(type: string, page: number, query: string): Observable<any> {
  const requestURL = `https://api.themoviedb.org/3/search/${type}?api_key=${ApiKey}&language=pt-BR&page=${page}&query=${query}`;
  return this.http.get(requestURL);
}

}

