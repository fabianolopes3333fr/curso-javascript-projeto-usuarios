class Utils {
  static dateFormat(date){

    return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' as '+date.getHours()+':'+date.getMinutes();
  }
}