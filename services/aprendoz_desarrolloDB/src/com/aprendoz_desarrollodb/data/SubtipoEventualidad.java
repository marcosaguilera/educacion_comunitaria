
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.SubtipoEventualidad
 *  08/20/2014 07:29:45
 * 
 */
public class SubtipoEventualidad {

    private Integer idSubtipoEventualidad;
    private String subtipoEventualidad;
    private TipoEventualidad tipoEventualidad;
    private Set<com.aprendoz_desarrollodb.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_desarrollodb.data.EventualidadPersonas>();

    public Integer getIdSubtipoEventualidad() {
        return idSubtipoEventualidad;
    }

    public void setIdSubtipoEventualidad(Integer idSubtipoEventualidad) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
    }

    public String getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(String subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public TipoEventualidad getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(TipoEventualidad tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public Set<com.aprendoz_desarrollodb.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_desarrollodb.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

}
