// api/top-tracks.js
import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../lib/spotify";

export const runtime = 'edge';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    cover: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ tracks });
}
