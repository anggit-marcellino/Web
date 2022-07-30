using System;
using System.Linq;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("Api/Prodi")]
    public class ProdiController : ApiController
    {
        private WebAngularEntities1 objEntity = new WebAngularEntities1();
        [HttpGet]
        [Route("AllProdis")]
        public IQueryable<Prodi> GetProdis()
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
        [Route("GetProdisById/{ProdiId}")]
        public IHttpActionResult GetProdiById(string ProdiId)
        {
            Prodi objPro = new Prodi();
            int Id = Convert.ToInt32(ProdiId);
            try
            {
                objPro = objEntity.Prodis.Find(Id);
                if (objPro == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(objPro);
        }
        [HttpPost]
        [Route("InsertProdis")]
        public IHttpActionResult PostProdis(Prodi data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Prodis.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(data);
        }
        [HttpPut]
        [Route("UpdateProdis")]
        public IHttpActionResult PutProdis(Prodi prodi)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                Prodi objPro = new Prodi();
                objPro = objEntity.Prodis.Find(prodi.ProdiId);
                if (objPro != null)
                {
                    objPro.ProdiName = prodi.ProdiName;
                }
                int i = this.objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(prodi);
        }
        [HttpDelete]
        [Route("DeleteProdis")]
        public IHttpActionResult DeleteProdi(int id)
        {
            Prodi prodi = objEntity.Prodis.Find(id);
            if (prodi == null)
            {
                return NotFound();
            }
            objEntity.Prodis.Remove(prodi);
            objEntity.SaveChanges();
            return Ok(prodi);
        }
    }
}