import { Win } from '@/win';

export function getHello() {
  return Win.http.get('app/hello');
}
