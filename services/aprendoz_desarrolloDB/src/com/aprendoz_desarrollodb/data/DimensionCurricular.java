
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.DimensionCurricular
 *  02/04/2014 12:37:43
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_desarrollodb.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollodb.data.Aprendizaje>();

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

}
