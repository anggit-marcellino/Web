﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.MapHttpAttributeRoutes();

            // Web API routes
            config.Routes.MapHttpRoute(
                      name: "DefaultApi",
                      routeTemplate: "api/{controller}/{action}/{id}",
                      defaults: new
                      {
                          id = RouteParameter.Optional,
                      });

            // for JSON data into test data in POSTMAN 
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(
                   new MediaTypeHeaderValue("text/html"));

            // enable cors helps to connect with angular using http request 
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
        }
    }
}
