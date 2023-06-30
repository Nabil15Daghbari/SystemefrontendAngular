/* tslint:disable */
import { InputStream } from './input-stream';
export interface ByteArrayResource {
  byteArray?: Array<string>;
  description?: string;
  inputStream?: InputStream;
  open?: boolean;
  file?: Blob;
  readable?: boolean;
  url?: string;
  filename?: string;
  uri?: string;
}
