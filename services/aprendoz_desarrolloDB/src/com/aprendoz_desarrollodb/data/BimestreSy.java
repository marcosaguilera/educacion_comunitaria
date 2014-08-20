
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.BimestreSy
 *  08/20/2014 07:29:45
 * 
 */
public class BimestreSy {

    private Integer idBimSy;
    private Integer bimestre;
    private Date fechaInicio;
    private Date fechaFin;
    private Sy sy;

    public Integer getIdBimSy() {
        return idBimSy;
    }

    public void setIdBimSy(Integer idBimSy) {
        this.idBimSy = idBimSy;
    }

    public Integer getBimestre() {
        return bimestre;
    }

    public void setBimestre(Integer bimestre) {
        this.bimestre = bimestre;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
