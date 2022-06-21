export class LocalStorageService<T> {
  public getItem(key: string): T | null {
    const text = localStorage.getItem(key);

    return !!text ? JSON.parse(text) : null;
  }

  public getItems(key: string): T[] {
    const text = localStorage.getItem(key);

    return !!text ? JSON.parse(text) : [];
  }

  public setItem(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public setItems(key: string, values: T[]): void {
    localStorage.setItem(key, JSON.stringify(values || []));
  }
}
