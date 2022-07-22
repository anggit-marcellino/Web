using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPI.Models;

namespace WebAPI.Models
{
    public class Login
    {
        public string UserName
        {
            set;
            get;
        }
        public string Password
        {
            set;
            get;
        }
    }
    public class Registration : User { }
}