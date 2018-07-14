using INDRA_TEST.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace INDRA_TEST.Controllers
{
    public class ProdutoController : Controller
    {
        #region Método para listar produto - READ

        // GET Produto/GetProduto
        public JsonResult GetProduto()
        {
            using (var db = new INDRA_TESTEntities())
            {
                List<Produto> listarProdutos = db.Produtos.ToList();

                return Json(listarProdutos, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Método para Adicionar Produto - CREATE

        //POST Produto/AdicionarProduto
        [HttpPost]
        public JsonResult AdicionarProduto(Produto produto)
        {
            if (produto != null)
            {
                using (var db = new INDRA_TESTEntities())
                {
                    db.Produtos.Add(produto);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Método para Atualizar Produto - UPDATE

        [HttpPost]
        public JsonResult AtualizarProduto(Produto produto)
        {
            using (var db = new INDRA_TESTEntities())
            {
                var produtoAtualizado = db.Produtos.Find(produto.IdProduto);

                if (produtoAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    if(produtoAtualizado.Descricao != null)
                    {
                        produtoAtualizado.Descricao = produto.Descricao;
                    }
                    if (produtoAtualizado.Preco != 0)
                    {
                        produtoAtualizado.Preco = produto.Preco;
                    }
                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Método para Excluir Produto - DELETE

        [HttpPost]
        public JsonResult ExcluirProduto(int id)
        {
            using (var db = new INDRA_TESTEntities())
            {
                var produto = db.Produtos.Find(id);
                if (produto == null)
                {
                    return Json(new { success = false });
                }

                db.Produtos.Remove(produto);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}
