import { defineService } from '@mwjz/asker';

export const useDemoService = defineService({
  hello(): Promise<string> {
    return this.$asker.get('app/hello');
  }
});
