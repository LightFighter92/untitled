import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
/**
 * Created by dch61 on 12.03.2017.
 */
@Injectable()
export class UserService {

  constructor(private af: AngularFire) {

  }
}
