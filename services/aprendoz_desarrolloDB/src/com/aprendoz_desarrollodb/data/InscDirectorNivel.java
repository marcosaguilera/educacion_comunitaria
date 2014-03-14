
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.InscDirectorNivel
 *  03/14/2014 11:48:13
 * 
 */
public class InscDirectorNivel {

    private Integer idInscDirectorNivel;
    private Persona persona;
    private Nivel nivel;

    public Integer getIdInscDirectorNivel() {
        return idInscDirectorNivel;
    }

    public void setIdInscDirectorNivel(Integer idInscDirectorNivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

}
