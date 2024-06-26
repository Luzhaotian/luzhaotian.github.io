/**
 * 检查提供的字符串是否是有效的IP地址和端口号的组合。
 *
 * @param {string} ip - 待检查的IP地址和端口号字符串，格式为"IP:端口"。
 * @returns {boolean} - 如果字符串符合IP地址和端口号的格式，则返回true；否则返回false。
 */
export const isIP = ip => {
  // 使用正则表达式来匹配IP地址和端口号的格式
  return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)]:(\d{1,5})$/.test(
    ip
  );
};
