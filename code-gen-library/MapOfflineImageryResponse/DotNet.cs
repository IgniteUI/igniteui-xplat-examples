//begin imports
using System;
using Infragistics.Controls.Maps;
//end imports

public class MapOfflineImageryResponse
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Maps.ImageryRequestEventHandler
    public void MapOfflineImageryResponse(object sender, ImageryRequestEventArgs args)
    {
        switch (args.RequestType)
        {
            case "BingMetadata": args.ResponseContent = @"{""resourceSets"":[{""resources"":[{""imageUrl"":""https://tiles.invalid/bing/{quadkey}.png"",""imageUrlSubdomains"":[""t0""],""zoomMin"":0,""zoomMax"":23,""imageryProviders"":[]}]}]}"; break;
            case "ArcGISToken": args.ResponseContent = @"{""token"":""offline-token"",""expires"":4102444800000}"; break;
            case "ArcGISMapServer": args.ResponseContent = @"{""tileInfo"":{""lods"":[{""level"":0},{""level"":1},{""level"":2},{""level"":3},{""level"":4},{""level"":5},{""level"":6},{""level"":7},{""level"":8},{""level"":9},{""level"":10},{""level"":11},{""level"":12},{""level"":13},{""level"":14},{""level"":15},{""level"":16},{""level"":17},{""level"":18},{""level"":19},{""level"":20},{""level"":21},{""level"":22},{""level"":23}]}}"; break;
            case "Tile": args.ResponseContent = CreateOfflineTile(args.TileLevel - 8, args.TilePositionX, args.TilePositionY); break;
        }
    }

    private string CreateOfflineTile(int zoom, int x, int y)
    {
        // An uncompressed 24-bit BMP uses the same bytes on every platform. No drawing API,
        // service, font installation, image encoder, or platform-specific bit packing is needed.
        var image = new byte[54 + 256 * 256 * 3];
        image[0] = 66; image[1] = 77;
        WriteTileInt(image, 2, image.Length);
        WriteTileInt(image, 10, 54);
        WriteTileInt(image, 14, 40);
        WriteTileInt(image, 18, 256);
        WriteTileInt(image, 22, 256);
        image[26] = 1; image[28] = 24;
        WriteTileInt(image, 34, image.Length - 54);
        for (var row = 0; row < 256; row++)
        {
            for (var col = 0; col < 256; col++)
            {
                var offset = 54 + (row * 256 + col) * 3;
                var border = row < 2 || col < 2 || row >= 254 || col >= 254;
                image[offset] = border ? (byte)48 : (byte)(216 + (x & 3) * 8);
                image[offset + 1] = border ? (byte)48 : (byte)(216 + (y & 3) * 8);
                image[offset + 2] = border ? (byte)48 : (byte)(216 + (zoom & 3) * 8);
            }
        }
        DrawTileLabel(image, "Z=" + zoom, 32);
        DrawTileLabel(image, "X=" + x, 96);
        DrawTileLabel(image, "Y=" + y, 160);
        return "data:image/bmp;base64," + Convert.ToBase64String(image);
    }

    private void WriteTileInt(byte[] image, int offset, int value)
    {
        for (var i = 0; i < 4; i++) image[offset + i] = (byte)(value >> (i * 8));
    }

    private void DrawTileLabel(byte[] image, string text, int top)
    {
        const string font = "111101101101111010110010010111111001111100111111001111001111101101111001001111100111001111111100111101111111001001001001111101111101111111101111001111111001010100111101101010101101101101010010010000000111000000000111000111000";
        const string characters = "0123456789ZXY-=";
        for (var index = 0; index < text.Length; index++)
        {
            var glyph = characters.IndexOf(text[index]);
            if (glyph < 0) continue;
            for (var row = 0; row < 5; row++)
            {
                for (var col = 0; col < 3; col++)
                {
                    if (font[glyph * 15 + row * 3 + col] != '1') continue;
                    for (var dy = 0; dy < 4; dy++)
                    {
                        for (var dx = 0; dx < 4; dx++)
                        {
                            var px = 16 + index * 16 + col * 4 + dx;
                            var py = top + row * 4 + dy;
                            if (px >= 254) continue;
                            var offset = 54 + ((255 - py) * 256 + px) * 3;
                            image[offset] = 32; image[offset + 1] = 32; image[offset + 2] = 32;
                        }
                    }
                }
            }
        }
    }
    //end eventHandler
}
