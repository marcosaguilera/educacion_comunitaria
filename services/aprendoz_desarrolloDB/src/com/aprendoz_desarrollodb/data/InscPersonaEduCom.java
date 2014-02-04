
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.InscPersonaEduCom
 *  02/04/2014 12:37:43
 * 
 */
public class InscPersonaEduCom {

    private Integer idInscPersonaEduCom;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Double descuento;
    private Boolean tomaTransporte;
    private String plazo;
    private Educom educom;
    private TipoPago tipoPago;
    private Persona persona;

    public Integer getIdInscPersonaEduCom() {
        return idInscPersonaEduCom;
    }

    public void setIdInscPersonaEduCom(Integer idInscPersonaEduCom) {
        this.idInscPersonaEduCom = idInscPersonaEduCom;
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

    public Double getDescuento() {
        return descuento;
    }

    public void setDescuento(Double descuento) {
        this.descuento = descuento;
    }

    public Boolean getTomaTransporte() {
        return tomaTransporte;
    }

    public void setTomaTransporte(Boolean tomaTransporte) {
        this.tomaTransporte = tomaTransporte;
    }

    public String getPlazo() {
        return plazo;
    }

    public void setPlazo(String plazo) {
        this.plazo = plazo;
    }

    public Educom getEducom() {
        return educom;
    }

    public void setEducom(Educom educom) {
        this.educom = educom;
    }

    public TipoPago getTipoPago() {
        return tipoPago;
    }

    public void setTipoPago(TipoPago tipoPago) {
        this.tipoPago = tipoPago;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
