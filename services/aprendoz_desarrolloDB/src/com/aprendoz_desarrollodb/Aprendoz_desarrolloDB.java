
package com.aprendoz_desarrollodb;

import java.util.Date;
import java.util.List;
import com.aprendoz_desarrollodb.data.output.GetPeopleInfoCombinedRtnType;
import com.aprendoz_desarrollodb.data.output.GetterOneRtnType;
import com.aprendoz_desarrollodb.data.output.GetterSyRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_desarrolloDB"
 *  08/15/2014 12:46:45
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_desarrolloDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetPeopleInfoCombinedRtnType> getPeopleInfoCombined(String search, PagingOptions pagingOptions) {
        return ((List<GetPeopleInfoCombinedRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloDBConstants.getPeopleInfoCombinedQueryName), search, pagingOptions));
    }

    public com.aprendoz_desarrollodb.data.Recurso getRecursoById(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollodb.data.Recurso> rtn = ((List<com.aprendoz_desarrollodb.data.Recurso> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloDBConstants.getRecursoByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_desarrollodb.data.TipoPersona getTipoPersonaById(Integer id, PagingOptions pagingOptions) {
        List<com.aprendoz_desarrollodb.data.TipoPersona> rtn = ((List<com.aprendoz_desarrollodb.data.TipoPersona> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloDBConstants.getTipoPersonaByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetterOneRtnType> getterOne(Date f1, PagingOptions pagingOptions) {
        return ((List<GetterOneRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloDBConstants.getterOneQueryName), f1, pagingOptions));
    }

    public List<GetterSyRtnType> getterSy(Date f1, PagingOptions pagingOptions) {
        return ((List<GetterSyRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloDBConstants.getterSyQueryName), f1, pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
