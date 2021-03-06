
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.SecretariaEquivalenciaNotas
 *  08/20/2014 07:29:45
 * 
 */
public class SecretariaEquivalenciaNotas {

    private Integer idSecretariaEquivalenciaNotas;
    private String calificacion;
    private String qualification;
    private Double puntaje;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Sy sy;

    public Integer getIdSecretariaEquivalenciaNotas() {
        return idSecretariaEquivalenciaNotas;
    }

    public void setIdSecretariaEquivalenciaNotas(Integer idSecretariaEquivalenciaNotas) {
        this.idSecretariaEquivalenciaNotas = idSecretariaEquivalenciaNotas;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

}
