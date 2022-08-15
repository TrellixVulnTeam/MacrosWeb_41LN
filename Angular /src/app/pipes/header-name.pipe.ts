import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'header'
})
export class HeaderNamePipe implements PipeTransform {
  transform(searchText: string): string {

    if (searchText.includes('.') && !searchText.includes('=')) {
      let tempv = searchText.split('.');
      tempv.length > 1 ? searchText = tempv[1] : searchText = tempv[0];
    }

    if (searchText.includes(' AS ')) {
      let searchTextArr = searchText.split('AS');
      if (searchTextArr.length > 1) {
        return searchTextArr[1];
      }
      return searchText;
    } else if (searchText.includes(' As ')) {
      let searchTextArr = searchText.split('As');
      if (searchTextArr.length > 1) {
        return searchTextArr[1];
      }
      return searchText;
    } else if (searchText.includes(' aS ')) {
      let searchTextArr = searchText.split('aS');
      if (searchTextArr.length > 1) {
        return searchTextArr[1];
      }
      return searchText;
    } else if (searchText.includes(' as ')) {
      let searchTextArr = searchText.split('as');
      if (searchTextArr.length > 1) {
        return searchTextArr[1];
      }
      return searchText;
    } else if (searchText.includes('=')) {
      let searchTextArr = searchText.split('=');
      if (searchTextArr.length > 1) {
        return searchTextArr[0];
      }
      return searchText;
    }
    return searchText;
  }
}