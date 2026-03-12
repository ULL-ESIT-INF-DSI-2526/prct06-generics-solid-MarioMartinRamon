interface Reproducible<T> {
  data(): T;
  duration(): number;
}

export class Song implements Reproducible<string> {
  private _title: string;
  private _artist: string;
  private _duration: number;
  private _gender: string;
  private _album: string;

  constructor(
    title: string,
    artist: string,
    duration: number,
    album: string,
    gender: string
  ) {
    this._title = title;
    this._artist = artist;
    this._duration = duration;
    this._album = album;
    this._gender = gender;
  }

  data(): string {
    return `${this._title} - ${this._artist}`;
  }

  duration(): number {
    return this._duration;
  }

  get title(): string {
    return this._title;
  }

  get artist(): string {
    return this._artist;
  }

  get album(): string {
    return this._album;
  }

  get gender(): string {
    return this._gender;
  }
}

interface Pod {
  title: string;
  presenter: string;
}

export class Podcast implements Reproducible<Pod> {
  private _title: string;
  private _episode: number;
  private _theme: string;
  private _presenter: string;
  private _ini: Date;
  private _end: Date;

  constructor(
    title: string,
    episode: number,
    theme: string,
    presenter: string,
    ini: Date,
    end: Date
  ) {
    this._title = title;
    this._episode = episode;
    this._theme = theme;
    this._presenter = presenter;
    this._ini = ini;
    this._end = end;
  }

  data(): Pod {
    return {
      title: this._title,
      presenter: this._presenter,
    };
  }

  duration(): number {
    return (this._end.getTime() - this._ini.getTime()) / 1000;
  }

  get title(): string {
    return this._title;
  }

  get episode(): number {
    return this._episode;
  }

  get theme(): string {
    return this._theme;
  }

  get presenter(): string {
    return this._presenter;
  }

  get ini(): Date {
    return this._ini;
  }

  get end(): Date {
    return this._end;
  }
}

export class History<T extends Reproducible<T | string>> {
  private _items: T[];

  constructor() {
    this._items = [];
  }

  add(item: T): void {
    this._items.push(item);
  }
  remove(index: number): void {
    this._items.splice(index, 1);
  }
  get(index: number): T {
    return this._items[index];
  }
  filter(predicate: (item: T) => boolean): History<T> {
    const filteredHistory = new History<T>();
    this._items.filter(predicate).forEach((item) => filteredHistory.add(item));
    return filteredHistory;
  }

  duration(): number {
    return this._items.reduce((total, item) => total + item.duration(), 0);
  }
}
