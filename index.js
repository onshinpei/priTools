/**
 * node 支持 btoa 编码
 * @param input
 * @returns {string}
 */
exports.btoa2 = function(input) {
  var str = String (input);
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars, output = '';
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt (idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt (63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt (idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new InvalidCharacterError ("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }
    block = block << 8 | charCode;
  }
  return output;
};