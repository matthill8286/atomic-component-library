export const MATCH_YOUTUBE =
  /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//
export const MATCH_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/
export const MATCH_VIMEO = /vimeo\.com\/.+/
export const MATCH_VIMEO_LIVESTREAM = /vimeo\.com\/event\/.+/
export const MATCH_TED = /embed\.ted\.com\/.+/
export const MATCH_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/
export const MATCH_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/
export const MATCH_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/
export const MATCH_MIX_CLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/

export const AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i
export const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i
export const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i
export const DASH_EXTENSIONS = /\.(mpd)($|\?)/i
export const FLV_EXTENSIONS = /\.(flv)($|\?)/

const canPlayFile = (url) => {
  if (url instanceof Array) {
    for (const item of url) {
      if (typeof item === 'string' && canPlayFile(item)) {
        return true
      }
      if (canPlayFile(item.src)) {
        return true
      }
    }
    return false
  }

  return (
    AUDIO_EXTENSIONS.test(url) ||
    VIDEO_EXTENSIONS.test(url) ||
    HLS_EXTENSIONS.test(url) ||
    DASH_EXTENSIONS.test(url) ||
    FLV_EXTENSIONS.test(url)
  )
}

export const canPlay = {
  youtube: (url) => {
    if (url instanceof Array) {
      return url.every((item) => MATCH_YOUTUBE.test(item))
    }
    return MATCH_YOUTUBE.test(url)
  },
  soundcloud: (url) => MATCH_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
  vimeo: (url) =>
    MATCH_VIMEO.test(url) &&
    !MATCH_VIMEO_LIVESTREAM.test(url) &&
    !VIDEO_EXTENSIONS.test(url) &&
    !HLS_EXTENSIONS.test(url),
  livestream: (url) => MATCH_VIMEO_LIVESTREAM.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  ted: (url) => MATCH_TED.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  facebook: (url) => MATCH_FACEBOOK.test(url) || MATCH_FACEBOOK_WATCH.test(url),
  streamable: (url) => MATCH_STREAMABLE.test(url),
  mixcloud: (url) => MATCH_MIX_CLOUD.test(url),
  file: canPlayFile,
}

export const format = (seconds) => {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

const pad = (string) => {
  return ('0' + string).slice(-2)
}

export const duration = (duration) => format(duration)

export const elapsed = (duration, played) => format(duration * played)

export const remaining = (duration, played) => format(duration * (1 - played))
