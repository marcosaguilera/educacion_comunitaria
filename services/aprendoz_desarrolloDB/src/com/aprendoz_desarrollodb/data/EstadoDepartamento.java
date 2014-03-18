
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.EstadoDepartamento
 *  03/18/2014 08:50:36
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
