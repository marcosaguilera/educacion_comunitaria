
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoEventualidad
 *  02/04/2014 12:37:42
 * 
 */
public class TipoEventualidad {

    private Integer idTipoEventualidad;
    private String tipoEventualidad;
    private Set<com.aprendoz_desarrollodb.data.SubtipoEventualidad> subtipoEventualidads = new HashSet<com.aprendoz_desarrollodb.data.SubtipoEventualidad>();

    public Integer getIdTipoEventualidad() {
        return idTipoEventualidad;
    }

    public void setIdTipoEventualidad(Integer idTipoEventualidad) {
        this.idTipoEventualidad = idTipoEventualidad;
    }

    public String getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(String tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public Set<com.aprendoz_desarrollodb.data.SubtipoEventualidad> getSubtipoEventualidads() {
        return subtipoEventualidads;
    }

    public void setSubtipoEventualidads(Set<com.aprendoz_desarrollodb.data.SubtipoEventualidad> subtipoEventualidads) {
        this.subtipoEventualidads = subtipoEventualidads;
    }

}
