export function getApiAuth(req) {
  if (!req) {
    return {}
  }

  return {
    authorization: 'Bearer ' + req.cookies.authorization,
  }
}

export function apiUrl(req) {
  if (req) {
    return `http://localhost:${process.env.PORT}`
  } else {
    return ''
  }
}
