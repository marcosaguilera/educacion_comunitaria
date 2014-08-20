
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.DimensionCurricular
 *  08/20/2014 07:29:45
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_desarrollodb.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollodb.data.Aprendizaje>();
    private Set<com.aprendoz_desarrollodb.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_desarrollodb.data.AprendizajesAsignaturas>();

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public Set<com.aprendoz_desarrollodb.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollodb.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

    public Set<com.aprendoz_desarrollodb.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_desarrollodb.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

}
