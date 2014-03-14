
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoActividad
 *  02/19/2014 10:16:55
 * 
 */
public class TipoActividad {

    private Integer idTipoActividad;
    private String tipoActividad;
    private Set<com.aprendoz_desarrollodb.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollodb.data.Actividad>();

    public Integer getIdTipoActividad() {
        return idTipoActividad;
    }

    public void setIdTipoActividad(Integer idTipoActividad) {
        this.idTipoActividad = idTipoActividad;
    }

    public String getTipoActividad() {
        return tipoActividad;
    }

    public void setTipoActividad(String tipoActividad) {
        this.tipoActividad = tipoActividad;
    }

    public Set<com.aprendoz_desarrollodb.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollodb.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
