import {Message} from './Envelope';
import {Message as WireMessage} from '../wire/Message';
import {Moderation as WireModeration} from '../wire/Moderation';

export type ModerationType = 'LIKE' | 'HIDE' | 'PIN' | 'SETTINGS__NO_BLOCKS' | 'SETTINGS__FOLLOWS_ONLY';

export interface Like {
  reference: string
}

export interface Pin {
  reference: string
}

export class Moderation implements Message {
  public readonly id: number;

  public readonly reference: string;

  public readonly type: ModerationType;

  constructor (id: number, reference: string, type: ModerationType) {
    this.id = id;
    this.reference = reference;
    this.type = type;
  }

  public toWire (): WireMessage {
    let subtype = Buffer.alloc(4);

    switch (this.type) {
      case "LIKE":
        subtype = WireModeration.LIKE_SUBTYPE;
        break;
      case "PIN":
        subtype = WireModeration.PIN_SUBTYPE;
        break;
      case "HIDE":
        subtype = WireModeration.HIDE_SUBTYPE;
        break;
      case "SETTINGS__FOLLOWS_ONLY":
        subtype = WireModeration.SETTINGS__FOLLOWS_ONLY_SUBTYPE;
        break;
      case "SETTINGS__NO_BLOCKS":
        subtype = WireModeration.SETTINGS__NO_BLOCKS_SUBTYPE;
        break;
      default:
        break;
    }

    return new WireModeration(
      1,
      subtype,
      Buffer.from(this.reference, 'hex'),
    );
  }
}
