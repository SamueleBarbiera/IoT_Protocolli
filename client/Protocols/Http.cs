using System;
using System.Net;
using System.IO;

namespace Client.Protocols
{
    class Http : ProtocolInterface
    {
        private string endpoint;
        private HttpWebRequest httpWebRequest;

        public Http(string endpoint)
        {
            this.endpoint = endpoint;
        }

        public void Send(string data)
        {
            httpWebRequest = (HttpWebRequest)WebRequest.Create(endpoint);
            httpWebRequest.ContentType = "text/json";
            httpWebRequest.Method = "POST";

            using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            {
                streamWriter.Write(data);
            }

            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();

            Console.Out.WriteLine(httpResponse.StatusCode);

            httpResponse.Close();
        }
    }
}
