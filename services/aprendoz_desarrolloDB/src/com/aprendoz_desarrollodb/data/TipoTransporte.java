
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoTransporte
 *  08/20/2014 07:29:45
 * 
 */
public class TipoTransporte {

    private Integer idtipoTransporte;
    private String tipoTransporte;
    private String descripcion;
    private Set<com.aprendoz_desarrollodb.data.TransporteRutas> transporteRutases = new HashSet<com.aprendoz_desarrollodb.data.TransporteRutas>();

    public Integer getIdtipoTransporte() {
        return idtipoTransporte;
    }

    public void setIdtipoTransporte(Integer idtipoTransporte) {
        this.idtipoTransporte = idtipoTransporte;
    }

    public String getTipoTransporte() {
        return tipoTransporte;
    }

    public void setTipoTransporte(String tipoTransporte) {
        this.tipoTransporte = tipoTransporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollodb.data.TransporteRutas> getTransporteRutases() {
        return transporteRutases;
    }

    public void setTransporteRutases(Set<com.aprendoz_desarrollodb.data.TransporteRutas> transporteRutases) {
        this.transporteRutases = transporteRutases;
    }

}
