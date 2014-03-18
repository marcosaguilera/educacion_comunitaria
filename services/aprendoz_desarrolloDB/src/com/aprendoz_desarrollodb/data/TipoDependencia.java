
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoDependencia
 *  03/18/2014 08:50:37
 * 
 */
public class TipoDependencia {

    private Integer idtipodependencia;
    private String dependencia;
    private Set<com.aprendoz_desarrollodb.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_desarrollodb.data.ReportesDependencias>();

    public Integer getIdtipodependencia() {
        return idtipodependencia;
    }

    public void setIdtipodependencia(Integer idtipodependencia) {
        this.idtipodependencia = idtipodependencia;
    }

    public String getDependencia() {
        return dependencia;
    }

    public void setDependencia(String dependencia) {
        this.dependencia = dependencia;
    }

    public Set<com.aprendoz_desarrollodb.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_desarrollodb.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

}
