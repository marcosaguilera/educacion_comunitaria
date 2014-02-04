
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.EstadoDepartamento
 *  02/04/2014 12:37:43
 * 
 */
public class EstadoDepartamento {

    private Integer idEstados;
    private String estado;
    private Pais pais;

    public Integer getIdEstados() {
        return idEstados;
    }

    public void setIdEstados(Integer idEstados) {
        this.idEstados = idEstados;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

}
