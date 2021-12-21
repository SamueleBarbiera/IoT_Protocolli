using System;
using System.Collections.Generic;
using Client.Sensors;
using Client.Protocols;

namespace Client
{
    class Program
    {
        static void Main(string[] args)
        {

            // init sensors
            List<SensorInterface> sensors = new List<SensorInterface>();
            sensors.Add(new VirtualSpeedSensor());

            // define protocol
            ProtocolInterface protocol = new Http("http://localhost:9000/drones/123");  //SAMUELE IP 192.169.200.1

            // send data to server
            while (true)
            {
                foreach (SensorInterface sensor in sensors)
                {
                    protocol.Send(sensor.toJson());

                    Console.WriteLine("Data sent: " + sensor.toJson());

                    System.Threading.Thread.Sleep(1000);

                }

            }

        }

    }

}
