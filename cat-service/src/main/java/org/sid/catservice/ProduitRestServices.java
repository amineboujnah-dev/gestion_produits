package org.sid.catservice;

import org.sid.catservice.dao.ProduitRepository;
import org.sid.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class ProduitRestServices {
    @Autowired
    private ProduitRepository produitRepository;
    @GetMapping(value = "/listProduits")
    public List<Produit> listProduits() {
        return produitRepository.findAll();
    }
    @GetMapping(value = "/listProduits/{id}")
    public Produit listProduits(@PathVariable(name = "id") Long id) { /*@PathVariable: id vient de PathParam */
        return produitRepository.findById(id).get();
    }
    @PutMapping(value = "/listProduits/{id}")
    public Produit update(@PathVariable(name = "id") Long id,@RequestBody Produit p) { /*@PathVariable: id vient de
    PathParam, on récupère la produit, @RequestBody: les données vont etre envvoyés ver moi dans le coeur de la requete.*/
        p.setId(id);
        return produitRepository.save(p);
    }
    @PostMapping(value = "/listProduits")
    public Produit save(@RequestBody Produit p) {
        return produitRepository.save(p);
    }
    @DeleteMapping(value = "/listProduits/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        produitRepository.deleteById(id);
    }
}
