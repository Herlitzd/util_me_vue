import axios from 'axios';
import { Service, Import } from 'vue-di-attributes';
import { ConfigService } from './config.service';

@Service
export class SessionService {
  @Import()
  config: ConfigService

  /**
   * Login
   */
  public Login(email, password) {
    return axios.post(this.config.path + '/session',
                  { email: email, password: password },
                  { withCredentials: true })
      .then(e => e.data)
  }

  /**
   * Tries to use a cookie that the user may or
   * may not have to hydrate the vuex store.
   */
  public TryToAuthenticate() {
    return axios.post(this.config.path + '/session/attempt', null, { withCredentials: true })
      .then(e => e.data)
  }
}