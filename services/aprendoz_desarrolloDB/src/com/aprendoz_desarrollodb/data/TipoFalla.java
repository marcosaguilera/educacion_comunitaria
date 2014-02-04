
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoFalla
 *  02/04/2014 12:37:43
 * 
 */
public class TipoFalla {

    private Integer idTipoFalla;
    private String tipoFalla;
    private Set<com.aprendoz_desarrollodb.data.LogIngresoCarne> logIngresoCarnes = new HashSet<com.aprendoz_desarrollodb.data.LogIngresoCarne>();

    public Integer getIdTipoFalla() {
        return idTipoFalla;
    }

    public void setIdTipoFalla(Integer idTipoFalla) {
        this.idTipoFalla = idTipoFalla;
    }

    public String getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(String tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Set<com.aprendoz_desarrollodb.data.LogIngresoCarne> getLogIngresoCarnes() {
        return logIngresoCarnes;
    }

    public void setLogIngresoCarnes(Set<com.aprendoz_desarrollodb.data.LogIngresoCarne> logIngresoCarnes) {
        this.logIngresoCarnes = logIngresoCarnes;
    }

}
