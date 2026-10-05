import { ogSize, renderOgImage } from "@/lib/ogImage";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Kishor Career Point – NEET, JEE and Foundation coaching";

export default function OpenGraphImage() {
  return renderOgImage();
}
