
package com.aprendoz_desarrollodb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Educom
 *  08/20/2014 07:29:45
 * 
 */
public class Educom {

    private Integer idEducom;
    private Boolean activoRetirado;
    private Integer edadRequeridadFinal;
    private Integer edadRequeridaInicial;
    private String comentario;
    private Date fechaInicio;
    private Date fechaFin;
    private Integer cupoMinimo;
    private Integer cupoMaximo;
    private Boolean lunes;
    private Date hora1Lunes;
    private Date hora2Lunes;
    private Boolean martes;
    private Date hora1Martes;
    private Date hora2Martes;
    private Boolean miercoles;
    private Date hora1Miercoles;
    private Date hora2Miercoles;
    private Boolean jueves;
    private Date hora1Jueves;
    private Date hora2Jueves;
    private Boolean viernes;
    private Date hora1Viernes;
    private Date hora2Viernes;
    private Boolean sabado;
    private Date hora1Sabado;
    private Date hora2Sabado;
    private Boolean domingo;
    private Date hora1Domingo;
    private Date hora2Domingo;
    private Integer profesor1;
    private Integer profesor2;
    private Float numeroHoras;
    private Double valorHonorarios;
    private Date fechaAperturaCurso;
    private Date fechaCierreCurso;
    private Double valorTransporte;
    private Double tarifaAnticipado;
    private Double costoTransporte;
    private String descripcion;
    private String tipoEducom;
    private Sy sy;
    private Costos costos;
    private Set<com.aprendoz_desarrollodb.data.InscPersonaEduCom> inscPersonaEduComs = new HashSet<com.aprendoz_desarrollodb.data.InscPersonaEduCom>();

    public Integer getIdEducom() {
        return idEducom;
    }

    public void setIdEducom(Integer idEducom) {
        this.idEducom = idEducom;
    }

    public Boolean getActivoRetirado() {
        return activoRetirado;
    }

    public void setActivoRetirado(Boolean activoRetirado) {
        this.activoRetirado = activoRetirado;
    }

    public Integer getEdadRequeridadFinal() {
        return edadRequeridadFinal;
    }

    public void setEdadRequeridadFinal(Integer edadRequeridadFinal) {
        this.edadRequeridadFinal = edadRequeridadFinal;
    }

    public Integer getEdadRequeridaInicial() {
        return edadRequeridaInicial;
    }

