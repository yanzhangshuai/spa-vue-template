import md5 from 'crypto-js/md5';
import ECB from 'crypto-js/mode-ecb';
import UTF8 from 'crypto-js/enc-utf8';
import pkcs7 from 'crypto-js/pad-pkcs7';
import Base64 from 'crypto-js/enc-base64';
import { parse } from 'crypto-js/enc-utf8';
import { encrypt, decrypt } from 'crypto-js/aes';
import { CipherOption, WordArray } from 'crypto-js';

export function encryptByBase64(cipherText: string): string {
  return UTF8.parse(cipherText).toString(Base64);
}

export function decodeByBase64(cipherText: string): string {
  return Base64.parse(cipherText).toString(UTF8);
}

export function encryptByMd5(cipherText: string): string {
  return md5(cipherText).toString();
}

export interface EncryptionParams {
  key: string;
  iv: string;
}

export class AesEncryption {
  private readonly key: WordArray;
  private readonly iv: WordArray;

  constructor(opt: Partial<EncryptionParams> = {}) {
    const { key, iv } = opt;
    key && (this.key = parse(key));
    iv && (this.key = parse(iv));
  }

  get getOptions(): CipherOption {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv
    };
  }

  encryptByAES(cipherText: string): string {
    return encrypt(cipherText, this.key, this.getOptions).toString();
  }

  decryptByAES(cipherText: string): string {
    return decrypt(cipherText, this.key, this.getOptions).toString(UTF8);
  }
}
