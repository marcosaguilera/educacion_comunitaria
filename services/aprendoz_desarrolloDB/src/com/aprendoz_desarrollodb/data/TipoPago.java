
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoPago
 *  08/20/2014 07:29:44
 * 
 */
public class TipoPago {

    private Integer idTipoPago;
    private String tipoPago;
    private Set<com.aprendoz_desarrollodb.data.InscPersonaEduCom> inscPersonaEduComs = new HashSet<com.aprendoz_desarrollodb.data.InscPersonaEduCom>();

    public Integer getIdTipoPago() {
        return idTipoPago;
    }

    public void setIdTipoPago(Integer idTipoPago) {
        this.idTipoPago = idTipoPago;
    }

    public String getTipoPago() {
        return tipoPago;
    }

    public void setTipoPago(String tipoPago) {
        this.tipoPago = tipoPago;
    }

    public Set<com.aprendoz_desarrollodb.data.InscPersonaEduCom> getInscPersonaEduComs() {
        return inscPersonaEduComs;
    }

    public void setInscPersonaEduComs(Set<com.aprendoz_desarrollodb.data.InscPersonaEduCom> inscPersonaEduComs) {
        this.inscPersonaEduComs = inscPersonaEduComs;
    }

}
