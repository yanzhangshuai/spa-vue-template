import BucketStorage from 'bucket-storage';

let storage: BucketStorage;

export function setupStorage(): void {
  storage = new BucketStorage();
}

export function useStorage(): BucketStorage {
  return storage;
}