    public void setEdadRequeridaInicial(Integer edadRequeridaInicial) {
        this.edadRequeridaInicial = edadRequeridaInicial;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
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

    public Integer getCupoMinimo() {
        return cupoMinimo;
    }

    public void setCupoMinimo(Integer cupoMinimo) {
        this.cupoMinimo = cupoMinimo;
    }

    public Integer getCupoMaximo() {
        return cupoMaximo;
    }

    public void setCupoMaximo(Integer cupoMaximo) {
        this.cupoMaximo = cupoMaximo;
    }

    public Boolean getLunes() {
        return lunes;
    }

    public void setLunes(Boolean lunes) {
        this.lunes = lunes;
    }

    public Date getHora1Lunes() {
        return hora1Lunes;
    }

    public void setHora1Lunes(Date hora1Lunes) {
        this.hora1Lunes = hora1Lunes;
    }

    public Date getHora2Lunes() {
        return hora2Lunes;
    }

    public void setHora2Lunes(Date hora2Lunes) {
        this.hora2Lunes = hora2Lunes;
    }

    public Boolean getMartes() {
        return martes;
    }

    public void setMartes(Boolean martes) {
        this.martes = martes;
    }

    public Date getHora1Martes() {
        return hora1Martes;
    }

    public void setHora1Martes(Date hora1Martes) {
        this.hora1Martes = hora1Martes;
    }

    public Date getHora2Martes() {
        return hora2Martes;
    }

    public void setHora2Martes(Date hora2Martes) {
        this.hora2Martes = hora2Martes;
    }

    public Boolean getMiercoles() {
        return miercoles;
    }

    public void setMiercoles(Boolean miercoles) {
        this.miercoles = miercoles;
    }

    public Date getHora1Miercoles() {
        return hora1Miercoles;
    }

    public void setHora1Miercoles(Date hora1Miercoles) {
        this.hora1Miercoles = hora1Miercoles;
    }

    public Date getHora2Miercoles() {
        return hora2Miercoles;
    }

    public void setHora2Miercoles(Date hora2Miercoles) {
        this.hora2Miercoles = hora2Miercoles;
    }

    public Boolean getJueves() {
        return jueves;
    }

    public void setJueves(Boolean jueves) {
        this.jueves = jueves;
    }

    public Date getHora1Jueves() {
        return hora1Jueves;
    }

    public void setHora1Jueves(Date hora1Jueves) {
        this.hora1Jueves = hora1Jueves;
    }

    public Date getHora2Jueves() {
        return hora2Jueves;
    }

    public void setHora2Jueves(Date hora2Jueves) {
        this.hora2Jueves = hora2Jueves;
    }

    public Boolean getViernes() {
        return viernes;
    }

    public void setViernes(Boolean viernes) {
        this.viernes = viernes;
    }

    public Date getHora1Viernes() {
        return hora1Viernes;
    }

    public void setHora1Viernes(Date hora1Viernes) {
        this.hora1Viernes = hora1Viernes;
    }

    public Date getHora2Viernes() {
        return hora2Viernes;
    }

    public void setHora2Viernes(Date hora2Viernes) {
        this.hora2Viernes = hora2Viernes;
    }

    public Boolean getSabado() {
        return sabado;
    }

    public void setSabado(Boolean sabado) {
        this.sabado = sabado;
    }

    public Date getHora1Sabado() {
        return hora1Sabado;
    }

    public void setHora1Sabado(Date hora1Sabado) {
        this.hora1Sabado = hora1Sabado;
    }

    public Date getHora2Sabado() {
        return hora2Sabado;
    }

    public void setHora2Sabado(Date hora2Sabado) {
        this.hora2Sabado = hora2Sabado;
    }

    public Boolean getDomingo() {
        return domingo;
    }

    public void setDomingo(Boolean domingo) {
        this.domingo = domingo;
    }

    public Date getHora1Domingo() {
        return hora1Domingo;
    }

    public void setHora1Domingo(Date hora1Domingo) {
        this.hora1Domingo = hora1Domingo;
    }

    public Date getHora2Domingo() {
        return hora2Domingo;
    }

    public void setHora2Domingo(Date hora2Domingo) {
        this.hora2Domingo = hora2Domingo;
    }

    public Integer getProfesor1() {
        return profesor1;
    }

    public void setProfesor1(Integer profesor1) {
        this.profesor1 = profesor1;
    }

    public Integer getProfesor2() {
        return profesor2;
    }

    public void setProfesor2(Integer profesor2) {
        this.profesor2 = profesor2;
    }

    public Float getNumeroHoras() {
        return numeroHoras;
    }

    public void setNumeroHoras(Float numeroHoras) {
        this.numeroHoras = numeroHoras;
    }

    public Double getValorHonorarios() {
        return valorHonorarios;
    }

    public void setValorHonorarios(Double valorHonorarios) {
        this.valorHonorarios = valorHonorarios;
    }

    public Date getFechaAperturaCurso() {
        return fechaAperturaCurso;
    }

    public void setFechaAperturaCurso(Date fechaAperturaCurso) {
        this.fechaAperturaCurso = fechaAperturaCurso;
    }

    public Date getFechaCierreCurso() {
        return fechaCierreCurso;
    }

    public void setFechaCierreCurso(Date fechaCierreCurso) {
        this.fechaCierreCurso = fechaCierreCurso;
    }

    public Double getValorTransporte() {
        return valorTransporte;
    }

    public void setValorTransporte(Double valorTransporte) {
        this.valorTransporte = valorTransporte;
    }

    public Double getTarifaAnticipado() {
        return tarifaAnticipado;
    }

    public void setTarifaAnticipado(Double tarifaAnticipado) {
        this.tarifaAnticipado = tarifaAnticipado;
    }

    public Double getCostoTransporte() {
        return costoTransporte;
    }

    public void setCostoTransporte(Double costoTransporte) {
        this.costoTransporte = costoTransporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTipoEducom() {
        return tipoEducom;
    }

    public void setTipoEducom(String tipoEducom) {
        this.tipoEducom = tipoEducom;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Costos getCostos() {
        return costos;
    }

    public void setCostos(Costos costos) {
        this.costos = costos;
    }

    public Set<com.aprendoz_desarrollodb.data.InscPersonaEduCom> getInscPersonaEduComs() {
        return inscPersonaEduComs;
    }

    public void setInscPersonaEduComs(Set<com.aprendoz_desarrollodb.data.InscPersonaEduCom> inscPersonaEduComs) {
        this.inscPersonaEduComs = inscPersonaEduComs;
    }

}
