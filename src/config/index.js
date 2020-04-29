export const getBaseUrl = () => {
  const VUE_APP_API_TYPE = process.env.VUE_APP_API_TYPE
  const apiObj = {
    dev: 'http://gateway-dev-zto.songyelin.com/',
    test: 'http://gateway-dev-zto.songyelin.com/',
    pre: 'http://gateway-pre-zto.songyelin.com/',
    production: 'http://gateway.songyelin.com/'
  }

  if (process.env.NODE_ENV === 'development') {
    return apiObj.test
  }
  return apiObj[VUE_APP_API_TYPE]
}
