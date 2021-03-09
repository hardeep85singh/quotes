package org.example.quotesRestAPI.app;

import org.example.quotesRestAPI.rest.QuoteRestServices;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@ApplicationPath("/rest")
public class QuoteApp extends Application{
    private Set<Object> singletons = new HashSet<>();

    public QuoteApp(){
        singletons.add(new QuoteRestServices());
    }

    @Override
    public Set<Object> getSingletons(){
        return singletons;
    }

    @Override
    public Set<Class<?>> getClasses(){
        return super.getClasses();
    }

    @Override
    public Map<String, Object> getProperties() {
        return super.getProperties();
    }

}
