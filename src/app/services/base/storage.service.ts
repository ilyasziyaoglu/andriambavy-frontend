import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  storage = {};

  constructor() {
    this.init();
  }

  init() {
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
      const value = localStorage.getItem(keys[i]);
      try {
        this.storage[keys[i]] = JSON.parse(value);
      } catch (e) {
        this.storage[keys[i]] = value;
      }
    }
  }

  setItem(key: string, value: any) {
    this.storage[key] = value;
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
}
