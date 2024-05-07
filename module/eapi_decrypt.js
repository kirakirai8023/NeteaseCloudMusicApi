const { eapiResDecrypt, eapiReqDecrypt } = require('../util/crypto')

module.exports = async (query, request) => {
  const hexString = query.hexString
  const isFormat = query.isFormat != 'false'
  if (!hexString) {
    return {
      status: 400,
      body: {
        code: 400,
        message: 'hex string is required',
      },
    }
  }
  // 去除空格
  let pureHexString = hexString.replace(/\s/g, '')
  return {
    status: 200,
    body: {
      code: 200,
      data: isFormat
        ? eapiReqDecrypt(pureHexString)
        : eapiResDecrypt(pureHexString),
    },
  }
}