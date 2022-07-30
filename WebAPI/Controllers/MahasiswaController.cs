using System;
using System.Linq;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("Api/Mahasiswa")]
    public class MahasiswaController : ApiController
    {
        private WebAngularEntities1 objEntity = new WebAngularEntities1();
        [HttpGet]
        [Route("AllMahasiswas")]
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

        [HttpGet]
        [Route("Prodi")]
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

        [HttpGet]
        [Route("GetMahasiswasById/{mahasiswaId}")]
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

        [HttpPost]
        [Route("InsertMahasiswas")]
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
        [HttpPut]
        [Route("UpdateMahasiswas")]
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

        [HttpDelete]
        [Route("DeleteMahasiswas")]
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