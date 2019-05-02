import { request } from '../../config/http-requests'

const IP_DO_HIRUMITSU = 'http://10.0.2.216:8762'

// POST - Request na Auth que retorna o Token
export const getAccessToken = async (username, password) => {
  return await request({
    url: `${IP_DO_HIRUMITSU}/caronte/auth`,
    method: 'post',
    data: {
      username,
      password,
    },
  })
}

// GET - Request na Kirby para retornar arvore de diretorios do usuario(token)
export const getKirbyDirectories = async token => {
  return await request({
    url: `${IP_DO_HIRUMITSU}/kirby/tree`,
    method: 'get',
    headers: { Authorization: token },
  })
}

// GET - Request na Kirby para retornar o diretório/arquivo por queryString do usuario(token)
export const getKirbyArchives = async (token, path) => {
  return await request({
    url: `${IP_DO_HIRUMITSU}/kirby/note?path=${path}`,
    method: 'get',
    headers: { Authorization: token },
  })
}

// POST - Request para criar/mudar um diretório/arquivo do usuario(token)
export const setNote = async (token, note, directory) => {
  return await request({
    url: `${IP_DO_HIRUMITSU}/kirby/note`,
    method: 'post',
    headers: { Authorization: token },
    data: {
      path: directory,
      content: note,
    },
  })
}
