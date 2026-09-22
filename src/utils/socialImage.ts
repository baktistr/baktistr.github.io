/** Return the first Markdown or HTML image in an article's source. */
export function getFirstContentImage(body: string | undefined): string | undefined {
  if (!body) return undefined;

  const markdownImage = /!\[[^\]]*\]\(\s*(?:<([^>]+)>|([^\s)]+))/g.exec(body);
  const htmlImage = /<img\b[^>]*\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi.exec(body);

  if (!markdownImage && !htmlImage) return undefined;
  if (markdownImage && (!htmlImage || markdownImage.index < htmlImage.index)) {
    return markdownImage[1] ?? markdownImage[2];
  }

  return htmlImage?.[1] ?? htmlImage?.[2] ?? htmlImage?.[3];
}
