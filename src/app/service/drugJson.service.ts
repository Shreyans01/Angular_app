import { Injectable } from '@angular/core';
import * as data1 from '../drug1.json'
import * as data2 from '../drug2.json'
@Injectable({
  providedIn: 'root'
})
export class DrugJsonService {
  data1: any = (data1 as any).default;
  data2: any = (data2 as any).default;
  trash_notes_obj: any;
  constructor(
  ) {
  }

  getListingData(api, param?) {

  }


}
