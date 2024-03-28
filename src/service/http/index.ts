import { createAlovaInstance } from './alova'
import { serviceConfig } from '@/../service.config'
import { generateProxyPattern } from '@/../build/proxy'

const { url } = generateProxyPattern(serviceConfig[import.meta.env.MODE])

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y' || false

export const alovaInstance = createAlovaInstance({
  baseURL: isHttpProxy ? url.proxy : url.value,
})

export const blankInstance = createAlovaInstance({
  baseURL: '',
})
