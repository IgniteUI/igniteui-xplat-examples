//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Linq;
//end imports

public class MapGeodesicsOnViewInit
{
    //begin eventHandler
    public class GeoLocation
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
    }

    public class WorldCity
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public string Name { get; set; }
        public bool Cap { get; set; }
    }

    public static class WorldUtils
    {
        public static List<List<Point>> CalcPaths(GeoLocation origin, GeoLocation dest)
        {
            int interval = 200;
            var paths = new List<List<Point>>() { new List<Point>() };
            int pathID = 0;
            double distance = WorldUtils.CalcDistance(origin, dest);

            if (distance <= interval)
            {
                paths[pathID].Add(new Point() { X = dest.Lon, Y = dest.Lat });
            }
            else
            {
                GeoLocation current = origin;
                GeoLocation previous = origin;

                for(int dist = interval; dist <= distance; dist += interval)
                {
                    previous = current;

                    paths[pathID].Add(new Point() { X = current.Lon, Y = current.Lat });

                    double bearing = WorldUtils.CalcBearing(current, dest);
                    current = WorldUtils.CalcDestination(current, bearing, interval);

                    if (previous.Lon > 150 && current.Lon < -150)
                    {
                        paths[pathID].Add(new Point() { X = 180, Y = current.Lat });
                        paths.Add(new List<Point>());
                        pathID++;
                        current = new GeoLocation() { Lon = -180, Lat = current.Lat };
                    }
                    else if(previous.Lon < -150 && current.Lon > 150)
                    {
                        paths[pathID].Add(new Point() { X = -180, Y = current.Lat });
                        paths.Add(new List<Point>());
                        pathID++;
                        current = new GeoLocation() { Lon = 180, Lat = current.Lat };
                    }
                }

                paths[pathID].Add(new Point() { X = dest.Lon, Y = dest.Lat });

            }

            return paths;

        }

        public static double CalcBearing(GeoLocation origin, GeoLocation dest)
        {
            origin = WorldUtils.ToRadianLocation(origin);
            dest = WorldUtils.ToRadianLocation(dest);

            double range = (dest.Lon - origin.Lon);

            double y = Math.Sin(range) * Math.Cos(dest.Lat);
            double x = Math.Cos(origin.Lat) * Math.Sin(dest.Lat) - Math.Sin(origin.Lat) * Math.Cos(dest.Lat) * Math.Cos(range);
            double angle = Math.Atan2(y, x);

            return WorldUtils.ToDegreesNormalized(angle);
        }

        public static GeoLocation CalcDestination(GeoLocation origin, double bearing, double distance)
        {
            double radius = 6371.0;

            origin = WorldUtils.ToRadianLocation(origin);
            bearing = WorldUtils.ToRadians(bearing);

            distance = distance / radius;

            double lat = Math.Asin(Math.Sin(origin.Lat) * Math.Cos(distance) +
               Math.Cos(origin.Lat) * Math.Sin(distance) * Math.Cos(bearing));
            double x = Math.Sin(bearing) * Math.Sin(distance) * Math.Cos(origin.Lat);
            double y = Math.Cos(distance) - Math.Sin(origin.Lat) * Math.Sin(origin.Lat);
            double lon = origin.Lon + Math.Atan2(x, y);
            // normalize lon to coordinate between -180º and +180º
            lon = (lon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

            lon = WorldUtils.ToDegrees(lon);
            lat = WorldUtils.ToDegrees(lat);

            return new GeoLocation() { Lat = lat, Lon = lon };
        }

        public static double CalcDistance(GeoLocation origin, GeoLocation dest)
        {
            origin = WorldUtils.ToRadianLocation(origin);
            dest = WorldUtils.ToRadianLocation(dest);

            double sinProd = Math.Sin(origin.Lat) * Math.Sin(dest.Lat);
            double cosProd = Math.Cos(origin.Lat) * Math.Cos(dest.Lat);
            double lonDelta = (dest.Lon - origin.Lon);

            double angle = Math.Acos(sinProd + cosProd * Math.Cos(lonDelta));
            double distance = angle * 6371.0;
            return distance;
        }

        public static GeoLocation ToRadianLocation(GeoLocation geoPoint)
        {
            double x = WorldUtils.ToRadians(geoPoint.Lon);
            double y = WorldUtils.ToRadians(geoPoint.Lat);

            return new GeoLocation() { Lon = x, Lat = y };
        }

        public static double ToRadians(double degrees)
        {
            return degrees * Math.PI / 180;
        }

        public static double ToDegrees(double radians)
        {
            return (radians * 180.0 / Math.PI);
        }

        public static double ToDegreesNormalized(double radians)
        {
            double degrees = WorldUtils.ToDegrees(radians);
            degrees = (degrees + 360) % 360;
            return degrees;
        }

        public static string ToStringLat(double latitude)
        {
            string str = Math.Abs(latitude) + "°";
            return latitude > 0 ? str + "N" : str + "S";
        }

        public static string ToStringLon(double coordinate)
        {
            double val = Math.Abs(coordinate);
            string str = val.ToString();
            return coordinate > 0 ? str + "°E" : str + "°W";
        }

        public static string ToStringAbbr(double value)
        {
            if (value > 1000000000000)
            {
                return (value / 1000000000000).ToString("N1") + " T";
        }
            else if (value > 1000000000)
            {
                return (value / 1000000000).ToString("N1") + " B";
          }
            else if (value > 1000000)
            {
                return (value / 1000000).ToString("N1") + " M";
          }
            else if (value > 1000)
            {
                return (value / 1000).ToString("N1") + " K";
          }
            return value.ToString("N0");
        }

        public static double GetLongitude(GeoLocation location)
        {
            return location.Lon;
        }

        public static double GetLatitude(GeoLocation location)
        {
            return location.Lat;
        }

        public static Rect GetBounds(List<GeoLocation> locations)
        {
            double minLat = 90;
            double maxLat = -90;
            double minLon = 180;
            double maxLon = -180;

            foreach(GeoLocation gl in locations)
            {
                double curLon = WorldUtils.GetLongitude(gl);
                double curLat = WorldUtils.GetLatitude(gl);

                if (!double.IsNaN(curLon))
                {
                    minLon = Math.Min(minLon, curLon);
                    maxLon = Math.Max(maxLon, curLon);
                }

                if (!double.IsNaN(curLat))
                {
                    minLat = Math.Min(minLat, curLat);
                    maxLat = Math.Min(maxLat, curLat);
                }
            }

            Rect geoBounds = new Rect(minLon, minLat, Math.Abs(maxLon - minLon), Math.Abs(maxLat - minLat));
            return geoBounds;
        }

        public static List<Point> GetNightShapes()
        {
            List<Point> line = new List<Point>();

            for(int lon = -180; lon <= 180; lon += 1)
            {
                double x = lon;
                double y = 75 * Math.Cos(lon * Math.PI / 180);
                line.Add(new Point(x, y));
            }

            return line;
        }
    }

    public class FlightInfo
    {
        public WorldCity Origin { get; set; }
        public WorldCity Dest { get; set; }
        public double Distance { get; set; }
        public double Time { get; set; }
        public List<List<Point>> Points { get; set; }
        public string Color { get; set; }
    }

    /// <summary>
    /// Nothing to do when the view appears; this item is here for the types and the geodesic
    /// helpers above, which the handlers listed after it use. Every item in an init list puts its
    /// members on the same component, which is how they reach each other without an import.
    /// </summary>
    //WPF: System.Action
    public void MapGeodesicsOnViewInit()
    {
    }
    //end eventHandler
}
