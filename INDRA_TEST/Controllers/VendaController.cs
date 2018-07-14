using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using INDRA_TEST.Models;

namespace INDRA_TEST.Controllers
{
    public class VendaController : Controller
    {
        #region Método para Adicionar Venda - CREATE

        //POST Venda/AdicionarVenda
        [HttpPost]
        public JsonResult AdicionarVenda(Venda venda)
        {
            if (venda != null)
            {
                using (var db = new INDRA_TESTEntities())
                {

                    foreach (var vendaProduto in venda.VendaProduto)
                    {
                        var produtoAtualizado = db.Produtos.Find(vendaProduto.Produto.IdProduto);
                        vendaProduto.Produto = produtoAtualizado;
                        vendaProduto.Produto.Qntd = vendaProduto.Produto.Qntd - vendaProduto.Qntd;

                        if (produtoAtualizado.Qntd < 0)
                        {
                            return Json(new { success = false });
                        }

                        db.VendaProdutos.Add(vendaProduto);
                    }

                    db.Vendas.Add(venda);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion
    }
}