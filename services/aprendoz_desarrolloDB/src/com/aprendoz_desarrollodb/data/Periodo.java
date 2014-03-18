
package com.aprendoz_desarrollodb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Periodo
 *  03/18/2014 08:50:36
 * 
 */
public class Periodo {

    private Integer idPeriodo;
    private String periodo;
    private Date fechaInicio;
    private Date fechaFin;
    private TipoPeriodo tipoPeriodo;
    private Sy sy;
    private Set<com.aprendoz_desarrollodb.data.InscAlumAsigCopy> inscAlumAsigCopies = new HashSet<com.aprendoz_desarrollodb.data.InscAlumAsigCopy>();
    private Set<com.aprendoz_desarrollodb.data.InscAlumAsigCopy2> inscAlumAsigCopy2s = new HashSet<com.aprendoz_desarrollodb.data.InscAlumAsigCopy2>();
    private Set<com.aprendoz_desarrollodb.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollodb.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollodb.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_desarrollodb.data.InscAlumAsig>();

    public Integer getIdPeriodo() {
        return idPeriodo;
    }

    public void setIdPeriodo(Integer idPeriodo) {
        this.idPeriodo = idPeriodo;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
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

    public TipoPeriodo getTipoPeriodo() {
        return tipoPeriodo;
    }

    public void setTipoPeriodo(TipoPeriodo tipoPeriodo) {
        this.tipoPeriodo = tipoPeriodo;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Set<com.aprendoz_desarrollodb.data.InscAlumAsigCopy> getInscAlumAsigCopies() {
        return inscAlumAsigCopies;
    }

    public void setInscAlumAsigCopies(Set<com.aprendoz_desarrollodb.data.InscAlumAsigCopy> inscAlumAsigCopies) {
        this.inscAlumAsigCopies = inscAlumAsigCopies;
    }

    public Set<com.aprendoz_desarrollodb.data.InscAlumAsigCopy2> getInscAlumAsigCopy2s() {
        return inscAlumAsigCopy2s;
    }

    public void setInscAlumAsigCopy2s(Set<com.aprendoz_desarrollodb.data.InscAlumAsigCopy2> inscAlumAsigCopy2s) {
        this.inscAlumAsigCopy2s = inscAlumAsigCopy2s;
    }

    public Set<com.aprendoz_desarrollodb.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollodb.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollodb.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_desarrollodb.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

}
