import { Inject, Injectable, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
@Pipe({ name: 'relativeTimespan', pure: false })
export class RelativeTimespanPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string, private translate: TranslateService) {}

  public calculateRelativeTimespan(date: Date): string {
    const diff: number = Date.now() - new Date(date).getTime();
    if (diff < 0) {
      console.warn('Something went wrong with local time');
      return this.translate.instant(' just now');
    }

    const days: number = Math.floor(diff / (60 * 60 * 24 * 1000));

    if (days > 0) {
      return days + ` ${days > 1 ? ' days' : ' day'} ago`;
    }

    const hours: number = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    if (hours > 0) {
      return hours + ` ${hours > 1 ? this.translate.instant('hours') : this.translate.instant('hour')} ${this.translate.instant('ago')}`;
    }

    const minutes: number = Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    if (minutes > 0) {
      // tslint:disable-next-line:max-line-length
      return minutes + ` ${minutes > 1 ? this.translate.instant('minutes') : this.translate.instant(' minute')} ${this.translate.instant('ago')}`;
    }

    return this.translate.instant(' just now');
  }

  public calculateAmountOfDayToPresent(value: Date): number {
    const diff: number = Date.now() - new Date(value).getTime();
    return Math.floor(diff / (60 * 60 * 24 * 1000));
  }

  public transform(value: Date): string {
    if (this.calculateAmountOfDayToPresent(value) >= 1) {
      return new DatePipe(this.locale).transform(value, 'dd/MM/yyyy');
    }
    return this.calculateRelativeTimespan(new Date(value));
  }
}
