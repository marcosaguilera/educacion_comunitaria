
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoLugar
 *  08/20/2014 07:29:44
 * 
 */
public class TipoLugar {

    private Integer idLugar;
    private String lugar;
    private Set<com.aprendoz_desarrollodb.data.Eventualidades> eventualidadeses = new HashSet<com.aprendoz_desarrollodb.data.Eventualidades>();

    public Integer getIdLugar() {
        return idLugar;
    }

    public void setIdLugar(Integer idLugar) {
        this.idLugar = idLugar;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public Set<com.aprendoz_desarrollodb.data.Eventualidades> getEventualidadeses() {
        return eventualidadeses;
    }

    public void setEventualidadeses(Set<com.aprendoz_desarrollodb.data.Eventualidades> eventualidadeses) {
        this.eventualidadeses = eventualidadeses;
    }

}
