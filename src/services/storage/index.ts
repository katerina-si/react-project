class StorageClass  {
  private storage: Storage;
  constructor(typeStorage: string = 'local') {
    // @ts-ignore
    this.storage = window[`${typeStorage}Storage`]; /* eslint-disable-line no-undef */
  }

  setItem = (key: string, value: unknown) => {
    const item = JSON.stringify(value);
    try {
      this.storage.setItem(key, item);
    } catch (e) {
      // continue regardless of error
    }
  };

  getItem = (key: string): unknown => {
    const itemJson = this.storage.getItem(key);

    if (!itemJson) {
      return null;
    }

    return JSON.parse(itemJson);
  };

  clear = (key: string) => this.storage.removeItem(key);

  clearAll = () => {
    Object.keys(this.storage).forEach(key => {
      this.storage.removeItem(key);
    });
  };
}

const local = new StorageClass("local");
const session = new StorageClass("session");

export { local, session };
