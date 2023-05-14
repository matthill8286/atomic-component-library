import { canPlay } from '@/components/Atoms/VideoPlayer'

describe('canPlay helper ', () => {
  it('discerns between a Vimeo video and a livestream', () => {
    expect(canPlay.vimeo('https://player.vimeo.com/video/400223292')).toBe(true)
    expect(canPlay.vimeo('https://vimeo.com/event/1024953/embed/b887943750')).toBe(false)
    expect(canPlay.livestream('https://vimeo.com/event/1024953/embed/b887943750')).toBe(true)
    expect(canPlay.livestream('https://player.vimeo.com/video/400223292')).toBe(false)
  })
})
