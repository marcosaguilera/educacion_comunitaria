
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.TransporteInscAlumTransporte
 *  08/20/2014 07:29:45
 * 
 */
public class TransporteInscAlumTransporte {

    private Integer idInscAlumTransporte;
    private String amPm;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByDomingoRuta;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByMiercolesRuta;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByViernesRuta;
    private Persona persona;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByMartesRuta;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByJuevesRuta;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByLunesRuta;
    private com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasBySabadoRuta;

    public Integer getIdInscAlumTransporte() {
        return idInscAlumTransporte;
    }

    public void setIdInscAlumTransporte(Integer idInscAlumTransporte) {
        this.idInscAlumTransporte = idInscAlumTransporte;
    }

    public String getAmPm() {
        return amPm;
    }

    public void setAmPm(String amPm) {
        this.amPm = amPm;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasByDomingoRuta() {
        return transporteRutasByDomingoRuta;
    }

    public void setTransporteRutasByDomingoRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByDomingoRuta) {
        this.transporteRutasByDomingoRuta = transporteRutasByDomingoRuta;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasByMiercolesRuta() {
        return transporteRutasByMiercolesRuta;
    }

    public void setTransporteRutasByMiercolesRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByMiercolesRuta) {
        this.transporteRutasByMiercolesRuta = transporteRutasByMiercolesRuta;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasByViernesRuta() {
        return transporteRutasByViernesRuta;
    }

    public void setTransporteRutasByViernesRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByViernesRuta) {
        this.transporteRutasByViernesRuta = transporteRutasByViernesRuta;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasByMartesRuta() {
        return transporteRutasByMartesRuta;
    }

    public void setTransporteRutasByMartesRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByMartesRuta) {
        this.transporteRutasByMartesRuta = transporteRutasByMartesRuta;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasByJuevesRuta() {
        return transporteRutasByJuevesRuta;
    }

    public void setTransporteRutasByJuevesRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByJuevesRuta) {
        this.transporteRutasByJuevesRuta = transporteRutasByJuevesRuta;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasByLunesRuta() {
        return transporteRutasByLunesRuta;
    }

    public void setTransporteRutasByLunesRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasByLunesRuta) {
        this.transporteRutasByLunesRuta = transporteRutasByLunesRuta;
    }

    public com.aprendoz_desarrollodb.data.TransporteRutas getTransporteRutasBySabadoRuta() {
        return transporteRutasBySabadoRuta;
    }

    public void setTransporteRutasBySabadoRuta(com.aprendoz_desarrollodb.data.TransporteRutas transporteRutasBySabadoRuta) {
        this.transporteRutasBySabadoRuta = transporteRutasBySabadoRuta;
    }

}
