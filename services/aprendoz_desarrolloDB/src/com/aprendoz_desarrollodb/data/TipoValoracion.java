
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoValoracion
 *  03/14/2014 11:48:13
 * 
 */
public class TipoValoracion {

    private Integer idTipoValoracion;
    private String tipoValoracion;
    private Set<com.aprendoz_desarrollodb.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollodb.data.Actividad>();

    public Integer getIdTipoValoracion() {
        return idTipoValoracion;
    }

    public void setIdTipoValoracion(Integer idTipoValoracion) {
        this.idTipoValoracion = idTipoValoracion;
    }

    public String getTipoValoracion() {
        return tipoValoracion;
    }

    public void setTipoValoracion(String tipoValoracion) {
        this.tipoValoracion = tipoValoracion;
    }

    public Set<com.aprendoz_desarrollodb.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollodb.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
