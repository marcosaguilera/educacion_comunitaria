
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoSolicitud
 *  08/20/2014 07:29:45
 * 
 */
public class TipoSolicitud {

    private Integer idTipoSolicitud;
    private String solicitud;
    private Set<com.aprendoz_desarrollodb.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_desarrollodb.data.TransporteNovedades>();

    public Integer getIdTipoSolicitud() {
        return idTipoSolicitud;
    }

    public void setIdTipoSolicitud(Integer idTipoSolicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
    }

    public String getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(String solicitud) {
        this.solicitud = solicitud;
    }

    public Set<com.aprendoz_desarrollodb.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_desarrollodb.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

}
