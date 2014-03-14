
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.BusPhone
 *  03/14/2014 11:48:13
 * 
 */
public class BusPhone {

    private Integer id;
    private BusDriver busDriver;
    private String phone;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BusDriver getBusDriver() {
        return busDriver;
    }

    public void setBusDriver(BusDriver busDriver) {
        this.busDriver = busDriver;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
