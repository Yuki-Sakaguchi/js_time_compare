/**
 * 日付を比較する
 * @param {string} yyyy 
 * @param {string} mm
 * @param {string} dd
 */
var CompareDate = function(yyyy, mm, dd, delimiter) {
  // ベースとなる日付を入れる
  // なければ今日
  this.now = new Date();
  this.yyyy = (yyyy && yyyy.match(/[0-9]{4}/)) ? yyyy : this.now.getFullYear();
  this.mm = (mm && mm.match(/[0-9]{1,2}/)) ? mm : this.now.getMonth() + 1;
  this.dd = (dd && dd.match(/[0-9]{1,2}/)) ? dd : this.now.getDate();
  this.delimiter = delimiter || "/";
}

/**
 * ベース日付を表示
 */
CompareDate.prototype.getDate = function() {
  console.log(this.yyyy + this.delimiter + this.mm + this.delimiter + this.mm + this.delimiter + this.dd);
}

/**
 * ベースの日付と引数の日付を比較して関数を動かす
 * @param {string} yyyy
 * @param {string} mm
 * @param {string} dd
 * @param {function} func1
 * @param {function} func2
 */
CompareDate.prototype.compare = function(tmpyyyy, tmpmm, tmpdd, func1, func2) {
  var yyyy = (tmpyyyy && tmpyyyy.match(/[0-9]{4}/)) ? tmpyyyy : this.now.getFullYear();
  var mm = (tmpmm && tmpmm.match(/[0-9]{1,2}/)) ? tmpmm : this.now.getMonth() + 1;
  var dd = (tmpdd && tmpdd.match(/[0-9]{1,2}/)) ? tmpdd : this.now.getDate();

  var baseDate = Date.UTC(this.yyyy, this.mm, this.dd);
  var compareDate = Date.UTC(yyyy, mm, dd);

  console.log(baseDate)
  console.log(compareDate)
  
  if (compareDate < baseDate) {
    // インスタンスの日付の方が大きい場合
    (typeof func1 === 'function') && func1();
  } else {
    // 引数の日付の方が大きい場合
    (typeof func2 === 'function') && func2();
  }
}
