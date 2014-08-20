
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.EstadoDepartamento
 *  08/20/2014 07:29:45
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
