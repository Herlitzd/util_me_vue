import { Service, Import } from 'vue-di-attributes';
declare const process;

@Service
export class ConfigService {
  
  private get env() {
    return process.env;
  }
  public get path(): string {
    return this.env['API_PATH'];
  }

}