
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.AccStudentCardAuthorization
 *  03/18/2014 08:50:37
 * 
 */
public class AccStudentCardAuthorization {

    private AccStudentCardAuthorizationId id;
    private AccStudentCard accStudentCard;
    private AccAuthorization accAuthorization;

    public AccStudentCardAuthorizationId getId() {
        return id;
    }

    public void setId(AccStudentCardAuthorizationId id) {
        this.id = id;
    }

    public AccStudentCard getAccStudentCard() {
        return accStudentCard;
    }

    public void setAccStudentCard(AccStudentCard accStudentCard) {
        this.accStudentCard = accStudentCard;
    }

    public AccAuthorization getAccAuthorization() {
        return accAuthorization;
    }

    public void setAccAuthorization(AccAuthorization accAuthorization) {
        this.accAuthorization = accAuthorization;
    }

}
