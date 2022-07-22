using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [System.Web.Http.RoutePrefix("Api/Mahasiswa")]
    public class MahasiswaController : ApiController
    {
        private WebAngularEntities1 objEntity = new WebAngularEntities1();
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("AllMahasiswas")]
        public IQueryable<Mahasiswa> GetMahasiswa()
        {
            try
            {
                return objEntity.Mahasiswas;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("Prodi")]
        public IQueryable<Prodi> GetProdi()
        {
            try
            {
                return objEntity.Prodis;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetMahasiswasById/{mahasiswaId}")]
        public IHttpActionResult GetMahasiswaById(string mahasiswaId)
        {
            Mahasiswa objMah = new Mahasiswa();
            int Id = Convert.ToInt32(mahasiswaId);
            try
            {
                objMah = objEntity.Mahasiswas.Find(Id);
                if (objMah == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(objMah);
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("InsertMahasiswas")]
        public IHttpActionResult PostMahasiswa(Mahasiswa data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Mahasiswas.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(data);
        }
        [System.Web.Http.HttpPut]
        [System.Web.Http.Route("UpdateMahasiswas")]
        public IHttpActionResult PutDosen(Mahasiswa mahasiswa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                Mahasiswa objMah = new Mahasiswa();
                objMah = objEntity.Mahasiswas.Find(mahasiswa.MahasiswaId);
                if (objMah != null)
                {
                    objMah.Nim = mahasiswa.Nim;
                    objMah.MahasiswaName = mahasiswa.MahasiswaName;
                    objMah.Prodi = mahasiswa.Prodi;
                    objMah.Address = mahasiswa.Address;
                    objMah.MailID = mahasiswa.MailID;
                    objMah.Age = mahasiswa.Age;
                    objMah.RegisteredDate = mahasiswa.RegisteredDate;
                }
                int i = this.objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(mahasiswa);
        }

        [System.Web.Http.HttpDelete]
        [System.Web.Http.Route("DeleteMahasiswas")]
        public IHttpActionResult DeleteMahasiswa(int id)
        {
            Mahasiswa mahasiswa = objEntity.Mahasiswas.Find(id);
            if (mahasiswa == null)
            {
                return NotFound();
            }
            objEntity.Mahasiswas.Remove(mahasiswa);
            objEntity.SaveChanges();
            return Ok(mahasiswa);
        }
    }
}