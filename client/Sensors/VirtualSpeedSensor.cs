using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Globalization;

namespace Client.Sensors
{
    class VirtualSpeedSensor : SpeedSensorInterface, SensorInterface
    {
        public string toJson()
        {
            return "{\"speed\": " + Convert.ToString(GetSpeed()) + "}";
        }

        public int GetSpeed()
        {
            var random = new Random();
            return random.Next(100);
        }
    }
}
