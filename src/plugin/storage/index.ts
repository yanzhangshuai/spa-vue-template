import BucketStorage from 'bucket-storage';
import { DeepReadonly } from '@/@types/global';

let storage: BucketStorage;

export function setupStorage(): void {
  storage = new BucketStorage();
}

export function useStorage(): DeepReadonly<BucketStorage> {
  return storage;
}
