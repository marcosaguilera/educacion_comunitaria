
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.BusBus
 *  08/15/2014 08:00:46
 * 
 */
public class BusBus {

    private Integer id;
    private String plate;
    private Set<com.aprendoz_desarrollodb.data.BusRoute> busRoutes = new HashSet<com.aprendoz_desarrollodb.data.BusRoute>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Set<com.aprendoz_desarrollodb.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_desarrollodb.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}
