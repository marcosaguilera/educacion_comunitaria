
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.CafeteriaPostres
 *  02/04/2014 12:37:43
 * 
 */
public class CafeteriaPostres {

    private Integer idPostres;
    private String postre;
    private String descripcion;
    private String imageLink;

    public Integer getIdPostres() {
        return idPostres;
    }

    public void setIdPostres(Integer idPostres) {
        this.idPostres = idPostres;
    }

    public String getPostre() {
        return postre;
    }

    public void setPostre(String postre) {
        this.postre = postre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

}
