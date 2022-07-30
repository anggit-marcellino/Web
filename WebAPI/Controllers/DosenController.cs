using System;
using System.Linq;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("Api/Dosen")]
    public class DosenController : ApiController
    {

        private WebAngularEntities1 objEntity = new WebAngularEntities1();
        [HttpGet]
        [Route("AllDosens")]
        public IQueryable<Dosen> GetDosen()
        {
            try
            {
                return objEntity.Dosens;
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
        [Route("GetDosensById/{dosenId}")]
        public IHttpActionResult GetDosenById(string dosenId)
        {
            Dosen objDos = new Dosen();
            int Id = Convert.ToInt32(dosenId);
            try
            {
                objDos = objEntity.Dosens.Find(Id);
                if (objDos == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(objDos);
        }

        [HttpPost]
        [Route("InsertDosens")]
        public IHttpActionResult PostDosen(Dosen data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Dosens.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(data);
        }
        [HttpPut]
        [Route("UpdateDosens")]
        public IHttpActionResult PutDosen(Dosen dosen)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                Dosen objDos = new Dosen();
                objDos = objEntity.Dosens.Find(dosen.DosenId);
                if (objDos != null)
                {
                    objDos.Nidn = dosen.Nidn;
                    objDos.DosenName = dosen.DosenName;
                    objDos.Prodi = dosen.Prodi;
                    objDos.Address = dosen.Address;
                    objDos.MailID = dosen.MailID;
                    objDos.Age = dosen.Age;
                    objDos.RegisteredDate = dosen.RegisteredDate;
                }
                int i = this.objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(dosen);
        }

        [HttpDelete]
        [Route("DeleteDosens")]
        public IHttpActionResult DeleteDosen(int id)
        {
            Dosen dosen = objEntity.Dosens.Find(id);
            if (dosen == null)
            {
                return NotFound();
            }
            objEntity.Dosens.Remove(dosen);
            objEntity.SaveChanges();
            return Ok(dosen);
        }
    }
}